import React, { useEffect, useState } from 'react';


const Students = () => {
    const [studentMap, setStudentMap] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/students`)
            .then((res) => res.json())
            .then((res) => setStudentMap(res));
    }, [studentMap]);

    console.log(studentMap)
    return (
        <div className="container m-5">
            <h1>Students List</h1>
        {studentMap.map((student) => (
                <div  
                    key={student.id}
                >
                    {student.name}
                </div>
            )
            )
        }
        </div>
    )
}

export default Students;