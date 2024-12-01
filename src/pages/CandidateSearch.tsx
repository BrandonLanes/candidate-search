import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  console.log(results);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: null,
    login: null,
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
    const userResult = await searchGithubUser(data[0].login as string);
    console.log(userResult)

    const candidate = {
      id: userResult.id,
      name: userResult.login,
      login: userResult.login,
      username: userResult.login,
      location: userResult.location,
      avatar: userResult.avatar_url,
      email: userResult.email,
      html_url: userResult.html_url,
      company: userResult.company,
    };
    setCurrentCandidate(candidate)
    // await searchForCandidateByName(data[currentidx].username || '')
    // return results
  };

  console.log('Here is Github data');
  // console.log(searchForRandomCandidate());

  const makeDecision = async () => {
    // if (isSelected) {
      let displayCandidates: Candidate[] = []

      const savedCandidates = localStorage.getItem('savedCandidates')
      if (typeof savedCandidates === 'string') {
        displayCandidates = JSON.parse(savedCandidates)
      }
      displayCandidates.push(currentCandidate)
      localStorage.setItem('savedCandidates', JSON.stringify(displayCandidates))
    // }
    if (currentidx + 1 < results.length) {
      setCurrentidx(currentidx + 1)
      await searchForCandidateByName(results[currentidx + 1].login || '')
    } else {
      setCurrentidx(0)
      await searchForCandidateByName(results[0].login || '')
    }
  }
  const denyDecision = async () => {
    setCurrentidx(currentidx + 1)
    await searchForCandidateByName(results[currentidx].login || '')
  }

  useEffect(() => {
    searchForRandomCandidate()
    // searchForCandidateByName(currentCandidate.username || '')
  },[])

  return (
    <>
      <section id='searchSection'>
        {/* <form
          onSubmit={(event: FormEvent) =>
            searchForCandidateByName(event, searchInput)
          }
        > */}
          <h1>Candidate Search</h1>
          <CandidateCard
            currentCandidate={currentCandidate}
            makeDecision={makeDecision} 
            denyDecision={denyDecision}
            />
            {/* // addToSavedCandidates={addToSavedCandidates} */}
        {/* </form> */}
      </section>
      
    </>
  );
};

export default CandidateSearch;