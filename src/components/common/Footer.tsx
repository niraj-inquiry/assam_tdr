import React from 'react'
import '../../assets/styles/custom_css/header.css'

const Footer = () => {
  const date=new Date().getFullYear()
  const formateDate=date
  return (
    <div className='footer-container'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
             <h3 className='text-white mb-0'>Get In Touch</h3>
             <p className='text-white mb-0'>Your call will be answered 24 hours a day, 7 days a week.</p>
          </div>
          <div className="col-lg-4">
             <h3 className='text-white mb-0'>Working Hours</h3>
             <p className='text-white mb-0'>Mon-Friday: 10:30 am to 5:00 pm</p>
             <p>Second-Saturday: <strong> Closed</strong></p>
             <p>Sunday: <strong> Closed</strong></p>

          </div>
          <div className="col-lg-4">
             <h3 className='text-white mb-0'>Contact Us</h3>
             <p className='text-white mb-0'><strong>Greater Hyderabad Municipal Corporation</strong></p>
             <p className='text-white mb-0'><i className="fa-solid fa-location-pin"></i>  CC Complex Tank Bund Road, Lower Tank Bund Hyderabad: 500063</p>
             <p className='text-white mb-0'><i className="fa-solid fa-square-phone"></i>  040-23225397</p>

             <p className='text-white mb-0'><i className="fa-solid fa-globe"></i>  Website: www.ghmc.gov.in</p>

          </div>
        </div>
      </div>
       <div className='copy-right' >
         <div className="container">
          <div className="row">
            <div className="col-12">
               <p className='text-white mb-0 text-center py-3' >{formateDate} Copyrights © Softtech Engineers Ltd</p>
            </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Footer