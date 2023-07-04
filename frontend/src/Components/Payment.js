import { Box, Grid, Switch } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
import { FaTags } from 'react-icons/fa'

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
                                <p style={{ fontSize: '20px' }}>Hot food Promotion</p>
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
                                <div style={{ marginTop: '2%' }}>
                                    <p style={{ fontSize: '20px' }}>Hot food Promotion</p>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>

                    </Grid>
                </Box>
            </div>

        </>
    )
}

export default Payment