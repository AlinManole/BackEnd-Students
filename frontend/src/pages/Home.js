import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from '../components/Students';


const Home = () => {
    const [name, setName] = useState([])
    const [val, setVal] = useState()

    const handleSubmit = e => {
        e.preventDefault()

        const student = {
            name: name
        }
        console.log(name)

        fetch('http://localhost:5000/students', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    function handleChange(event) {
        setName(event.target.value);
    }



    return (
        <div className="container m-5">
            <div >
                <h2>Add Student</h2>
                <form onSubmit={handleSubmit}>
                    <input className="m-1" type="text" onChange={handleChange} />
                    <button className="btn-primary" onClick={() => setVal(() => "")} type="submit">Send</button>
                </form>
            </div>
            <Students />
        </div>
    );
};

export default Home