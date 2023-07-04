import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import b1 from '../Images/burger1.jpeg'
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { Button, Form } from 'react-bootstrap';


function PopUp() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div>
                <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} >
                    <ModalHeader toggle={() => setModal(!modal)} />
                    <ModalBody>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} >
                                <Card>
                                    <img
                                        src={b1}
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
                                            Food name here
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography>
                                            In the vast expanse of existence, countless stories unfold, intertwining the lives
                                            of beings who seek meaning and connection. From the smallest atom to the boundless cosmos,
                                            intricate patterns emerge, reflecting the beauty of creation. In this wondrous tapestry, every word,
                                            thought, and action reverberates, shaping our
                                            collective journey towards understanding and enlightenment.
                                        </Typography>
                                        <Typography>
                                            ingredients
                                            ingredients
                                            ingredients
                                            ingredients
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
                                    Price/ <span style={{ color: '#E7B10A' }}>$20.24</span>
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