import React from "react";
import product from './Products';
import Product from "./Products";

const Home = () => {
    const products = [
        {
            name: 'Car',
            image: '//cdn.pixabay.com/photo/2016/03/05/10/29/narghileh-1237517_640.jpg',
            Description: 'Car show, its not a crime its a life style',
            Enrty: 250.00,
            Quantity: 10,
            

        },
            {
                name: 'Car',
                image: '//cdn.pixabay.com/photo/2016/03/05/10/29/narghileh-1237517_640.jpg',
                Description: 'Car show, its not a crime its a life style',
                Enrty: 250.00,
                Quantity: 10,
                
            },

            {
                name: 'Car',
                image: '//cdn.pixabay.com/photo/2016/03/05/10/29/narghileh-1237517_640.jpg',
                Description: 'Car show, its not a crime its a life style',
                Enrty: 250.00,
                Quantity: 10,
                
            },


    ];


    return (
        <div>
            <h1> Home Component</h1>
            {products.map((product, index) => (
                <Product
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
        price={product.price}
        quantity={product.quantity}
        />
            ))}

        </div>
    );


};


export default Home;