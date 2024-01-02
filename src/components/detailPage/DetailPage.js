import React from 'react'
import '../detailPage/Detail.css'

export default function DetailPage() {
    return (
        <>
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
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="paragraph-img">
                                <img className='img-fluid' src="images/pg1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
