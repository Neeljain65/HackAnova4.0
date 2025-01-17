import React, { useRef } from "react";
import "./HorizontalScroll.css";

import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../imgContainer/ImageContainer";

const HorizontalScroll = () => {
const targetref = useRef();
const {scrollYProgress} = useScroll({target:targetref});
const x = useTransform(scrollYProgress,[0,1],["0% ", "-100%"]);
    return (
        <div className="carousel" ref={targetref}>
            <div className="contentContainer">
                <motion.div    style={{x}}  className="images">
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div> 
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div> 
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            
                            description={"June 2024"}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;