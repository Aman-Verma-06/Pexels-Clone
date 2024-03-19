import React from "react";
import LoadingGIF from '../assets/LoadingGIF.gif'

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <img src={LoadingGIF} alt="Loading..." />
            </div>
        </>
    )
}

export default Loader;
