import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Card, Grid, IconButton } from '@mui/material';
import { Container, Form } from 'react-bootstrap';
import b2 from '../Images/burger2.jpg'

function CartCard() {
    return (
        <>
            <Card style={{ display: 'flex', justifyContent: 'space-between'/* , backgroundColor: 'red'  */, marginTop: '2%' }}>
                <div style={{ width: '90%', /* backgroundColor: 'green' */ }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} style={{ display: 'flex', }}>
                            <Grid item xs={4} md={4} /* style={{ backgroundColor: 'blue' }} */>
                                <div style={{ padding: '5px', display: 'flex', }}>
                                    <img
                                        src={b2}
                                        width='50%'
                                        height='50%'
                                        style={{ borderRadius: '5px', marginRight: '10px' }}
                                    />
                                    <div>
                                        <p>Food Name</p>
                                        <p>$00.00</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4} md={4} /* style={{ backgroundColor: 'blue' }} */>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <div style={{ width: '40%', textAlign: 'center' }}>
                                        <Form.Label >Add-ons</Form.Label>
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4} md={4} /* style={{ backgroundColor: 'blue' }} */>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <div style={{ width: '40%', textAlign: 'center' }}>
                                        <Form.Label>Quantity</Form.Label>
                                    </div>
                                    <div style={{ width: '50%' }}>

                                        <Form.Control type="number" />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ width: '10%' }}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
            </Card>
        </>
    )
}

export default CartCard