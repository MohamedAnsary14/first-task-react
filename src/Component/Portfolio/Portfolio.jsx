import React from 'react'
import Img1 from './poert1.png'
import Img2 from './port2.png'
import Img3 from './port3.png'
import './Portfolio.css'

export default function Portfolio() {
  return <>
    <div className="container my-5">
      <div className="text-center my-5 py-5">
        <h2 className='h1 font-weight-bold'>PORTFOLIO COMPONENT</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i class="fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="row g-5  ">
        <div className="col-md-4">
          <div className="div">
            <img src={Img1} alt="" className='w-100 rounded-3' />
            <div id='layer' className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="div">
            <img src={Img2} alt="" className='w-100 rounded-3' />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="div">
            <img src={Img3} alt="" className='w-100 rounded-3' />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="div">
            <img src={Img1} alt="" className='w-100 rounded-3' />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="div">
            <img src={Img2} alt="" className='w-100 rounded-3' />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="div">
            <img src={Img3} alt="" className='w-100 rounded-3' />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fa-5x"></i>
            </div>
          </div>
        </div>



      </div>
    </div>




  </>
}
