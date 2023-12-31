import React from "react";
import { motion } from "framer-motion";

const style = {
    width: 20,
    height: 20,
    opacity: 1,
    margin: 8,
    borderRadius: 0,
    display: "inline-block",
    
    background:'#8b53e4',
}
  
const variants = {
    start: {
        scale: 0.2,
        rotate: 0,
    },
    end: {
        scale: 1,
        rotate: 360,
    },
}

export default function Loader(props) {
    return (
        <div className="loader-container fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-2 z-50">
        <div>
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.2
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.4
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.6
                    }}
                />
          <motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      repeat: "Infinity",
                      repeatType: "reverse",
                      ease: "anticipate",
                      duration: 1, 
                      delay: 0.8
                    }}
                />    
        </div>
        <p>Sending Request....</p>
        </div>
    )
}