import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToSavedCandidates = () => {
    let parsedSavedCandidates: Candidate[] = [];
    const storedSavedCandidates = localStorage.getItem()
  }
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;