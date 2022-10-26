import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, image } = course;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"><Link className='text-white' to={`/course/${id}`}>See details</Link></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseCard;