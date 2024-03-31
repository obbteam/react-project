import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter} from "react-router-dom";
import {LoginState} from "./context/loginContext";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <LoginState>
            <App/>
        </LoginState>
    </HashRouter>
);
