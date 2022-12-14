import { Result } from 'postcss';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updataUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picUrl = form.picUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        console.log(name, email, password, conPassword);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
                setError("");
                handleUpdateProfile(name, picUrl);

            })
            .catch(error => setError(error.message));
    }

    const handleUpdateProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updataUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>pic Url</Form.Label>
                    <Form.Control name="picUrl" type="text" placeholder="Enter your picture url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm-Password</Form.Label>
                    <Form.Control name="conPassword" type="password" placeholder="Confirm-Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
            <Link to="/logIn">Log-In</Link>
        </div>
    );
};

export default SignUp;