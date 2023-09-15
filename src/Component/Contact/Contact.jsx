import React from 'react'
import styles from '../Contact/Contact.module.css'

export default function Contact() {
    return <>
        <div className="container my-5 ">
            <div className="text-center py-5 ">
                <h2 className='h1 fw-bolder'>CONATCT SECTION</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.line}></div>
                    <i class="fa-solid fa-star mx-3"></i>
                    <div className={styles.line}></div>
                </div>
            </div>
            <form action="" class="w-50 mx-auto pb-3 "  >
                <input type="text" name="" id=""  placeholder='userName' className="form-control   "/>
                <input type="text" name="" id="" placeholder='userAge' className="form-control my-2 "/>
                <input type="email" name="" id="" placeholder='userEmail' className="form-control mb-2 "/>
                <input type="password" name="" id="" placeholder='userPassword' className="form-control  "/>
                <button id='btn' className='my-3'>send Message</button>
            </form>







        </div>

    </>
}
