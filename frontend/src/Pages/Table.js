import React, { useState } from 'react'
import TableNav from '../Components/TableNav'
import { Button, Container, Form } from 'react-bootstrap'
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import burgers from '../Data/Burger.json'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import b1 from '../Images/burger1.jpeg'

function Table() {

    const [modal, setModal] = useState(false);
    return (
        <>
            <TableNav />
            <Container style={{ marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <Form>
                            <Form.Control type="text" placeholder="🔍 Search" style={{ width: '100%' }} />
                        </Form>
                    </div>
                    <div style={{ marginLeft: '5px' }}>
                        <Button variant="warning">Search</Button>
                    </div>
                </div>
                <br />

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {burgers.map((burger, index) => (
                            <Grid item xs={6} md={3}>
                                <CardActionArea onClick={() => setModal(true)}>
                                    <Card key={index}>
                                        <img
                                            src={burger.image}
                                            width='100%'
                                            height='auto'
                                            alt='Burger'
                                        />

                                        <CardContent style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white' }}>
                                            <Typography>{burger.name}</Typography>
                                            <Typography>{burger.price}</Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
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
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
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
            </Container>
        </>
    )
}

export default Table