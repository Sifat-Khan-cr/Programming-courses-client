import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    const { name, id, image, info, price } = course;
    return (
        <div>
            <h2>Course detail of {name}</h2>
            <img src={image} alt="" />
            <p>{info}</p>

        </div>
    );
};

export default CourseDetail;