import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";



function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    







    return (
        <div className="LoginApp">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default App;