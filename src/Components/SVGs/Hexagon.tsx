import React from 'react'

const Hexagon = ({ className, height, width, strokeWidth }) => {
    return (
        <svg
            className={className}
            width={width ? width : '88'}
            height={height ? height : '102'}
            viewBox="0 0 88 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <path id="Hexagon" d="M2 26.488L43.8786 2.3094L85.7572 26.488V74.8453L43.8786 99.0239L2 74.8453V26.488Z"
                stroke={className} // Default DB0E4B color
                stroke-width={strokeWidth ? strokeWidth : '4' } // Default 4 
            />
        </svg>
    )
}

export default Hexagon