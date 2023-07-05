import React, { useState, useContext } from 'react'
import TableNav from '../Components/TableNav'
import { Button, Container, Form } from 'react-bootstrap'
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import burgers from '../Data/Burger.json'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import b1 from '../Images/burger1.jpeg'
import { FoodContext } from '../Context/FoodContext'
import PopUp from '../Components/PopUp'


function Table() {
    const { foodSetter, food } = useContext(FoodContext);
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
                                <CardActionArea onClick={() => { foodSetter(burger); setModal(true) }}>
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
                {food && <PopUp isOpen={modal} toggle={() => setModal(!modal)} />}
            </Container>
        </>
    )
}

export default Table