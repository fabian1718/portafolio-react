import React, { useEffect } from 'react';

const Effect = () => {

    const array = ["red", "green", "blue", "yellow", "orange"]
    const random = Math.floor(Math.random() * array.length);

    useEffect(()=>{

    },[])

    

    return (
        <div>
            <h1>{array[0]}</h1>
            <p>{random}</p>
        </div>
    );
};

export default Effect;