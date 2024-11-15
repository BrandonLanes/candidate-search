import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

interface GithubUser {
  id: number;
  login: string;
  name?: string;
  location?: string;
  avatar_url?: string;
  email?: string;
  html_url?: string;
  company?: string;
}

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<GithubUser[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch candidate list on component load
  useEffect(() => {
    const fetchCandidateList = async () => {
      setLoading(true);
      setError(null);
      try {
        const users = await searchGithub(); // Get a randomized list of GitHub users
        const detailedCandidates = await Promise.all(
          users.map((user: { login: string }) => searchGithubUser(user.login))
        );
        setCandidates(detailedCandidates);
      } catch (err) {
        setError('Failed to load candidates.');
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateList();
  }, []);

  // Save candidate and move to next
  const handleSaveCandidate = () => {
    if (candidates[currentIndex]) {
      setSavedCandidates((prev) => [...prev, candidates[currentIndex]]);
    }
    moveToNextCandidate();
  };

  // Skip candidate and move to next
  const handleSkipCandidate = () => {
    moveToNextCandidate();
  };

  // Move to the next candidate
  const moveToNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Current candidate or no more candidates
  const currentCandidate = candidates[currentIndex];
  const noMoreCandidates = currentIndex >= candidates.length;

  return (
    <div>
      <h1>Candidate Search</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <div>
          {noMoreCandidates ? (
            <p>No more candidates available.</p>
          ) : (
            <>
              <img src={currentCandidate?.avatar_url} alt="Avatar" width="100" />
              <p><strong>Name:</strong> {currentCandidate?.name || 'N/A'}</p>
              <p><strong>Username:</strong> {currentCandidate?.login}</p>
              <p><strong>Location:</strong> {currentCandidate?.location || 'N/A'}</p>
              <p><strong>Email:</strong> {currentCandidate?.email || 'N/A'}</p>
              <p><strong>Company:</strong> {currentCandidate?.company || 'N/A'}</p>
              <p>
                <strong>Profile:</strong>{' '}
                <a href={currentCandidate?.html_url} target="_blank" rel="noopener noreferrer">
                  {currentCandidate?.html_url}
                </a>
              </p>

              <button onClick={handleSaveCandidate}>+</button>
              <button onClick={handleSkipCandidate}>-</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;