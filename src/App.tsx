import {
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from "./components/dashboard";


function App() {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
}
export default App;
