import React from 'react'
import Img4 from './avataaars.svg'
import styles from '../StartFramework/StartFramework.module.css'


export default function StartFramework() {
    return <>
        <section className='mt-5'>
            <div className="container pt-5  d-flex justify-content-center align-items-center flex-column" >
                <img src={Img4} alt="" className={styles.img} />
                <div className="text-center p-5">
                    <h2 className='h1 font-weight-bold'>START FRAMEWORK</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className={styles.line}></div>
                        <i class="fa-solid fa-star mx-3"></i>
                        <div className={styles.line}></div>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>





            </div>

        </section>


    </>
}
