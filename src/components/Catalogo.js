import React,{useState} from 'react';
import Producto from './Producto'

const Catalogo = () => {

    const [arrayProductos, setArrayProductos] = useState([
        { name: 'Pepsi', price: 200, description: 'Pepsi, también conocida como Pepsi-Cola, es una gaseosa de cola', stock: true },
        { name: 'Galletitas', price: 120, description: 'Galletitas surtidas', stock: false },
]);

    return (
        <div>
            <h2>Catalogo</h2>
            {
                arrayProductos
                // .filter(item => (item.stock))
                .map((item,index) =>  (
                    <Producto
                        key={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        stock={item.stock}
                    />
                ))
            }
            <button onClick={()=>{arrayProductos.filter(item => (item.stock))} }>Mostrar stock</button>
        </div>
    );
}

export default Catalogo