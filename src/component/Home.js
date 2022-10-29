import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// import img from '../../public/img/pngwing.png'


const Home = () => {
    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <Sidebar />
                <div class="main-content">
                    <div class="page-content">
                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-xxl-9">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar">
                                                                <div class="avatar-title rounded bg-primary bg-gradient">
                                                                <i class="fa fa-money" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-1">Revenue</p>
                                                            <h4 class="mb-0">$21,000</h4>
                                                        </div>

                                                        <div class="flex-shrink-0 align-self-end ms-2">
                                                            <div class="badge rounded-pill font-size-13 badge-soft-success">+ 1.65%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card body  */}
                                            </div>
                                            {/* end card  */}
                                        </div>
                                        {/* end col  */}
                                        <div class="col-xl-4 col-lg-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar">
                                                                <div class="avatar-title rounded bg-primary bg-gradient">
                                                                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-1">Orders</p>
                                                            <h4 class="mb-0">5,55</h4>
                                                        </div>
                                                        <div class="flex-shrink-0 align-self-end ms-2">
                                                            <div class="badge rounded-pill font-size-13 badge-soft-danger">- 0.70%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card body  */}
                                            </div>
                                            {/* end card  */}
                                        </div>
                                        {/* end col  */}
                                        <div class="col-xl-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar">
                                                                <div class="avatar-title rounded bg-primary bg-gradient">
                                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <p class="text-muted mb-1">Customers</p>
                                                            <h4 class="mb-0">45,300</h4>
                                                        </div>
                                                        <div class="flex-shrink-0 align-self-end ms-2">
                                                            <div class="badge rounded-pill font-size-13 badge-soft-danger">- 0.04%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end card body  */}
                                            </div>
                                            {/* end card  */}
                                        </div>
                                        {/* end col  */}
                                    </div>
                                    {/* end row  */}

                                    <div class="card">
                                        <div class="card-body pb-0">
                                            <div class="d-flex align-items-start">
                                                <div class="flex-grow-1">
                                                    <h5 class="card-title mb-3">Overview</h5>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="dropdown">
                                                        <a class="dropdown-toggle text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span class="fw-semibold">Sort By:</span> <span class="text-muted">Yearly<i class="mdi mdi-chevron-down ms-1"></i></span>
                                                        </a>

                                                        <div class="dropdown-menu dropdown-menu-end">
                                                            <a class="dropdown-item" href="#">Yearly</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row gy-4">
                                                <div class="col-xxl-3">
                                                    <div>
                                                        <div class="mt-3 mb-3">
                                                            <p class="text-muted mb-1">This Month</p>

                                                            <div class="d-flex flex-wrap align-items-center gap-2">
                                                                <h2 class="mb-0">$24,500</h2>
                                                                <div class="badge rounded-pill font-size-13 badge-soft-success">+
                                                                    2.0%</div>
                                                            </div>
                                                        </div>

                                                        <div class="row g-0">
                                                            <div class="col-sm-6">
                                                                <div class="border-bottom border-end p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Orders</p>
                                                                    <h5 class="text-truncate mb-0">5,00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="border-bottom p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Sales</p>
                                                                    <h5 class="text-truncate mb-0">16,20</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-sm-6">
                                                                <div class="border-bottom border-end p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Order Value</p>
                                                                    <h5 class="text-truncate mb-0">10.03 %</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="border-bottom p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Customers</p>
                                                                    <h5 class="text-truncate mb-0">21,455</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-sm-6">
                                                                <div class="border-end p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Income</p>
                                                                    <h5 class="text-truncate mb-0">$30,652</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="p-3 h-100">
                                                                    <p class="text-muted text-truncate mb-1">Expenses</p>
                                                                    <h5 class="text-truncate mb-0">$11,248</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-9">
                                                    <div style={{ position: "relative" }}>
                                                        <div
                                                            className="apex-charts"
                                                            data-colors='["#f1f3f7", "#3b76e1"]'
                                                            style={{ minHeight: 365 }}
                                                        >
                                                            <div
                                                                className="apexcharts-canvas apexcharts9iwu78if apexcharts-theme-light"
                                                                style={{ width: 642, height: 350 }}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsData="ApexChartsNS"
                                                                    xmlnsSvgjs="http://svgjs.com/svgjs"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="642"
                                                                    height="350"
                                                                    className="apexcharts-svg"
                                                                    version="1.1"
                                                                    style={{ background: "transparent" }}
                                                                >
                                                                    <g
                                                                        className="apexcharts-inner apexcharts-graphical"
                                                                        transform="translate(46.963 30)"
                                                                    >
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1896"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(216,227,240,0.4)"
                                                                                    stopOpacity="0.4"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(190,209,230,0.5)"
                                                                                    stopOpacity="0.5"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(190,209,230,0.5)"
                                                                                    stopOpacity="0.5"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <clipPath id="gridRectMask9iwu78if">
                                                                                <rect
                                                                                    width="591.037"
                                                                                    height="283.701"
                                                                                    x="-3"
                                                                                    y="-1"
                                                                                    fill="#fff"
                                                                                    stroke="none"
                                                                                    strokeDasharray="0"
                                                                                    strokeWidth="0"
                                                                                    opacity="1"
                                                                                    rx="0"
                                                                                    ry="0"
                                                                                ></rect>
                                                                            </clipPath>
                                                                            <clipPath>
                                                                                <rect
                                                                                    width="589.037"
                                                                                    height="285.701"
                                                                                    x="-2"
                                                                                    y="-2"
                                                                                    fill="#fff"
                                                                                    stroke="none"
                                                                                    strokeDasharray="0"
                                                                                    strokeWidth="0"
                                                                                    opacity="1"
                                                                                    rx="0"
                                                                                    ry="0"
                                                                                ></rect>
                                                                            </clipPath>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1908"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1915"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1922"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1929"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1936"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1943"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1950"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1957"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1964"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(241,243,247,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1974"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1981"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1988"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient1995"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient2002"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient2009"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient2016"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient2023"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="SvgjsLinearGradient2030"
                                                                                x1="0"
                                                                                x2="0"
                                                                                y1="0"
                                                                                y2="1"
                                                                            >
                                                                                <stop
                                                                                    offset="0"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="1"
                                                                                    stopColor="rgba(255,255,255,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                                <stop
                                                                                    offset="0.38"
                                                                                    stopColor="rgba(59,118,225,1)"
                                                                                    stopOpacity="1"
                                                                                ></stop>
                                                                            </linearGradient>
                                                                        </defs>
                                                                        <rect
                                                                            width="11.376"
                                                                            height="281.701"
                                                                            x="224.996"
                                                                            y="0"
                                                                            fill="url(#SvgjsLinearGradient1896)"
                                                                            fillOpacity="0.9"
                                                                            strokeDasharray="3"
                                                                            strokeWidth="0"
                                                                            className="apexcharts-xcrosshairs"
                                                                            filter="none"
                                                                            opacity="1"
                                                                            rx="0"
                                                                            ry="0"
                                                                        ></rect>
                                                                        <g className="apexcharts-xaxis">
                                                                            <g
                                                                                className="apexcharts-xaxis-texts-g"
                                                                                transform="translate(0 -4)"
                                                                            >
                                                                                <text
                                                                                    x="32.502"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Feb</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="97.506"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Mar</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="162.51"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Apr</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="227.514"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>May</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="292.519"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Jun</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="357.523"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Jul</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="422.527"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Aug</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="487.531"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Sep</tspan>
                                                                                </text>
                                                                                <text
                                                                                    x="552.535"
                                                                                    y="310.701"
                                                                                    fill="#373d3f"
                                                                                    className="apexcharts-text apexcharts-xaxis-label"
                                                                                    dominantBaseline="auto"
                                                                                    fontFamily="Helvetica, Arial, sans-serif"
                                                                                    fontSize="12"
                                                                                    fontWeight="400"
                                                                                    textAnchor="middle"
                                                                                >
                                                                                    <tspan>Oct</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                strokeWidth="1"
                                                                                d="M0 282.701L585.037 282.701"
                                                                            ></path>
                                                                        </g>
                                                                        <g className="apexcharts-grid">
                                                                            <g className="apexcharts-gridlines-horizontal">
                                                                                <path
                                                                                    stroke="#e0e0e0"
                                                                                    strokeDasharray="0"
                                                                                    d="M0 0L585.037 0"
                                                                                    className="apexcharts-gridline"
                                                                                ></path>
                                                                                <path
                                                                                    stroke="#e0e0e0"
                                                                                    strokeDasharray="0"
                                                                                    d="M0 70.425L585.037 70.425"
                                                                                    className="apexcharts-gridline"
                                                                                ></path>
                                                                                <path
                                                                                    stroke="#e0e0e0"
                                                                                    strokeDasharray="0"
                                                                                    d="M0 140.85L585.037 140.85"
                                                                                    className="apexcharts-gridline"
                                                                                ></path>
                                                                                <path
                                                                                    stroke="#e0e0e0"
                                                                                    strokeDasharray="0"
                                                                                    d="M0 211.276L585.037 211.276"
                                                                                    className="apexcharts-gridline"
                                                                                ></path>
                                                                                <path
                                                                                    stroke="#e0e0e0"
                                                                                    strokeDasharray="0"
                                                                                    d="M0 281.701L585.037 281.701"
                                                                                    className="apexcharts-gridline"
                                                                                ></path>
                                                                            </g>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M0 282.701L0 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M65.004 282.701L65.004 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M130.008 282.701L130.008 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M195.012 282.701L195.012 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M260.016 282.701L260.016 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M325.021 282.701L325.021 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M390.025 282.701L390.025 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M455.029 282.701L455.029 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M520.033 282.701L520.033 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="#e0e0e0"
                                                                                strokeDasharray="0"
                                                                                d="M585.037 282.701L585.037 288.701"
                                                                                className="apexcharts-xaxis-tick"
                                                                            ></path>
                                                                            <path
                                                                                stroke="transparent"
                                                                                strokeDasharray="0"
                                                                                d="M0 281.701L585.037 281.701"
                                                                            ></path>
                                                                            <path
                                                                                stroke="transparent"
                                                                                strokeDasharray="0"
                                                                                d="M0 1L0 281.701"
                                                                            ></path>
                                                                        </g>
                                                                        <g className="apexcharts-bar-series apexcharts-plot-series">
                                                                            <g className="apexcharts-series" dataRealIndex="0">
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1908)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M21.126 281.7V160.936q0-6 6-6h-2.624q6 0 6 6h0v120.766h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1915)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M86.13 281.7V139.809q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1922)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M151.135 281.7V167.979q0-6 6-6h-2.625q6 0 6 6h0v113.723h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1929)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M216.139 281.7V118.68q0-6 6-6h-2.625q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1936)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M281.143 281.7V139.809q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1943)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M346.147 281.7V97.554q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1950)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M411.151 281.7V111.639q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1957)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M476.155 281.7V62.34q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1964)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M541.16 281.7V104.596q0-6 6-6h-2.625q6 0 6 6h0v177.106h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                            </g>
                                                                            <g className="apexcharts-series" dataRealIndex="1">
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1974)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M32.502 281.7V139.809q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1981)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M97.506 281.7V118.68q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1988)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M162.51 281.7V146.85q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient1995)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M227.514 281.7V97.554q0-6 6-6h-2.624q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient2002)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M292.519 281.7V111.639q0-6 6-6h-2.625q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient2009)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M357.523 281.7V83.469q0-6 6-6h-2.625q6 0 6 6h0V281.7h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient2016)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M422.527 281.7V104.596q0-6 6-6h-2.625q6 0 6 6h0v177.106h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient2023)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M487.53 281.7V48.256q0-6 6-6h-2.623q6 0 6 6h0v233.446h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#SvgjsLinearGradient2030)"
                                                                                    fillOpacity="1"
                                                                                    stroke="transparent"
                                                                                    strokeDasharray="0"
                                                                                    strokeLinecap="round"
                                                                                    strokeOpacity="1"
                                                                                    strokeWidth="2"
                                                                                    d="M552.535 281.7V76.426q0-6 6-6h-2.624q6 0 6 6h0v205.276h0z"
                                                                                    className="apexcharts-bar-area"
                                                                                    clipPath="url(#gridRectMask9iwu78if)"
                                                                                ></path>
                                                                            </g>
                                                                        </g>
                                                                        <path
                                                                            stroke="#b6b6b6"
                                                                            strokeDasharray="0"
                                                                            strokeWidth="1"
                                                                            d="M0 0L585.037 0"
                                                                            className="apexcharts-ycrosshairs"
                                                                        ></path>
                                                                        <path
                                                                            strokeDasharray="0"
                                                                            strokeWidth="0"
                                                                            d="M0 0L585.037 0"
                                                                            className="apexcharts-ycrosshairs-hidden"
                                                                        ></path>
                                                                    </g>
                                                                    <g className="apexcharts-yaxis" transform="translate(16.963)">
                                                                        <g className="apexcharts-yaxis-texts-g">
                                                                            <text
                                                                                x="20"
                                                                                y="31.4"
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-yaxis-label"
                                                                                dominantBaseline="auto"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                fontSize="11"
                                                                                fontWeight="400"
                                                                                textAnchor="end"
                                                                            >
                                                                                <tspan>35k</tspan>
                                                                            </text>
                                                                            <text
                                                                                x="20"
                                                                                y="101.825"
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-yaxis-label"
                                                                                dominantBaseline="auto"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                fontSize="11"
                                                                                fontWeight="400"
                                                                                textAnchor="end"
                                                                            >
                                                                                <tspan>32k</tspan>
                                                                            </text>
                                                                            <text
                                                                                x="20"
                                                                                y="172.25"
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-yaxis-label"
                                                                                dominantBaseline="auto"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                fontSize="11"
                                                                                fontWeight="400"
                                                                                textAnchor="end"
                                                                            >
                                                                                <tspan>22k</tspan>
                                                                            </text>
                                                                            <text
                                                                                x="20"
                                                                                y="242.676"
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-yaxis-label"
                                                                                dominantBaseline="auto"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                fontSize="11"
                                                                                fontWeight="400"
                                                                                textAnchor="end"
                                                                            >
                                                                                <tspan>1k</tspan>
                                                                            </text>
                                                                            <text
                                                                                x="20"
                                                                                y="313.101"
                                                                                fill="#373d3f"
                                                                                className="apexcharts-text apexcharts-yaxis-label"
                                                                                dominantBaseline="auto"
                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                fontSize="11"
                                                                                fontWeight="400"
                                                                                textAnchor="end"
                                                                            >
                                                                                <tspan>0k</tspan>
                                                                            </text>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <div className="apexcharts-legend" style={{ maxHeight: 175 }}></div>
                                                                
                                                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                    <div className="apexcharts-yaxistooltip-text"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card body --> */}
                                    </div>

                                    <div class="row">
                                        <div class="col-xl-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="card-title mb-3">User Activity</h5>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="dropdown">
                                                                <a class="dropdown-toggle text-muted"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    Weekly
                                                                </a>

                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a  href="#">Yearly</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p class="text-muted mb-1">This Month</p>
                                                        <h4>16,500</h4>
                                                    </div>

                                                    <div class="m-n3">
                                                        <div id="chart-area"  class="apex-charts">
                                                        <div
    id="apexchartsoz3311ak"
    className="apexcharts-canvas apexchartsoz3311ak apexcharts-theme-light"
    style={{
      width: 276,
      height: 270,
    }}
  >
    <svg
      id="SvgjsSvg2134"
      width={276}
      height={270}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.com/svgjs"
      className="apexcharts-svg apexcharts-zoomable hovering-zoom"
      xmlnsdata="ApexChartsNS"
      style={{
        background: "0 0",
      }}
    >
      <foreignObject x={0} y={0} width={276} height={270}>
        <div
          className="apexcharts-legend apexcharts-align-right position-top"
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            right: 0,
            position: "absolute",
            left: 0,
            top: 4,
            maxHeight: 135,
          }}
        >
          <div
            className="apexcharts-legend-series"
            rel={1}
            seriesname="Current"
            datacollapsed="false"
            style={{
              margin: "2px 5px",
            }}
          >
            <span
              className="apexcharts-legend-marker"
              rel={1}
              datacollapsed="false"
              style={{
                background: "#3b76e1!important",
                color: "#3b76e1",
                height: 12,
                width: 12,
                left: 0,
                top: 0,
                borderWidth: 0,
                borderColor: "#fff",
                borderRadius: 12,
              }}
            />
            <span
              className="apexcharts-legend-text"
              rel={1}
              i={0}
              datadefault-text="Current"
              datacollapsed="false"
              style={{
                color: "#373d3f",
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              {"Current"}
            </span>
          </div>
          <div
            className="apexcharts-legend-series"
            rel={2}
            seriesname="Previous"
            datacollapsed="false"
            style={{
              margin: "2px 5px",
            }}
          >
            <span
              className="apexcharts-legend-marker"
              rel={2}
              datacollapsed="false"
              style={{
                background: "#f56e6e!important",
                color: "#f56e6e",
                height: 12,
                width: 12,
                left: 0,
                top: 0,
                borderWidth: 0,
                borderColor: "#fff",
                borderRadius: 12,
              }}
            />
            <span
              className="apexcharts-legend-text"
              rel={2}
              i={1}
              datadefault-text="Previous"
              datacollapsed="false"
              style={{
                color: "#373d3f",
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              {"Previous"}
            </span>
          </div>
        </div>
        <style type="text/css">
          {
            ".apexcharts-legend{display:flex;overflow:auto;padding:0 10px}.apexcharts-legend.position-top{flex-wrap:wrap}.apexcharts-legend.position-top.apexcharts-align-right{justify-content:flex-end}.apexcharts-legend-series{cursor:pointer;line-height:normal}.apexcharts-legend.position-top .apexcharts-legend-series{display:flex;align-items:center}.apexcharts-legend-text{position:relative;font-size:14px}.apexcharts-legend-marker *,.apexcharts-legend-text *{pointer-events:none}.apexcharts-legend-marker{position:relative;display:inline-block;cursor:pointer;margin-right:3px;border-style:solid}.apexcharts-legend.apexcharts-align-right .apexcharts-legend-series{display:inline-block}"
          }
        </style>
      </foreignObject>
      <g
        id="SvgjsG2136"
        className="apexcharts-inner apexcharts-graphical"
        transform="translate(45.775 50)"
      >
        <defs id="SvgjsDefs2135">
          <linearGradient
            id="SvgjsLinearGradient2148"
            x1={0}
            y1={0}
            x2={0}
            y2={1}
          >
            <stop
              id="SvgjsStop2149"
              stopOpacity={0.45}
              stopColor="rgba(59,118,225,0.45)"
              offset={0.2}
            />
            <stop
              id="SvgjsStop2150"
              stopOpacity={0.05}
              stopColor="rgba(255,255,255,0.05)"
              offset={1}
            />
            <stop
              id="SvgjsStop2151"
              stopOpacity={0.05}
              stopColor="rgba(255,255,255,0.05)"
              offset={1}
            />
            <stop
              id="SvgjsStop2152"
              stopOpacity={0.45}
              stopColor="rgba(59,118,225,0.45)"
              offset={1}
            />
          </linearGradient>
          <linearGradient
            id="SvgjsLinearGradient2158"
            x1={0}
            y1={0}
            x2={0}
            y2={1}
          >
            <stop
              id="SvgjsStop2159"
              stopOpacity={0.45}
              stopColor="rgba(245,110,110,0.45)"
              offset={0.2}
            />
            <stop
              id="SvgjsStop2160"
              stopOpacity={0.05}
              stopColor="rgba(255,255,255,0.05)"
              offset={1}
            />
            <stop
              id="SvgjsStop2161"
              stopOpacity={0.05}
              stopColor="rgba(255,255,255,0.05)"
              offset={1}
            />
            <stop
              id="SvgjsStop2162"
              stopOpacity={0.45}
              stopColor="rgba(245,110,110,0.45)"
              offset={1}
            />
          </linearGradient>
          <clipPath id="gridRectMaskoz3311ak">
            <rect
              id="SvgjsRect2142"
              width={226.225}
              height={183.701}
              x={-3}
              y={-1}
              rx={0}
              ry={0}
              opacity={1}
              strokeWidth={0}
              stroke="none"
              strokeDasharray={0}
              fill="#fff"
            />
          </clipPath>
          <clipPath id="gridRectMarkerMaskoz3311ak">
            <rect
              id="SvgjsRect2143"
              width={224.225}
              height={185.701}
              x={-2}
              y={-2}
              rx={0}
              ry={0}
              opacity={1}
              strokeWidth={0}
              stroke="none"
              strokeDasharray={0}
              fill="#fff"
            />
          </clipPath>
        </defs>
        <path
          id="SvgjsLine2141"
          stroke="#b6b6b6"
          strokeDasharray={3}
          className="apexcharts-xcrosshairs"
          fill="#b1b9c4"
          filter="none"
          fillOpacity={0.9}
          strokeWidth={1}
          d="M175.68 0v181.701"
        />
        <g id="SvgjsG2165" className="apexcharts-xaxis">
          <g
            id="SvgjsG2166"
            className="apexcharts-xaxis-texts-g"
            transform="translate(0 -4)"
          >
            <text
              id="SvgjsText2168"
              fontFamily="Helvetica, Arial, sans-serif"
              x={0}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2169">{"Mon"}</tspan>
              <title>{"Mon"}</title>
            </text>
            <text
              id="SvgjsText2171"
              fontFamily="Helvetica, Arial, sans-serif"
              x={44.045}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2172">{"Tue"}</tspan>
              <title>{"Tue"}</title>
            </text>
            <text
              id="SvgjsText2174"
              fontFamily="Helvetica, Arial, sans-serif"
              x={88.09}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2175">{"Wed"}</tspan>
              <title>{"Wed"}</title>
            </text>
            <text
              id="SvgjsText2177"
              fontFamily="Helvetica, Arial, sans-serif"
              x={132.135}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2178">{"Thu"}</tspan>
              <title>{"Thu"}</title>
            </text>
            <text
              id="SvgjsText2180"
              fontFamily="Helvetica, Arial, sans-serif"
              x={176.18}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2181">{"Fri"}</tspan>
              <title>{"Fri"}</title>
            </text>
            <text
              id="SvgjsText2183"
              fontFamily="Helvetica, Arial, sans-serif"
              x={220.225}
              y={210.701}
              textAnchor="middle"
              dominantBaseline="auto"
              fontSize={12}
              fontWeight={400}
              fill="#373d3f"
              className="apexcharts-text apexcharts-xaxis-label"
              style={{
                fontFamily: "Helvetica,Arial,sans-serif",
              }}
            >
              <tspan id="SvgjsTspan2184">{"Sat"}</tspan>
              <title>{"Sat"}</title>
            </text>
          </g>
          <path
            id="SvgjsLine2185"
            stroke="#e0e0e0"
            strokeDasharray={0}
            strokeWidth={1}
            d="M0 182.701h220.225"
          />
        </g>
        <g id="SvgjsG2200" className="apexcharts-grid">
          <g id="SvgjsG2201" className="apexcharts-gridlines-horizontal">
            <path
              id="SvgjsLine2209"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 0h220.225"
            />
            <path
              id="SvgjsLine2210"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 36.34h220.225"
            />
            <path
              id="SvgjsLine2211"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 72.68h220.225"
            />
            <path
              id="SvgjsLine2212"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 109.02h220.225"
            />
            <path
              id="SvgjsLine2213"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 145.361h220.225"
            />
            <path
              id="SvgjsLine2214"
              stroke="#e0e0e0"
              strokeDasharray={0}
              className="apexcharts-gridline"
              d="M0 181.701h220.225"
            />
          </g>
          <path
            id="SvgjsLine2203"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M0 182.701v6"
          />
          <path
            id="SvgjsLine2204"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M44.045 182.701v6"
          />
          <path
            id="SvgjsLine2205"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M88.09 182.701v6"
          />
          <path
            id="SvgjsLine2206"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M132.135 182.701v6"
          />
          <path
            id="SvgjsLine2207"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M176.18 182.701v6"
          />
          <path
            id="SvgjsLine2208"
            stroke="#e0e0e0"
            strokeDasharray={0}
            className="apexcharts-xaxis-tick"
            d="M220.225 182.701v6"
          />
          <path
            id="SvgjsLine2216"
            stroke="transparent"
            strokeDasharray={0}
            d="M0 181.701h220.225"
          />
          <path
            id="SvgjsLine2215"
            stroke="transparent"
            strokeDasharray={0}
            d="M0 1v180.701"
          />
        </g>
        <g
          id="SvgjsG2144"
          className="apexcharts-area-series apexcharts-plot-series"
        >
          <g
            id="SvgjsG2145"
            className="apexcharts-series"
            datalongestSeries="true"
            datarealIndex={0}
          >
            <path
              id="SvgjsPath2153"
              d="M0 181.7v-38.156c15.416 0 28.63-59.962 44.045-59.962 15.416 0 28.63 16.353 44.045 16.353 15.416 0 28.63-70.863 44.045-70.863 15.416 0 28.63 65.412 44.045 65.412 15.416 0 28.63-14.536 44.045-14.536v101.753m0-101.753z"
              fill="url(#SvgjsLinearGradient2148)"
              fillOpacity={1}
              strokeOpacity={1}
              strokeLinecap="butt"
              strokeWidth={0}
              strokeDasharray={0}
              className="apexcharts-area"
              clipPath="url(#gridRectMaskoz3311ak)"
            />
            <path
              id="SvgjsPath2154"
              d="M0 143.544c15.416 0 28.63-59.962 44.045-59.962 15.416 0 28.63 16.353 44.045 16.353 15.416 0 28.63-70.863 44.045-70.863 15.416 0 28.63 65.412 44.045 65.412 15.416 0 28.63-14.536 44.045-14.536"
              fill="none"
              fillOpacity={1}
              stroke="#3b76e1"
              strokeOpacity={1}
              strokeLinecap="butt"
              strokeWidth={2}
              strokeDasharray={0}
              className="apexcharts-area"
              clipPath="url(#gridRectMaskoz3311ak)"
            />
          </g>
          <g
            id="SvgjsG2155"
            className="apexcharts-series"
            datalongestSeries="true"
            datarealIndex={1}
          >
            <path
              id="SvgjsPath2163"
              d="M0 181.7v-72.68c15.416 0 28.63 14.537 44.045 14.537 15.416 0 28.63-50.877 44.045-50.877 15.416 0 28.63 50.877 44.045 50.877 15.416 0 28.63-41.792 44.045-41.792 15.416 0 28.63 18.17 44.045 18.17v81.766m0-81.766z"
              fill="url(#SvgjsLinearGradient2158)"
              fillOpacity={1}
              strokeOpacity={1}
              strokeLinecap="butt"
              strokeWidth={0}
              strokeDasharray={0}
              className="apexcharts-area"
              clipPath="url(#gridRectMaskoz3311ak)"
            />
            <path
              id="SvgjsPath2164"
              d="M0 109.02c15.416 0 28.63 14.537 44.045 14.537 15.416 0 28.63-50.877 44.045-50.877 15.416 0 28.63 50.877 44.045 50.877 15.416 0 28.63-41.792 44.045-41.792 15.416 0 28.63 18.17 44.045 18.17"
              fill="none"
              fillOpacity={1}
              stroke="#f56e6e"
              strokeOpacity={1}
              strokeLinecap="butt"
              strokeWidth={2}
              strokeDasharray={0}
              className="apexcharts-area"
              clipPath="url(#gridRectMaskoz3311ak)"
            />
          </g>
        </g>
        <path
          id="SvgjsLine2217"
          stroke="#b6b6b6"
          strokeDasharray={0}
          strokeWidth={1}
          className="apexcharts-ycrosshairs"
          d="M0 0h220.225"
        />
        <path
          id="SvgjsLine2218"
          strokeDasharray={0}
          strokeWidth={0}
          className="apexcharts-ycrosshairs-hidden"
          d="M0 0h220.225"
        />
      </g>
      <g
        id="SvgjsG2186"
        className="apexcharts-yaxis"
        transform="translate(15.775)"
      >
        <g id="SvgjsG2187" className="apexcharts-yaxis-texts-g">
          <text
            id="SvgjsText2188"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={51.5}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2189">{"100"}</tspan>
            <title>{"100"}</title>
          </text>
          <text
            id="SvgjsText2190"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={87.84}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2191">{"80"}</tspan>
            <title>{"80"}</title>
          </text>
          <text
            id="SvgjsText2192"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={124.18}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2193">{"60"}</tspan>
            <title>{"60"}</title>
          </text>
          <text
            id="SvgjsText2194"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={160.52}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2195">{"40"}</tspan>
            <title>{"40"}</title>
          </text>
          <text
            id="SvgjsText2196"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={196.861}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2197">{"20"}</tspan>
            <title>{"20"}</title>
          </text>
          <text
            id="SvgjsText2198"
            fontFamily="Helvetica, Arial, sans-serif"
            x={20}
            y={233.201}
            textAnchor="end"
            dominantBaseline="auto"
            fontSize={11}
            fontWeight={400}
            fill="#373d3f"
            className="apexcharts-text apexcharts-yaxis-label"
            style={{
              fontFamily: "Helvetica,Arial,sans-serif",
            }}
          >
            <tspan id="SvgjsTspan2199">{"0"}</tspan>
            <title>{"0"}</title>
          </text>
        </g>
      </g>
    </svg>
  </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card  */}
                                        </div>
                                        {/* end col  */}

                                        <div class="col-xl-4 col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="card-title mb-3">Order Stats</h5>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="dropdown">
                                                                <a class="dropdown-toggle text-muted" href="#"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i data-eva="more-horizontal-outline" class="fill-muted"
                                                                        data-eva-height="18" data-eva-width="18"></i>
                                                                </a>

                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a class="dropdown-item" href="#">Yearly</a>
                                                                    <a class="dropdown-item" href="#">Monthly</a>
                                                                    <a class="dropdown-item" href="#">Weekly</a>
                                                                    <a class="dropdown-item" href="#">Today</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div id="chart-donut" data-colors='["#3b76e1", "#f1f3f7", "#f56e6e"]' class="mt-2">
                                                        <div
                                                            className="apexcharts-canvas apexchartskg6fzt6b apexcharts-theme-light"
                                                            style={{ width: 244, height: 198.7 }}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsData="ApexChartsNS"
                                                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width="244"
                                                                height="198.7"
                                                                className="apexcharts-svg"
                                                                version="1.1"
                                                                style={{ background: "transparent" }}
                                                            >
                                                                <g
                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                    transform="translate(25)"
                                                                >
                                                                    <defs>
                                                                        <clipPath>
                                                                            <rect
                                                                                width="202"
                                                                                height="220"
                                                                                x="-3"
                                                                                y="-1"
                                                                                fill="#fff"
                                                                                stroke="none"
                                                                                strokeDasharray="0"
                                                                                strokeWidth="0"
                                                                                opacity="1"
                                                                                rx="0"
                                                                                ry="0"
                                                                            ></rect>
                                                                        </clipPath>
                                                                        <clipPath>
                                                                            <rect
                                                                                width="200"
                                                                                height="222"
                                                                                x="-2"
                                                                                y="-2"
                                                                                fill="#fff"
                                                                                stroke="none"
                                                                                strokeDasharray="0"
                                                                                strokeWidth="0"
                                                                                opacity="1"
                                                                                rx="0"
                                                                                ry="0"
                                                                            ></rect>
                                                                        </clipPath>
                                                                        <radialGradient
                                                                            id="SvgjsRadialGradient2237"
                                                                            cx="98"
                                                                            cy="109"
                                                                            r="89.61"
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop
                                                                                offset="0.8"
                                                                                stopColor="rgba(128,166,236,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(59,118,225,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(59,118,225,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                        </radialGradient>
                                                                        <radialGradient
                                                                            id="SvgjsRadialGradient2243"
                                                                            cx="98"
                                                                            cy="109"
                                                                            r="89.61"
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop
                                                                                offset="0.8"
                                                                                stopColor="rgba(246,247,250,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(241,243,247,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(241,243,247,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                        </radialGradient>
                                                                        <radialGradient
                                                                            id="SvgjsRadialGradient2249"
                                                                            cx="98"
                                                                            cy="109"
                                                                            r="89.61"
                                                                            gradientUnits="userSpaceOnUse"
                                                                        >
                                                                            <stop
                                                                                offset="0.8"
                                                                                stopColor="rgba(249,161,161,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(245,110,110,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                            <stop
                                                                                offset="1"
                                                                                stopColor="rgba(245,110,110,1)"
                                                                                stopOpacity="1"
                                                                            ></stop>
                                                                        </radialGradient>
                                                                        <filter
                                                                            id="SvgjsFilter2344"
                                                                            width="200%"
                                                                            height="200%"
                                                                            x="-50%"
                                                                            y="-50%"
                                                                            filterUnits="userSpaceOnUse"
                                                                        >
                                                                            <feComponentTransfer
                                                                                in="SourceGraphic"
                                                                                result="SvgjsFeComponentTransfer2345Out"
                                                                            >
                                                                                <feFuncR slope="0.5" type="linear"></feFuncR>
                                                                                <feFuncG slope="0.5" type="linear"></feFuncG>
                                                                                <feFuncB slope="0.5" type="linear"></feFuncB>
                                                                                <feFuncA type="identity"></feFuncA>
                                                                            </feComponentTransfer>
                                                                        </filter>
                                                                    </defs>
                                                                    <g className="apexcharts-pie">
                                                                        <g>
                                                                            <circle cx="98" cy="98" r="62.727" fill="transparent"></circle>
                                                                            <g className="apexcharts-slices">
                                                                                <g
                                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                                    dataRealIndex="0"
                                                                                >
                                                                                    <path
                                                                                        fill="url(#SvgjsRadialGradient2237)"
                                                                                        fillOpacity="1"
                                                                                        stroke="#fff"
                                                                                        strokeDasharray="0"
                                                                                        strokeLinecap="butt"
                                                                                        strokeOpacity="1"
                                                                                        strokeWidth="2"
                                                                                        d="M98 8.39a89.61 89.61 0 11-67.723 148.292l20.317-17.605A62.727 62.727 0 1098 35.273V8.39z"
                                                                                        className="apexcharts-pie-area apexcharts-donut-slice-0"
                                                                                        dataAngle="229.091"
                                                                                        dataPathOrig="M 98 8.39024390243901 A 89.60975609756099 89.60975609756099 0 1 1 30.277464971279386 156.6819106467068 L 50.59422547989557 139.07733745269476 A 62.7268292682927 62.7268292682927 0 1 0 98 35.2731707317073 L 98 8.39024390243901 z"
                                                                                        dataStartAngle="0"
                                                                                        dataStrokeWidth="2"
                                                                                        dataValue="70"
                                                                                    ></path>
                                                                                </g>
                                                                                <g
                                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                                    dataRealIndex="1"
                                                                                >
                                                                                    <path
                                                                                        fill="url(#SvgjsRadialGradient2243)"
                                                                                        fillOpacity="1"
                                                                                        stroke="#fff"
                                                                                        strokeDasharray="0"
                                                                                        strokeLinecap="butt"
                                                                                        strokeOpacity="1"
                                                                                        strokeWidth="2"
                                                                                        d="M30.277 156.682a89.61 89.61 0 010-117.364l20.317 17.605a62.727 62.727 0 000 82.154l-20.317 17.605z"
                                                                                        className="apexcharts-pie-area apexcharts-donut-slice-1"
                                                                                        filter="url(#SvgjsFilter2344)"
                                                                                        dataAngle="81.818"
                                                                                        dataPathOrig="M 30.277464971279386 156.6819106467068 A 89.60975609756099 89.60975609756099 0 0 1 30.277464971279343 39.31808935329326 L 50.594225479895535 56.92266254730528 A 62.7268292682927 62.7268292682927 0 0 0 50.59422547989557 139.07733745269476 L 30.277464971279386 156.6819106467068 z"
                                                                                        dataStartAngle="229.091"
                                                                                        dataStrokeWidth="2"
                                                                                        dataValue="25"
                                                                                    ></path>
                                                                                </g>
                                                                                <g
                                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                                    dataRealIndex="2"
                                                                                >
                                                                                    <path
                                                                                        fill="url(#SvgjsRadialGradient2249)"
                                                                                        fillOpacity="1"
                                                                                        stroke="#fff"
                                                                                        strokeDasharray="0"
                                                                                        strokeLinecap="butt"
                                                                                        strokeOpacity="1"
                                                                                        strokeWidth="2"
                                                                                        d="M30.277 39.318A89.61 89.61 0 0197.984 8.39l.005 26.883a62.727 62.727 0 00-47.395 21.65L30.277 39.318z"
                                                                                        className="apexcharts-pie-area apexcharts-donut-slice-2"
                                                                                        dataAngle="49.091"
                                                                                        dataPathOrig="M 30.277464971279343 39.31808935329326 A 89.60975609756099 89.60975609756099 0 0 1 97.98436014722127 8.390245267273642 L 97.98905210305489 35.27317168709154 A 62.7268292682927 62.7268292682927 0 0 0 50.594225479895535 56.92266254730528 L 30.277464971279343 39.31808935329326 z"
                                                                                        dataStartAngle="310.909"
                                                                                        dataStrokeWidth="2"
                                                                                        dataValue="15"
                                                                                    ></path>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <path
                                                                        stroke="#b6b6b6"
                                                                        strokeDasharray="0"
                                                                        strokeWidth="1"
                                                                        d="M0 0L196 0"
                                                                        className="apexcharts-ycrosshairs"
                                                                    ></path>
                                                                    <path
                                                                        strokeDasharray="0"
                                                                        strokeWidth="0"
                                                                        d="M0 0L196 0"
                                                                        className="apexcharts-ycrosshairs-hidden"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                            <div className="apexcharts-legend" style={{ maxHeight: 110 }}></div>
                                                            <div
                                                                className="apexcharts-tooltip apexcharts-theme-dark"
                                                                style={{ left: -37.7313, top: 150.6 }}
                                                            >
                                                                <div
                                                                    className="apexcharts-tooltip-series-group apexcharts-active"
                                                                    style={{ WebkitOrder: "1", MsFlexOrder: "1", order: "1" }}
                                                                    display="flex"
                                                                >
                                                                    <span
                                                                        className="apexcharts-tooltip-marker"
                                                                        style={{}}
                                                                        display="none"
                                                                    ></span>
                                                                    <div
                                                                        className="apexcharts-tooltip-text"
                                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                                        fontSize="12"
                                                                    >
                                                                        <div className="apexcharts-tooltip-y-group">
                                                                            <span className="apexcharts-tooltip-text-y-label">
                                                                                Completed:
                                                                            </span>
                                                                            <span className="apexcharts-tooltip-text-y-value">70</span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                            <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-z-group">
                                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="apexcharts-tooltip-series-group"
                                                                    style={{ WebkitOrder: "2", MsFlexOrder: "2", order: "2" }}
                                                                    display="none"
                                                                >
                                                                    <span
                                                                        className="apexcharts-tooltip-marker"
                                                                        style={{}}
                                                                        display="none"
                                                                    ></span>
                                                                    <div
                                                                        className="apexcharts-tooltip-text"
                                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                                        fontSize="12"
                                                                    >
                                                                        <div className="apexcharts-tooltip-y-group">
                                                                            <span className="apexcharts-tooltip-text-y-label">
                                                                                Completed:
                                                                            </span>
                                                                            <span className="apexcharts-tooltip-text-y-value">70</span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                            <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-z-group">
                                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="apexcharts-tooltip-series-group"
                                                                    style={{ WebkitOrder: "3", MsFlexOrder: "3", order: "3" }}
                                                                    display="none"
                                                                >
                                                                    <span
                                                                        className="apexcharts-tooltip-marker"
                                                                        style={{}}
                                                                        display="none"
                                                                    ></span>
                                                                    <div
                                                                        className="apexcharts-tooltip-text"
                                                                        fontFamily="Helvetica, Arial, sans-serif"
                                                                        fontSize="12"
                                                                    >
                                                                        <div className="apexcharts-tooltip-y-group">
                                                                            <span className="apexcharts-tooltip-text-y-label">
                                                                                Completed:
                                                                            </span>
                                                                            <span className="apexcharts-tooltip-text-y-value">70</span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                            <span className="apexcharts-tooltip-text-goals-label"></span>
                                                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                                                        </div>
                                                                        <div className="apexcharts-tooltip-z-group">
                                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-center mt-4 border-top">
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <div class="pt-3">
                                                                    <p class="text-muted text-truncate mb-2">Completed</p>
                                                                    <h5 class="font-size-16 mb-0">20</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="pt-3">
                                                                    <p class="text-muted text-truncate mb-2">Pending</p>
                                                                    <h5 class="font-size-16 mb-0">5</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="pt-3">
                                                                    <p class="text-muted text-truncate mb-2">Cancel</p>
                                                                    <h5 class="font-size-16 mb-0">9</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/* end card body */}
                                            </div>
                                            {/* end card */}
                                        </div>
                                        {/* end col */}

                                        <div class="col-xl-4 col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex align-items-start">
                                                        <div class="flex-grow-1">
                                                            <h5 class="card-title mb-3">Top Product</h5>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="dropdown">
                                                                <a class="dropdown-toggle text-muted" href="#"
                                                                    >
                                                                    Monthly<i class="mdi mdi-chevron-down ms-1"></i>
                                                                </a>

                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a class="dropdown-item" href="#">Yearly</a>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mx-n4" data-simplebar style={{ maxHeight: "296px;" }}>
                                                        <ul class="list-unstyled mb-0">
                                                            <li class="px-4 py-3">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 me-3">
                                                                        <div class="avatar-sm">
                                                                            <div
                                                                                class="avatar-title bg-primary bg-gradient rounded">
                                                                                #1
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-grow-1 overflow-hidden">
                                                                        <p class="text-muted mb-1 text-truncate">Polo  T-shirt
                                                                        </p>
                                                                        <div class="fw-semibold font-size-15">$ 2.4</div>
                                                                    </div>
                                                                    <div class="flex-shrink-0">
                                                                        <h5 class="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                                                            3.82k</h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="px-4 py-3">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 me-3">
                                                                        <div class="avatar-sm">
                                                                            <div
                                                                                class="avatar-title bg-primary bg-gradient rounded">
                                                                                #2
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-grow-1 overflow-hidden">
                                                                        <p class="text-muted mb-1 text-truncate">Hoodie </p>
                                                                        <div class="fw-semibold font-size-15">$ 2.5</div>
                                                                    </div>
                                                                    <div class="flex-shrink-0">
                                                                        <h5 class="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                                                            3.1k</h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="px-4 py-3">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 me-3">
                                                                        <div class="avatar-sm">
                                                                            <div
                                                                                class="avatar-title bg-primary bg-gradient rounded">
                                                                                #3
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-grow-1 overflow-hidden">
                                                                        <p class="text-muted mb-1 text-truncate">Red  </p>
                                                                        <div class="fw-semibold font-size-15">$ 20.5</div>
                                                                    </div>
                                                                    <div class="flex-shrink-0">
                                                                        <h5 class="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                                                            2.8k</h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="px-4 py-3">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 me-3">
                                                                        <div class="avatar-sm">
                                                                            <div
                                                                                class="avatar-title bg-primary bg-gradient rounded">
                                                                                #4
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-grow-1 overflow-hidden">
                                                                        <p class="text-muted mb-1 text-truncate">Pocket T-shirt</p>
                                                                        <div class="fw-semibold font-size-15">$ 2.5</div>
                                                                    </div>
                                                                    <div class="flex-shrink-0">
                                                                        <h5 class="font-size-14 mb-0 text-truncate w-xs bg-light p-2 rounded text-center">
                                                                            2.06k</h5>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card  */}
                                        </div>
                                        {/* end col  */}
                                    </div>
                                    {/* end row  */}
                                </div>
                                {/* end col  */}
                                <div class="col-xxl-3">

                                    <div class="user-sidebar">
                                        <div class="card">
                                            <div class="card-body p-0">
                                                <div class="user-profile-img">
                                                    <img src="assets/images/pattern-bg.jpg"
                                                        class="profile-img profile-foreground-img rounded-top" style={{ height: "120px;" }}
                                                        alt="" />
                                                    <div class="overlay-content rounded-top">
                                                        <div>
                                                            <div class="user-nav p-3">
                                                                <div class="d-flex justify-content-end">
                                                                    <div class="dropdown">
                                                                        <a class="dropdown-toggle" href="#" role="button"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i data-eva="more-horizontal-outline" data-eva-width="20" data-eva-height="20"
                                                                                class="fill-white"></i>
                                                                        </a>

                                                                        <ul class="dropdown-menu dropdown-menu-end">
                                                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                                                            <li><a class="dropdown-item" href="#">Another action</a>
                                                                            </li>
                                                                            <li><a class="dropdown-item" href="#">Something else
                                                                                here</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end user-profile-img  */}

                                                <div class="mt-n5 position-relative">
                                                    <div class="text-center">
                                                        <img src="assets/images/users/avatar-1.jpg" alt=""
                                                            class="avatar-xl rounded-circle img-thumbnail" />

                                                        <div class="mt-3">
                                                            <h5 class="mb-1">Rajan Yadav</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="p-3">
                                                    <div class="row text-center pb-3">
                                                        <div class="col-6 border-end">
                                                            <div class="p-1">
                                                                <h5 class="mb-1">200</h5>
                                                                <p class="text-muted mb-0">Products</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="p-1">
                                                                <h5 class="mb-1">5k</h5>
                                                                <p class="text-muted mb-0">Followers</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-4" />


                                                    <div class="mb-4">
                                                        <div class="d-flex align-items-start">
                                                            <div class="flex-grow-1">
                                                                <h5 class="card-title mb-3">Earning</h5>
                                                            </div>
                                                            <div>
                                                                <button class="btn btn-link py-0 shadow-none" >
                                                                    <i data-eva="info-outline" class="fill-muted" ></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div id="chart-radialBar" class="apex-charts"></div>

                                                        <div class="text-center mt-4">
                                                            <h4>$26</h4>
                                                            <p class="text-muted">Earning this Month</p>
                                                            <div
                                                                class="d-flex align-items-start justify-content-center gap-2">
                                                                <div class="badge rounded-pill font-size-13 badge-soft-success">+ 2%
                                                                </div>
                                                                <div class="text-muted text-start text-truncate">From previous period</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-4" />
                                                    <div class="px-4 mx-n3" data-simplebar style={{ height: "258px;" }}>

                                                        <div>
                                                            <h5 class="card-title mb-3">Recent Activity</h5>

                                                            <ul class="list-unstyled mb-0">
                                                                <li class="py-2">
                                                                    <div class="d-flex align-items-start">
                                                                        <div class="flex-shrink-0 me-3">
                                                                            <div class="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                                                <div class="text-center">
                                                                                    <h5 class="mb-0">12</h5>
                                                                                    <div>Sep</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex-grow-1 pt-2 text-muted">
                                                                            <p class="mb-0">Responded to need </p>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li class="py-2">
                                                                    <div class="d-flex align-items-start">
                                                                        <div class="flex-shrink-0 me-3">
                                                                            <div class="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                                                <div class="text-center">
                                                                                    <h5 class="mb-0">11</h5>
                                                                                    <div>Sep</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex-grow-1 pt-2 text-muted">
                                                                            <p class="mb-0">Everyone realizes ... <a >Read more</a></p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="py-2">
                                                                    <div class="d-flex align-items-start">
                                                                        <div class="flex-shrink-0 me-3">
                                                                            <div class="avatar-md h-auto p-1 py-2 bg-light rounded">
                                                                                <div class="text-center">
                                                                                    <h5 class="mb-0">10</h5>
                                                                                    <div>Sep</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex-grow-1 pt-2 text-muted">
                                                                            <p class="mb-0">
                                                                                 “jeoiw</p>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body  */}
                                        </div>
                                        {/* end card  */}
                                    </div>
                                </div>
                                {/* end col  */}
                            </div>
                            {/* end row  */}


                            {/* end row  */}
                        </div>
                        {/* container-fluid  */}
                    </div>
                    {/* End Page-content  */}

                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-12">
                                    <script>document.write(new Date().getFullYear())</script> &copy; Borex. Design & Develop by Themesbrand
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Home