import React from "react";
import "./Section2.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "../../../assets/imgs/background.webp";
import img2 from "../../../assets/imgs/clinic.webp";
import img3 from "../../../assets/imgs/img1.png";
import img4 from "../../../assets/imgs/logo.png";

function Section2() {
    return (
        <div>
            <div className="container my-4 d-flex justify-content-center">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        width: "100%",
                        heightRatio: 0.6,
                        gap: "1rem",

                        breakpoints: {
                            1200: {
                                perPage: 2,
                            },
                            768: {
                                perPage: 1,
                            },
                        },
                    }}
                    aria-label="My Image Carousel"
                >
                    <SplideSlide>
                        <div className="splide-img-wrap h-100 ">
                            <img src={img1} alt="Background" className="w-100 h-100 object-fit-cover" />
                            <div className="carousel-caption fs-1 text-dark">Description 01</div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="splide-img-wrap  h-100 ">
                            <img src={img2} alt="Clinic" className="w-100 h-100 object-fit-cover" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {" "}
                        <div className="splide-img-wrap h-100 ">
                            <img src={img3} alt="Image 1" className="w-100 h-100 object-fit-cover" />
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        {" "}
                        <div className="splide-img-wrap  h-100 ">
                            <img src={img4} alt="Logo" className="w-100 h-100 object-fit-cover" />
                        </div>
                    </SplideSlide>{" "}
                </Splide>
            </div>
        </div>
    );
}

export default Section2;
