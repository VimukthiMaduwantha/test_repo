import { Box, Card, CardContent, Grid, IconButton, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import menu from '../Data/Menu.json'
import menus from '../Data/Menus.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Styles/Card.css'
// import { FaHeart } from 'react-icons/fa'

function ViewMenu() {

    return (
        <>
            <Container style={{ /* backgroundColor: 'red', */ marginTop: '10px' }}>
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
                <div style={{ marginBottom: '5px' }}>
                    "Suggestions for you"
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {menu.map((menus, index) => (
                            <Grid item xs={6} md={3}>
                                <Card key={index}>
                                    <img
                                        src={menus.image}
                                        width='100%'
                                        height='auto'
                                        alt='Burger'
                                    />
                                    {/* <FavoriteBorderIcon className='favourite-btn' /> */}
                                    <CardContent style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white' }}>
                                        <Typography>{menus.name}</Typography>
                                        <Typography>{menus.price}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <br />
                <div style={{ marginBottom: '5px' }}>
                    "Menus"
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {menus.map((menuss, index) => (
                            <Grid item xs={6} md={3}>
                                <Card key={index}>
                                    <img
                                        src={menuss.image}
                                        width='100%'
                                        height='auto'
                                        alt='Burger'
                                    />
                                    {/* <FavoriteBorderIcon className='favourite-btn' /> */}
                                    <CardContent style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', color: 'white' }}>
                                        <Typography>{menuss.name}</Typography>
                                        <Typography>{menuss.price}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default ViewMenu