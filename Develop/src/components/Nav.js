import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Nav = () => {
    // TODO: Add necessary code to display the navigation bar and link between the pages
    return (_jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "./pages/CandidateSearch", children: "Candidate Search" }) }), _jsx("li", { children: _jsx(Link, { to: "./pages/ErrorPage", children: "Error Page" }) }), _jsx("li", { children: _jsx(Link, { to: "./pages/SavedCandidates", children: "Saved Candidates" }) })] }) }));
};
export default Nav;
