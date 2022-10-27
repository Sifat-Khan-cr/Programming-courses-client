import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const course = useLoaderData();
    const { name, id, image, info, price } = course;
    return (
        <div>
            <Image src={image}></Image>
            <h1>course name : {name}</h1>
            <h1>course price : ${price}</h1>

        </div>
    );
};

export default Premium;