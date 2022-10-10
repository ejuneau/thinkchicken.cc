import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import "./ScrollToTop.css";

const ScrollToTop = () => {
    const [showTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {

        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {(
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;