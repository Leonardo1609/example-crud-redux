import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
const Header = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( obtenerProductosAction() );
        // eslint-disable-next-line
    }, [])
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to='/' className="text-light">
                        CRUD - React, Redux, REST API & Axios
                    </Link>
                </h1>
            </div>
            <Link to="/productos/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar Producto &#43;</Link>
        </nav>
    );
}
 
export default Header;