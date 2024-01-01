import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import '../cart/Cart.css'
import { decCart, deleteCart, incCart } from './cartSlice';

export default function Cart() {
    const cart = useSelector(state => state.Cart.cart)
    const dispatch = useDispatch()

    return (
        <div className='product-area'>
            <div className='container'>
                <div className='cart-area'>
                    <div className='row g-4 row-cols-xl-3'>
                        {
                            cart?.map((item) => (
                                <div className='col'>
                                    <Card >
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='product-title'>{item.title}</Card.Title>
                                            <Card.Text className='txt'>{item.txt} </Card.Text>
                                            <div className='addremove-box'>
                                                <Button variant="outline-dark" onClick={() => dispatch(incCart(item))}><i class="fa-solid fa-plus"></i></Button>
                                                <Card.Text className='txt quantity'>{item.quantity} </Card.Text>
                                                <Button variant="outline-dark" onClick={() => dispatch(decCart(item))}><i class="fa-solid fa-minus"></i></Button>
                                            </div>
                                            <Card.Text className='txt'>${item.price * item.quantity}.00</Card.Text>
                                            <Button variant="outline-dark" onClick={() => dispatch(deleteCart(item.id))}><i class="fa-solid fa-trash"></i></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <div className='total-box'>
                        <h4><strong> Total :</strong> ${cart.reduce((total, data) => total + data.price * data.quantity, 0)}.00</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
