import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AiFillStar from 'react-icons/ai';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { GiSandwich, GiThreeLeaves } from 'react-icons/gi'
import { PiWineFill, PiHamburgerFill } from 'react-icons/pi';
import { IoIceCream } from 'react-icons/io5';
import { CiFries } from 'react-icons/ci'
import { BiCoffeeTogo, BiSolidStar } from 'react-icons/bi'
import { Link } from 'react-router-dom';

function TableNav() {
    return (
        <>
            <div style={{ backgroundColor: 'black'/* , paddingTop: '5px', paddingBottom: '5px' */, paddingLeft: '10px' }} >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center'/* , gap: '8px' */ }}>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><BiSolidStar /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Favourite</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/burgers'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><PiHamburgerFill /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Burgers</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }} >
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><GiSandwich /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Sandwiches</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><GiThreeLeaves /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Salads</div>
                            </a>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><PiWineFill /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Deserts</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><BiCoffeeTogo style={{ fontSize: '20px' }} /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Drinks</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '15px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><IoIceCream /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Deserts</div>
                            </a>
                        </Grid>
                        <Grid className='grid-btn' item xs={3} style={{ marginRight: '10px', display: 'block', paddingTop: '2px' }}>
                            <a href='/'>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}><CiFries /></div>
                                <div style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '10px' }}>Side Orders</div>
                            </a>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}

export default TableNav