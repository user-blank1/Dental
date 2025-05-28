import React from "react";
import "./index.css";
import Section2 from "./section2/Section2.jsx";
import { NavLink } from "react-router-dom";
import img from "../../assets/imgs/background.webp";
import img2 from "../../assets/imgs/clinic.webp";
import img3 from "../../assets/imgs/img1.png";
function Index() {
    return (
        <div>
            <div id="index-wrap" className="">
                <div className="container-fluid h-100 ">
                    <div className="row h-100 align-items-center justify-content-center ">
                        <div className="col-xl-6 col-12 d-flex justify-content-center align-items-center" id="col-1">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12 d-flex justify-content-center align-items-center gap-3">
                            <NavLink to="/paslaugos" className="col-btn btn1 p-1">
                                Paslaugos
                            </NavLink>
                            <NavLink to="/contacts" className="col-btn btn2 p-1">
                                Kontaktai
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
        </div>
    );
}

export default Index;
