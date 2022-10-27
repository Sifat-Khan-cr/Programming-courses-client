import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {

    const course = useLoaderData();
    const { name, id, image, info, } = course;
    return (
        <div>
            <h2>Course detail of {name}</h2>
            <img src={image} alt="" />
            <p>{info}</p>
            <button><Link to={`/course/premium/${id}`}>Get Premium Access</Link></button>

        </div >
    );
};

export default CourseDetail;