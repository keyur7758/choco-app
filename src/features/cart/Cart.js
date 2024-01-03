import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import '../cart/Cart.css'
import { decCart, deleteCart, incCart } from './cartSlice';
import Event from '../../components/event/Event';

export default function Cart() {
    const cart = useSelector(state => state.Cart.cart)
    const [order, setOrder] = useState(false)
    const [form, setForm] = useState(false)
    const [showCart, setShowCart] = useState(true)
    const [Empty,setEmpty] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className='product-area'>
            <Event/>
            <div className='container'>
                {
                    showCart&&
             
                <div className='cart-area'>
                    <div className='row g-4  row-cols-xl-3 row-cols-md-3 row-cols-sm-2 row-cols-2'>
                        {
                            cart?.map((item) => (
                                <div className='col'>
                                    <Card >
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='product-title'>{item.title}</Card.Title>
                                            <Card.Text className='txt'>{item.txt} </Card.Text>
                                            <div className='addremove-box'>
                                                <Button variant="outline-dark" className='fun-cart-btn' onClick={() => dispatch(incCart(item))}><i class="fa-solid fa-plus"></i></Button>
                                                <Card.Text className='txt quantity'>{item.quantity} </Card.Text>
                                                <Button variant="outline-dark" className='fun-cart-btn' onClick={() => dispatch(decCart(item))}><i class="fa-solid fa-minus"></i></Button>
                                            </div>
                                            <Card.Text className='txt'><strong>${item.price * item.quantity}.00</strong></Card.Text>
                                            <Button variant="outline-dark" className='fun-cart-btn' onClick={() => dispatch(deleteCart(item.id))}><i class="fa-solid fa-trash"></i></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    <div className='total-box'>
                        <h4><strong> Total :</strong> ${cart.reduce((total, data) => total + data.price * data.quantity, 0)}.00</h4>
                        <Button variant="outline-dark" onClick={() => { setShowCart(false); setForm(true) }}>Pay</Button>

                    </div>
                </div>
                
                   }
                  {form &&
                    <>
                        <div className='from-area'>
                            <div className="form-box" >
                                <div className="customer-detail">
                                    <h2>Fill Your Details Here</h2>
                                    <form>
                                        <input id="name-input" type="text" placeholder="Firstname" />
                                        <input type="text" placeholder="Lastname" /><br />
                                        <input id="name-input" type="text" placeholder="Phone" />
                                        <input type="text" placeholder="Postal Code" /><br />
                                        <input id="name-input" type="text" placeholder="Email" />
                                        <input type="text" placeholder="City" /><br />
                                        <input className="input-subject" type="text" id="message-box" placeholder="Address" />
                                        <button type="submit" className="btn btn-dark btn-lg btn-block btn-pay" onClick={() => { setOrder(true); setForm(false) }}>
                                            Pay / Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>

                }
                    {
              order &&
                    <div className='thanks-area'>
                        <div className='thanks-box'>
                            <i className="fa-solid fa-check"></i> <span>Thank you. Your order has been received.</span>
                        </div>
                        <div className='row g-0 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2'>
                            <div className='col'>
                                <div className='order-box'>
                                    <p>ORDER NUMBER:</p>
                                    <h4>XRQ4567</h4>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='order-box'>
                                    <p>DATE:</p>
                                    <h4>Jan 2, 2024</h4>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='order-box'>
                                    <p>EMAIL:</p>
                                    <h4>customer@.com</h4>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='order-box'>
                                    <p>TOTAL:</p>
                                    <h4>${cart.reduce((acc, data) => data.price * data.quantity + acc, 0)}.00</h4>
                                </div>
                            </div>
                            <div className='col last-col'>
                                <div className='order-box'>
                                    <p>PAYMENT METHOD:</p>
                                    <h4>cash on delivery</h4>
                                </div>
                            </div>

                        </div>
                        <p>Pay with cash upon delivery.</p>
                        <div className='order-btns'>
                            <Button variant="dark" className="login-btn" onClick={() => { setShowCart(true); setOrder(false) }}>
                                Back
                            </Button>
                        </div>
                    </div>
                    }

            </div>
        </div>
    )
}
