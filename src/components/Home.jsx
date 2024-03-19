import React from 'react'
import Loader from '../components/Loader';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ images, loader, savedImage, setSavedImage }) => {
  const save = (img) => {

    let flag = true;

    if (savedImage !== null && savedImage.length > 0) {
      for (let i = 0; i < savedImage.length; i++) {
        if (savedImage[i].id === img.id) {
          flag = false;
          // console.log('image is already exist');
          toast.info('Image is already saved!!!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }

    if (flag) {
      setSavedImage([...savedImage, img])
      toast.success('Image Saved', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      // console.log('image is saved');
    }

  };
  return (
    <>
      <ToastContainer />
      <div className="container">
        {loader ? (<Loader />) : (<>
          <div className='card-grid'>
            {images.map((image) => (
              <div key={image.id} className='card' onClick={() => save(image)} >
                <img src={image.src.large} alt={image.photographer} />
                {/* <div className="overlay">
                <div className="details">
                  <span className="photographer">{image.photographer}</span>
                </div>
              </div> */}
              </div>
            ))}
          </div>
        </>)}
      </div>
    </>
  )
}

export default Home;
