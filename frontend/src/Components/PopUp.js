import React, { useState, useContext, useEffect } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import b1 from '../Images/burger1.jpeg'
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { Button, Form } from 'react-bootstrap';
import { FoodContext } from '../Context/FoodContext';

function PopUp({ isOpen, toggle }) {
    const [modal, setModal] = useState(false);
    const { food } = useContext(FoodContext);

    return (
        <>
            <div>
                <Modal size='lg' isOpen={isOpen} toggle={toggle} >
                    <ModalHeader toggle={toggle} />
                    <ModalBody>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} >
                                <Card>
                                    <img
                                        src={food.image}
                                        alt='burger1'
                                        width='100%'
                                        height='auto'
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={9} md={6} >
                                <Card>
                                    <CardContent>
                                        <Typography>
                                            {food.name}
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography>
                                            {food.description}
                                        </Typography>
                                        <br />
                                        <Typography style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                            <span>Ingrdients : </span>
                                            <div>
                                                {food.ingredients.map((ing, index) => (
                                                    <p key={index}>{ing}</p>
                                                ))}
                                            </div>
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Form.Label >Add-ons</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <br />
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" />
                                        <br />
                                        <Button style={{ backgroundColor: '#E7B10A', border: '1px solid #E7B10A', width: '100%' }}>Add to Checkout</Button>{' '}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3} md={2} >
                                <Typography>
                                    Price/ <span style={{ color: '#E7B10A' }}>{food.price}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default PopUp