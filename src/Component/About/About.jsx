import React from 'react'
import styles from '../About/About.module.css'

export default function About() {
    return <>
        <section className='py-5 vh-100 d-flex justify-content-center align-items-center'>
            <div className="container text- center">
                <div className="text-center p-5">
                    <h2 className='h1 font-weight-bold'>ABOUT COMPONENT</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className={styles.line}></div>
                        <i class="fa-solid fa-star mx-3"></i>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className="d-flex d-flex justify-content-center align-items-center ">
                    <div className='me-5'>
                        <p className='py-5'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div>
                        <p className=''>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </>
}
