import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function PlantDisplay() { 
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();



    useEffect(() => {
        fetch("/greenhouse")
            .then((res) => res.json())
            .then((plants) => {
                    setPlants(plants);
            })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                })
    }, []);
    
    if (loading) {
        return <p>Data is loading...</p>;
    }
    
    if (error || !Array.isArray(plants)) {
        return <p>There was an error loading your data!</p>;
      }

    return (
        <div>
            <h1>Display Plants</h1>
            {plants.map((item) => (
        <div key={item.title}>{item.content}</div>
            ))}

            <div>
            <Button variant="contained" component={Link} to="/addplant" >Add Plant Friend</Button>
            </div>
        </div>
    )
}

export default PlantDisplay;