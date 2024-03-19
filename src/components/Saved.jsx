import React from 'react'
import Loader from './Loader';

const Saved = ({ savedImage, loader }) => {
  return (
    <>
      <div className="container">
        {loader | savedImage.length === 0 ? (<Loader />) : (<>
          <div className='card-grid'>
            {savedImage.map((image) => (
              <div key={image.id} className='card' >
                <img src={image.src.large} alt={image.photographer} />
              </div>
            ))}
          </div>
        </>)}
      </div>
    </>
  )
}

export default Saved;
