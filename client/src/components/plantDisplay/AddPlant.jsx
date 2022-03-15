import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDog, faCat} from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';


function AddPlant() { 


    const [input, setInput] = useState({
        title: '',
        content: '',
        toxicK9: '',
        toxicFel: ''
    });

    

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
            content: input.content,
            toxicK9: input.toxicK9,
            toxicFel: input.toxicFel

        }
        axios.post('http://localhost:3001/addplant', newPlant)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
          
    }




    return (
        <Paper
            elevation={12}
            style={{
            padding: 16,
            border: "1px solid black"
        }}
        >
        <form on onSubmit={handleClick}>
            <Grid container direction="column" justifyContent="center" alignItems="stretch" >
                <Grid item spacing={4}>
                    <TextField
                        fullWidth
                        id="plant-name-input"
                        name= "title"
                        label="Name"
                        type="text"
                        value={input.title}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item rowSpacing={4}>
                    <TextField
                        fullWidth
                        id="filled-multiline-flexible"
                        name= "content"
                        label="Notes on your friend"
                        placeholder="Notes on your friend"
                        multiline
                        variant="filled"
                        value={input.content}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item rowSpacing={4}>
                    <FormControl>
                        <FormLabel>Is this toxic to dogs? <FontAwesomeIcon icon={faDog} /></FormLabel>
                        <RadioGroup
                            name="toxicK9"
                            value={input.toxicK9}
                            onChange={handleChange}
                        row>
                            <FormControlLabel
                                key="yes"
                                value="yes"
                                control={<Radio size="medium" />}
                                label="yes"
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="medium" />}
                                label="no"
                            />
                            <FormControlLabel
                                key="unknown"
                                value="unknown"
                                control={<Radio size="medium" />}
                                label="unknown"
                            />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Is this toxic to cats? <FontAwesomeIcon icon={faCat} /></FormLabel>
                        <RadioGroup
                            name="toxicFel"
                            value={input.toxicFel}
                            onChange={handleChange}
                        row>
                            <FormControlLabel
                                key="yes"
                                value="yes"
                                control={<Radio size="medium" />}
                                label="yes"
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="medium" />}
                                label="no"
                            />
                            <FormControlLabel
                                key="unknown"
                                value="unknown"
                                control={<Radio size="medium" />}
                                label="unknown"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Grid>
        </form>
    </Paper>
    )
}

export default AddPlant;