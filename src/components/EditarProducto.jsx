import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductoEditar, editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';

const EditarProducto = ({ match }) => {
    
    // nuevo state de producto
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: 0
    });

    const { nombre, precio } = producto;
    
    const history = useHistory();
    const dispatch = useDispatch();
    const productos = useSelector( state => state.productos.productos );
    const productoeditar = useSelector( state => state.productos.productoeditar );

    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch( editarProductoAction( producto ) );
        history.push('/');
    }

    // Leer los datos del formulario
    const onChange = e => {
        guardarProducto({
            ...producto,
            [ e.target.name ]: e.target.value
        });
    }

    useEffect( () => {
        if( productos ){
            dispatch( obtenerProductoEditar( match.params.id ) );
        }
        if( productoeditar ){
            guardarProducto( productoeditar );
        }
        // eslint-disable-next-line
    }, [ productos, match, productoeditar ]);

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form onSubmit = { submitEditarProducto }>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value = { nombre }
                                    onChange = { onChange }
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value = { precio }
                                    onChange = { onChange }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    );
}
 
export default EditarProducto;