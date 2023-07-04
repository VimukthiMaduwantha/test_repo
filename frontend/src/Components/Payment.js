import { Box, Checkbox, Divider, FormControlLabel, Grid, Switch } from '@mui/material'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaTags } from 'react-icons/fa'
import { BsCreditCard2Back } from 'react-icons/bs'

function Payment() {
    return (
        <>
            <div>
                <div style={{ textAlign: 'center' }}>
                    How to Pay your order?
                </div>
                <br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} ms={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button style={{ backgroundColor: '#E7B10A', border: '1px solid #E7B10A', width: '30%', marginRight: '25px' }}>Card</Button>{' '}
                                <Button style={{ backgroundColor: 'white', border: '1px solid black', width: '30%', color: 'black' }}>Cash</Button>{' '}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div>
                                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Hot food Promotion</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <FaTags style={{ marginRight: '12px' }} /><span>Use points</span>
                                    </div>
                                    <div>
                                        Loyalty Program Required
                                        <span>
                                            <Switch />
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: '5%' }}>
                                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Order Summery</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Food Total</p>
                                        <p>$00.00</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Food Total</p>
                                        <p>$00.00</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Food Total</p>
                                        <p>$00.00</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Food Total</p>
                                        <p>$00.00</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ color: '#E7B10A', fontSize: '30px', fontWeight: '400' }}>Total Payment</span>
                                </div>
                                <div>
                                    <span style={{ color: '#E7B10A', fontSize: '30px', fontWeight: '400' }}>$00.00</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div>
                                <BsCreditCard2Back style={{ fontSize: '23px' }} /><span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '5px' }}> Payment</span>
                            </div>
                            <hr />
                            <div style={{ padding: '10px' }}>
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="text" placeholder='XXXX XXXX XXXX XXXX' />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                    <div>
                                        <Form.Label>Exp Date</Form.Label>
                                        <Form.Control type="text" placeholder='MM/YY' />
                                    </div>
                                    <div>
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="text" placeholder='123' />
                                    </div>
                                </div>
                                <div>
                                    <FormControlLabel
                                        value="save"
                                        control={<Checkbox />}
                                        label="Save card details"
                                        labelPlacement="end"
                                    />
                                </div>
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button style={{ backgroundColor: '#E7B10A', border: '1px solid #E7B10A', width: '90%', }}>Pay $00.00</Button>{' '}
                                </div>
                                <span style={{ marginTop: '5px', fontSize: '15px', color: '#9DB2BF' }}>Your personal data will be used to process your order, support your experience throughout this website, and for order processes described in our privacy policy.</span>
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </div>

        </>
    )
}

export default Payment