import React, { useState } from 'react'
import '../home/Home.css'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import Product from '../products/Product';


export default function Home() {
    const [accordion1, setaccordion1] = useState(false)
    const [accordion2, setaccordion2] = useState(false)
    const [accordion3, setaccordion3] = useState(false)
    const options = {
        items: 5,
        nav: false,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: true
    };
    const options2 = {
        items: 5,
        nav: false,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        dots: true
    };

    return (
        <>
            <div className='choco-head'>
                <div className='choco-box'>
                    <div className='choco-box-detail'>
                        <h1>Chocolate <br /> Favors</h1>
                        <p>Unique and luxurious chocolate </p>
                        <p> wedding favors that will leave a lasting</p>
                        <p>impression on your guests.</p>
                        <div class="buttons">
                            <div class="btn-1">
                                <a href="#">Book Your Order</a>
                            </div>
                            <div class="btn-2">
                                <a href="#">Order on Etsy</a>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="unique-area">
                <div class="container">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="unique-box-1">
                                <div class="unique-head">
                                    <div class="unique-title">
                                        <p>12 UNIQUE FLAVORS</p>
                                    </div>
                                    <h2>Discover Our</h2>
                                    <h2>Elegant and</h2>
                                    <h2>Unique Chocolate</h2>
                                    <h2>Flavors</h2>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="unique-box-2">
                                <img src="images/unique.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='first-carousel'>
                <OwlCarousel options={options}  >
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide1.png" alt="" />
                        </div>
                        <h4>Soft Pink</h4>
                        <p>Raspberry&Cayenne Pepper</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide2.png" alt="" />
                        </div>

                        <h4>LILAC</h4>
                        <p>Passion Fruit</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide3.png" alt="" />
                        </div>

                        <h4>Flamingo Pink</h4>
                        <p>Baileys and Caramel</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide4.png" alt="" />
                        </div>

                        <h4>LAGUNA YELLOW</h4>
                        <p>EARL GREY&LEMON</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide5.png" alt="" />
                        </div>

                        <h4>TIFFANY</h4>
                        <p>PISTACHIO & HAZELNUT GIANDUJA</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide1.png" alt="" />
                        </div>
                        <h4>Soft Pink</h4>
                        <p>Raspberry&Cayenne Pepper</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide2.png" alt="" />
                        </div>

                        <h4>LILAC</h4>
                        <p>Passion Fruit</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide3.png" alt="" />
                        </div>

                        <h4>Flamingo Pink</h4>
                        <p>Baileys and Caramel</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide4.png" alt="" />
                        </div>

                        <h4>LAGUNA YELLOW</h4>
                        <p>EARL GREY&LEMON</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide5.png" alt="" />
                        </div>

                        <h4>TIFFANY</h4>
                        <p>PISTACHIO & HAZELNUT GIANDUJA</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide1.png" alt="" />
                        </div>
                        <h4>Soft Pink</h4>
                        <p>Raspberry&Cayenne Pepper</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide2.png" alt="" />
                        </div>

                        <h4>LILAC</h4>
                        <p>Passion Fruit</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide3.png" alt="" />
                        </div>

                        <h4>Flamingo Pink</h4>
                        <p>Baileys and Caramel</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide4.png" alt="" />
                        </div>

                        <h4>LAGUNA YELLOW</h4>
                        <p>EARL GREY&LEMON</p>
                    </div>
                    <div class="item">
                        <div class="slide-img">

                            <img src="images/slide5.png" alt="" />
                        </div>

                        <h4>TIFFANY</h4>
                        <p>PISTACHIO & HAZELNUT GIANDUJA</p>

                    </div>
                </OwlCarousel>
            </div>
            <div class="product-heading-box">
                <div class="unique-title">
                    <p>PRODUCT</p>
                </div>
                <h5>Our chocolate favors are the perfect <br /> addition to any special occasion!</h5>
                <h1>Sweeten Any <br />Occasion with Our <br /> Chocolate Favors!</h1>
            </div>
            <Product />
            <div className='product-gallery'>
                <div class="gallery">
                    <div class="gallery-title-box">
                        <div class="unique-title">
                            <p>PRODUCT GALLERY</p>
                        </div>
                        <h2>What our <br />products look like</h2>
                    </div>
                    <OwlCarousel options={options2}  >
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-1.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-2.jpg" class="img-fluid" alt="" />
                            </div>
                            <h4>For Jessica P</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-4.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>

                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-5.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>

                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-6.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>

                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-7.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-1.jpg" alt="" />
                            </div>
                            <h4>For Sarah K</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-2.jpg" class="img-fluid" alt="" />
                            </div>
                            <h4>For Jessica P</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-4.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-7.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>
                        <div class="item">
                            <div class="product-gallery-box">

                                <img src="images/pg-6.jpg" alt="" />
                            </div>
                            <h4>For Emily M.</h4>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <section class="question-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="question-box">
                                <div class="unique-title">
                                    <p>FAQ</p>
                                </div>
                                <h2>Frequently Asked <br /> Questions</h2>
                                <div class="accordion-box">
                                    <div class="accordion-1 accordion" onMouseLeave={() => setaccordion1(false)}>
                                        <div class="accordion-head-1 accordion-title">
                                            <h4 onMouseEnter={() => setaccordion1(true)} >Care Instructions</h4> <span><i class="fa-solid fa-angle-down f1"></i></span>
                                            <div class="accordion-info-1 accordion-content" >
                                                {
                                                    accordion1 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-2 accordion" onMouseLeave={() => setaccordion2(false)}>
                                        <div class="accordion-head-2 accordion-title">
                                            <h4 onMouseEnter={() => setaccordion2(true)} >Shelf Life time for chocolate</h4>
                                            <span><i class="fa-solid fa-angle-down f2"></i></span>
                                            <div class="accordion-info-1 accordion-content" >
                                                {
                                                    accordion2 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-3 accordion " onMouseLeave={() => setaccordion3(false)}>
                                        <div class="accordion-head-3 accordion-title">
                                            <h4 onMouseEnter={() => setaccordion3(true)} >Shelf Life time for chocolate</h4>
                                            <span><i class="fa-solid fa-angle-down f3"></i></span>

                                            <div class="accordion-info-1 accordion-content" >
                                                {
                                                    accordion3 ?
                                                        (<p> Do not freeze or keep in the fridge. The chocolate <br /> comfort temperature
                                                            is
                                                            between 50-73 F (10-23C). </p>) : (<span></span>)

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="detail-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="detail-heading">
                                <h1>Meet your chocolatier</h1>
                            </div>
                            <div class="paragraph">
                                <p>Hi, I'm Hanna, a master chocolatier with a passion for creating exquisite chocolate
                                    creations. With over 15 years of experience, I have established a reputation for crafting
                                    unique and memorable chocolate flavors that push the boundaries of traditional
                                    confectionery.</p>
                                <p>
                                    For me, the process of making chocolate is an art form. From hand-picking the finest cocoa
                                    beans to adding the perfect finishing touches to each chocolate treat, I pour my heart and
                                    soul into every creation. Nothing brings me more joy than seeing the smiles on my customers'
                                    faces when they take that first bite of my chocolate.
                                </p>
                                <p>
                                    My commitment to quality and dedication to my craft are the driving forces behind everything
                                    I do. I believe that every bite of chocolate should be an indulgent experience, and I'm
                                    constantly pushing myself to create new and exciting flavors that will delight chocolate
                                    lovers around the world.
                                    Thank you for taking the time to learn a little bit about me and my passion for chocolate. I
                                    can't wait to share my creations with you!
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="paragraph-img">
                                <img src="images/pg1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="event-area">
                <div class="container">
                    <div class="event">
                        <div class="event-box">
                            <h1>Make Your <br />Special Day <br />Even Sweeter</h1>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
