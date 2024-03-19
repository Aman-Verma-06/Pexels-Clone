import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <nav className='navBar mt-3'>
                <div className="navBtn">
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Nature');
                            navigate('/')
                        }}
                    >Nature</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Travel');
                            navigate('/')
                        }}
                    >Travel</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('City');
                            navigate('/')
                        }}
                    >City</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Cars');
                            navigate('/')
                        }}
                    >Cars</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Fashion');
                            navigate('/')
                        }}
                    >Fashion</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Animals');
                            navigate('/')
                        }}
                    >Animals</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Technolog}y');
                            navigate('/')
                        }}
                    >Technology</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Business');
                            navigate('/')
                        }}
                    >Business & Finance</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Furniture}s');
                            navigate('/')
                        }}
                    >Furnitures</div>
                    <div className="button btn btn-outline-light mx-1"
                        onClick={() => {
                            setSearch('Currency');
                            navigate('/')
                        }}
                    >Currency</div>
                    {location.pathname == '/saved' ? (
                        <div className="button btn btn-outline-primary mx-1"
                            onClick={() => navigate('/')}
                        >Home</div>
                    ) : (
                        <div className="button btn btn-outline-primary mx-1"
                            onClick={() => navigate('/saved')}
                        >Saved</div>
                    )}
                </div>
            </nav>
            {location.pathname === '/' && (
                <div className="input-container my-4 d-flex align-items-center justify-content-center">
                    <div className="mb-3">
                        <input type="text"
                            placeholder='Search here...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control bg-dark text-light"
                            style={{ width: '600px' }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;
