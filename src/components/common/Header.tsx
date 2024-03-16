import { useEffect, useState } from 'react'

import '../../assets/styles/custom_css/header.css'
const Header = () => {
  const [path, setPath]=useState('/')
 
  console.log({ path });
  useEffect(() => {
    setPath(window.location.pathname)
  }, [path])
  return (
    <>
      <div className='header-container'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src='../../../public/images/logo.png' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      {
        path !== '/application' ?
          <div className='menu-container'>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-white ">
                    <div className="container-fluid">
                      {/* <a className="navbar-brand" href="#">Navbar</a> */}
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/' && 'active'} `} href="/">
                              <i className="fa-solid fa-house"></i>
                              HOME
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/applications' && 'active'} `} href="#">
                              <i className="fa-solid fa-pager"></i>
                              APPLICATIONS
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/tdr-bank-list' && 'active'} `} href="/tdr-bank-list">
                              <i className="fa-solid fa-building-columns"></i>
                              TDR BANK
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className={`nav-link ${path==='/notifications' && 'active'} `} href="/notifications" >
                              <i className="fa-solid fa-bell"></i>
                              NOTIFICATIONS
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/instructions' && 'active'} `} href="/instructions" >
                              <i className="fa-solid fa-question"></i>
                              INSTRUCTIONS
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/calculator' && 'active'} `} href="/calculator" >
                              <i className="fa-solid fa-calculator"></i>
                              CALCULATOR
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/status' && 'active'} `} href="/status" >
                              <img src='../../../public/images/new1.gif' height={25} width={40} />
                              STATUS
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className={`nav-link ${path==='/sign-in' && 'active'} `} href="/sign-in" >
                              <i className="fa-solid fa-right-to-bracket"></i>
                              SIGN IN</a>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          :
          ''
      }

    </>
  )
}

export default Header