import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3006/categories")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResults(data);
            });
    }, []);

    return (
        <div className="App">
            My first e-commerce project in react
            {results.map((d) => (
                <div>{d.title}</div>
            ))}
        </div>
    );
}
export default App;
