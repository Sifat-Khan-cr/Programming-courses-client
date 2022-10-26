import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, image, info } = course;
    return (
        <div className='m-2 mt-0'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '250px' }} variant="top" className='' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info.slice(200) + " ....."}
                    </Card.Text>
                    <Button variant="primary"><Link className='text-white' to={`/course/${id}`}>See details</Link></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;