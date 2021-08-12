import React,{useState} from 'react';
import Producto from './Producto'

const Catalogo = () => {

    const [arrayProductos] = useState([
        { name: 'Pepsi', price: 200, description: 'Pepsi, también conocida como Pepsi-Cola, es una gaseosa de cola', stock: true },
        { name: 'Galletitas', price: 120, description: 'Galletitas surtidas', stock: false },
        { name: 'Manzanas', price: 250, description: 'Manzanas acarameladas', stock: false },
        { name: 'Aceite', price: 300, description: 'Aceite de oliva para ensalada', stock: false },
        { name: 'Salsa agridulce', price: 200, description: 'Salsa agridulce para carne', stock: false },
        { name: 'Te', price: 100, description: 'Te de hiervas', stock: true },
        { name: 'Sandia', price: 300, description: 'Fruta de estacion', stock: false },
        { name: 'Pan', price: 300, description: 'Pan casero', stock: true },
        { name: 'Jugo', price: 90, description: 'jugo de uva, naranja y pomelo', stock: true },
        { name: 'Papas', price: 150, description: 'Tuberculos', stock: true },
    ]);

    const [toggle, setToggle] = useState(true);

    let buttonDescription
    if (toggle){
        buttonDescription = 'Mostrar productos en Stock';
    } else{
        buttonDescription = 'Mostrar todos los productos'
    }

    return (
        <div>
            <h2>Catalogo</h2>
            {
                toggle ? arrayProductos
                .map((item,index) =>  (
                        <Producto
                        key={index}
                        index={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        stock={item.stock}
                    />
                ))

                :

                arrayProductos
                .filter(item => (item.stock))
                .map((item,index) => (
                        <Producto
                    key={index}
                    index={index}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    stock={item.stock}
                />
                ))
            }
            <button onClick={()=> setToggle(!toggle)}>{buttonDescription}</button>
        </div>
    );
}

export default Catalogo