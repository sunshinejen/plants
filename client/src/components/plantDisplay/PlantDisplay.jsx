import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Container, ListGroup } from "react-bootstrap";
import {GiCat, GiSittingDog } from "react-icons/gi";


//displays random image but it refreshes everytime
function randomImage() { 
    var images = [require('./img/plant_1.png'), require('./img/plant_2.png'), require('./img/plant_3.png')] //, require('./img/color_plant_1.png'), require('./img/color_plant_2.png'), require('./img/color_plant_3.png')
    var i = Math.floor(Math.random() * images.length);
    var rImage = images[i];
    return (
        <Card.Img src={rImage}/>
    )
}




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
        <Container>
            <Row>
            {plants.map((plants, index) => (
                <Col key={index} xs={12} md={4} lg={3}>
                    <Card>
                        {randomImage()}
                        <Card.Body>
                            <Card.Title>{plants.title }</Card.Title>
                            <Card.Text>{plants.content}</Card.Text>
                            <Card.Header className="text-center"> <GiCat style={{ fill: 'red' }} /><GiSittingDog style={{ fill: 'green' }} /></Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                        </Card.Body>

                    </Card>
                </Col>   
      ))}
            </Row>
            <div>
            <Button variant="contained" component={Link} to="/addplant" >Add Plant Friend</Button>
            </div>
        </Container>
        
    )
}

export default PlantDisplay;