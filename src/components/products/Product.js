import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../products/Product.css'
import { GetCart } from '../../features/cart/cartSlice';

export default function Product() {
    const products = useSelector(state => state.Product.products)
    const dispatch = useDispatch()
    console.log(products)
    return (
        <>
            <div className='product-area'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-3'>
                        {
                            products?.map((item) => (
                                <div className='col'>
                                    <Card >
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title className='product-title'>{item.title}</Card.Title>
                                            <Card.Text className='txt'>{item.txt} </Card.Text>
                                            <Card.Text className='txt'>${item.price}.00 </Card.Text>
                                            <Button variant="outline-dark" onClick={()=>dispatch(GetCart(item))}>Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                     
                        </div>

                    </div>
            </div>
        </>
    )
}
