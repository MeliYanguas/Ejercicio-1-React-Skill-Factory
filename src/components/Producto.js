import React from 'react';


const Producto = ({name, price, description, stock, index}) => {

    return (
        <div>
             <h4>{index+1}) Producto: {name}</h4>
             <p>Precio: ${price}</p>
             <p>{description}</p>
             {stock ? <p>hay stock</p> : <p>no hay stock</p>}
             <hr />
             
        </div>

    );
}

export default Producto