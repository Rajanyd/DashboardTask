import React from 'react'

const Header = () => {
  return (
    <>
        <header id="page-topbar" className="isvertical-topbar">
                <div className="navbar-header">
                        <div className="d-none d-sm-block ms-3 align-self-center">
                            <h4 className="page-title">Dashboard</h4>
                        </div>
                    <div className="d-flex">
                        

                        <div className="dropdown d-inline-block language-switch">
                            <button type="button" className="btn header-item"  >
                                <img className="header-lang-img" src="assets/images/flags/us.jpg"  height="16"/>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item user text-start d-flex align-items-center" 
                                 >
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                />
                            </button>
                            
                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}

export default Header