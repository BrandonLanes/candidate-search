import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
// import Nav from './components/Nav';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Nav, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
}
export default App;
