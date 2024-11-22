import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: null,
    name: null,
    username: null,
    location: null,
    avatar: null,
    email: null,
    html_url: null,
    company: null,
  });

  const [currentidx, setCurrentidx] = useState<number>(0);
  // const [searchInput, setSearchInput] = useState<string>('');

  // const addToSavedCandidates = () => {
  //   let parsedSavedCandidates: Candidate[] = [];
  //   const storedSavedCandidates = localStorage.getItem('test')
  // }

  // const searchForCandidateByName = async (event: FormEvent, candidate_name: string) => {
  //   event.preventDefault();
  // const searchForCandidateByName = async (event: FormEvent, candidate_name: string) => {
  const searchForCandidateByName = async (user: string) => {
    const data: Candidate = await searchGithubUser(user);
    setCurrentCandidate(data)
    
  };
  const searchForRandomCandidate = async () => {
    // const results = await searchGithub();
    const data: Candidate[] = await searchGithub();
    setResults(data)
    await searchForCandidateByName(data[currentidx].username || '')
    // return results
  };

  console.log('Here is Github data');
  console.log(searchForRandomCandidate());

  const makeDecision = async (isSelected:boolean) => {
    if (isSelected) {
      let displayCandidates: Candidate[] = []

      const savedCandidates = localStorage.getItem('savedCandidates')
      if (typeof savedCandidates === 'string') {
        displayCandidates = JSON.parse(savedCandidates)
      }
      displayCandidates.push(currentCandidate)
      localStorage.setItem('savedCandidates', JSON.stringify(displayCandidates))
    }
    if (currentidx + 1 < results.length) {
      setCurrentidx(currentidx + 1)
      await searchForCandidateByName(results[currentidx + 1].username || '')
    } else {
      setCurrentidx(0)
      await searchForCandidateByName()
    }
  }

  useEffect(() => {
    searchForRandomCandidate()
    searchForCandidateByName(currentCandidate.username || '')
  },[])

  return (
    <>
      <section id='searchSection'>
        {/* <form
          onSubmit={(event: FormEvent) =>
            searchForCandidateByName(event, searchInput)
          }
        > */}
          <h1>CandidateSearch</h1>
          <CandidateCard
            currentCandidate={currentCandidate}
            makeDecision={makeDecision} />
            {/* // addToSavedCandidates={addToSavedCandidates} */}
        {/* </form> */}
      </section>
      
    </>
  );
};

export default CandidateSearch;