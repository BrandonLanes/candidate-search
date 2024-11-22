import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
const CandidateSearch = () => {
    const [currentCandidate, setCurrentCandidate] = useState({
        name: '',
        username: '',
        location: '',
        avatar: '',
        email: '',
        html_url: '',
        company: '',
    });
    const [searchInput, setSearchInput] = useState('');
    const addToSavedCandidates = () => {
        let parsedSavedCandidates = [];
        const storedSavedCandidates = localStorage.getItem('test');
    };
    const searchForCandidateByName = async (event, candidate_name) => {
        event.preventDefault();
        const data = await searchGithubUser(candidate_name);
        setCurrentCandidate(data);
    };
    const searchForRandomCandidate = async () => {
        const results = await searchGithub();
        return results;
    };
    console.log('Here is Github data');
    console.log(searchForRandomCandidate());
    return (_jsx(_Fragment, { children: _jsxs("section", { id: 'searchSection', children: [_jsx("h1", { children: "CandidateSearch" }), _jsx(CandidateCard, { currentUser: currentCandidate, addToSavedCandidates: addToSavedCandidates })] }) }));
};
export default CandidateSearch;
