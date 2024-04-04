import React from "react";
import { useState, useEffect } from "react";


export default function APICall() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));

    }, []);



    return (
        <div>
            <h1>API Call</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>  
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}