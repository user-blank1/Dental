import React from "react";
import { useRef, useEffect, useState } from "react";
import "./body.css";

function Body({ isExpanded }) {
    const marginRef = useRef(null);
    const hasMounted = useRef(false);
    useEffect(() => {
        if (marginRef.current) {
            if (isExpanded === true) {
                const currentMargin = parseInt(window.getComputedStyle(marginRef.current).marginTop);
                marginRef.current.style.marginTop = `${currentMargin + 155}px`;
                hasMounted.current = true;
            } else {
                if (!hasMounted.current) {
                    return;
                }
                const currentMargin = parseInt(window.getComputedStyle(marginRef.current).marginTop);
                marginRef.current.style.marginTop = `${currentMargin - 155}px`;
            }
        }
    }, [isExpanded]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                marginRef.current.style.marginTop = "100px";
            }
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div id="body-1">
            <div ref={marginRef} className="container pb-4" id="body-2">
                <div className="row gap-3 gap-lg-0 pb-2">
                    <div className="col-lg-6  d-flex justify-content-center align-items-center order-2 order-lg-1">
                        <div className="d-flex flex-row gap-3">
                            <button className="btn border border-3 border-dark rounded-0 fw-bold btn1 fs-4">Daugiau</button>
                            <button
                                className="btn border border-3 border-dark rounded-0 fw-bold btn1 fs-4"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Susisiekti
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6  fs-4 fw-bold order-1 order-lg-2" id="col-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque nemo rem numquam quidem deserunt ullam maxime pariatur, a in rerum
                        iure, temporibus inventore sit dignissimos unde suscipit aut laborum commodi dicta hic. Esse, a ut? Quas nemo exercitationem ea quam
                        laborum, quidem beatae omnis illo harum ex vero, nihil dignissimos quisquam vel voluptatum aut, itaque perferendis quod veritatis
                        obcaecati a? Architecto aut laboriosam a ratione aliquid sint ad beatae et est incidunt laudantium laborum similique adipisci minus
                        animi velit, impedit at non vitae maxime ex tempora deleniti aliquam ea. Eos repudiandae impedit modi repellat et magni, rerum quas
                        obcaecati?
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
