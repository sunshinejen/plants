import React, { useState } from "react";
import axios from "axios";

function AddPlant() { 

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newPlant = {
            title: input.title,
            content: input.content 
        }
        axios.post('http://localhost:3001/addplant', newPlant)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          
    }




    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="Plant Name"></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="content" value={input.content} className="form-control"></textarea>
                </div>
                
                <button onClick={handleClick} className="btn btn-lg btn-info" placeholder="Plant">Add Plant</button>

            </form>
        </div>
    )
}

export default AddPlant;