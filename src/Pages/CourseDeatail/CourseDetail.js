import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>this is course detail of {course.name}</h1>

        </div>
    );
};

export default CourseDetail;