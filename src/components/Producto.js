import React from 'react';


const Producto = ({name, price, description, stock}) => {

    return (
        <div>
             <h4>Producto:</h4>
             <p>{name}</p>
             <p>${price}</p>
             <p>{description}</p>
             {stock ? <p>hay stock</p> : <p>no hay stock</p>}
             <hr />
             
        </div>

    );
}

export default Producto