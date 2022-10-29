import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div class="vertical-menu">

                <div  class="sidebar-menu-scroll">

                    
                    <div id="sidebar-menu">

                        <ul class="metismenu list-unstyled" >
                            <li class="menu-title" >Menu</li>

                            <li>
                                <a >
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Dashboards</span>
                                </a>
                                <ul class="sub-menu" >
                                    <li><a  data-key="t-ecommerce">Ecommerce</a></li>
                                    <li><a  >Saas</a></li>
                                    <li><a >Crypto</a></li>
                                </ul>
                            </li>

                            <li class="menu-title" >Applications</li>

                            <li>
                                <a>
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Calendar</span>
                                </a>
                            </li>

                            <li>
                                <a >
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Chat</span>
                                </a>
                            </li>

                            <li>
                                <a >
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >File Manager</span>
                                </a>
                            </li>

                            <li>
                                <a  class="has-arrow">
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Ecommerce</span>
                                </a>
                            </li>

                            <li>
                                <a  class="has-arrow">
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Email</span>
                                </a>
                                
                            </li>

                            <li>
                                <a  class="has-arrow">
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item">Invoices</span>
                                </a>
                                
                            </li>

                            <li>
                                <a  class="has-arrow">
                                    <i class="icon nav-icon" ></i>
                                    <span class="menu-item" >Projects</span>
                                </a>
                               
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar