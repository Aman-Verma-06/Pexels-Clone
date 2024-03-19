import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Saved from './components/Saved';
import './App.css'

function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('india');
  const [loader, setLoader] = useState(true);
  const [savedImage, setSavedImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`, { headers: { Authorization: "x5bphGqQyPsPTn0o3ksI95VQSIhPsObhM4r5DrE4vcca7O24L7A4zdbF" } });

      setImages(res.data.photos);
      setLoader(false)
    };

    const data = JSON.parse(localStorage.getItem('Images'))
    if (data) {
      setSavedImage(data)
    }

    fetchData()
  }, [search])

  useEffect(() => {
    if (savedImage.length !== 0) {
      const json = JSON.stringify(savedImage)
      localStorage.setItem('Images', json)
    }
  }, [savedImage])

  // console.log('Image is saved: ', savedImage);

  return (
    <>
      <Router>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={loader} savedImage={savedImage} setSavedImage={setSavedImage} />} />
          <Route path='/saved' element={<Saved savedImage={savedImage} loader={loader} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
