import React from "react";
import Marquee from "react-fast-marquee"; // Ensure you have this dependency installed

const SkillsCarousel: React.FC = () => {
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <Marquee speed={100}>
                <p style={{
                    fontFamily: "Impact, Anton, sans-serif",
                    fontSize: "90px",
                    fontWeight: "900",
                    color: "black",
                    textShadow: "1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white",
                }}>
                    PYTHON - JAVASCRIPT - C - KOTLIN - JAVA - SWIFT - HTML - CSS - TYPESCRIPT -
                </p>
            </Marquee>

            <Marquee speed={100} direction={"right"}>
                <p style={{
                    fontFamily: "Impact, Anton, sans-serif",
                    fontSize: "90px",
                    color: "white",
                }}>
                    Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools Tools
                </p>
            </Marquee>


            <Marquee speed={100}>
                <p style={{
                    fontFamily: "Impact, Anton, sans-serif",
                    fontSize: "90px",
                    fontWeight: "900",
                    color: "black",
                    textShadow: "1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white",
                }}>
                    Hello Hello Hello HelloHello HelloHello HelloHello HelloHello HelloHello HelloHello
                    HelloHello HelloHello Hello
                </p>
            </Marquee>
        </div>
    );
};

export default SkillsCarousel;
