import { useEffect, useState } from "react";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<any[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem("savedCandidates");
    if (savedCandidates) {
      setCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ? (
        <ul>
          {candidates.map((candidate, index) => (
            <li key={index}>
              <h2>{candidate.name}</h2>
              <p>{candidate.company}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates saved yet.</p>
      )}
    </>
  );
};

export default SavedCandidates;
