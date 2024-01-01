import React from 'react'
import '../header/Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header() {
    const cart = useSelector(state=>state.Cart.cart)

  return (
    <>
     <section class="navbar-area">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="images/ivory_logo 1.png" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Integredients</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/about">
                            <a class="nav-link" aria-disabled="true">About me</a>
                            </Link>
                        </li>
                    </ul>
                    <div class="button">
                        <Link to="cart">
                    <i class="fa-solid fa-store"><sup>{cart.length}</sup></i>
                    </Link>
                         
                    </div>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}
