import React from 'react'
import { Container } from 'react-bootstrap';
import CartCard from '../Components/CartCard';
import Payment from '../Components/Payment';

function Order() {
    return (
        <>
            <Container>
                <CartCard />
                <CartCard />
                <CartCard />
                <br />
                <Payment />
            </Container>
        </>
    )
}

export default Order