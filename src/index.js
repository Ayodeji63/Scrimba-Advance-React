import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './Module2(React Reuse)/Render/App';
// import App from './Performance/shouldComponentUpdate/App';
// import App from "./Module 3 (React.Context)/Example 1/App";
// import App from './Module 3 (React.Context)/Challenge 1/App';
// import App from './Module 3 (React.Context)/Example2/App';
// import App from './Module 3 (React.Context)/Challenge 3/App';
// import App from './Module 3 (React.Context)/ReactDocs/Example1/App';
// import App from './Module 4/SpeedTpyingGame/App';
// import App from "./Module 4/Hooks/UseContext/App"
import { ThemeContextProvider } from './Module 4/Hooks/UseContext/themeContext';
// import App from './useRef/App';
import reportWebVitals from './reportWebVitals';
// import ThemeContext from "./Module 3 (React.Context)/themeContext"

// const {Provider, Consumer} = ThemeContext
// import { Provider } from './Module 3 (React.Context)/Challenge 1/themeContext';
// import ThemeContext from './Module 3 (React.Context)/Example2/themeContext';
// import {UserContextProvider} from './Module 3 (React.Context)/Challenge 3/userContext';
// import App from './Module 4/Hooks/UseContext/customHooks/App';
// import App from './Module 4/Hooks/UseContext/customHooks/RecapOnReusability/App';
// import App from "./Module 4/Hooks/UseContext/CustomHooks2/App"
// import App from "./Module 4/Hooks/App"
// import App from './Module5(React-Router)/App';
import App from './Module5(React-Router)/Lesson2/App';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
        <App />
        </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
