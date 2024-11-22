import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul>
        <li>
          <Link to="./pages/CandidateSearch">Candidate Search</Link>
        </li>
        <li>
          <Link to="./pages/ErrorPage">Error Page</Link>
        </li>
        <li>
          <Link to="./pages/SavedCandidates">Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;