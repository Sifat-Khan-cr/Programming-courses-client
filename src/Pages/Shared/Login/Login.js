import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { googleHandler, logIn } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                navigate(from, { replace: true });

            })
            .catch(error => setError(error.message))

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
            <div className='mt-5'>
                <Button onClick={googleHandler} variant="success">Google</Button>
                <Button variant="success">Twitter</Button>
            </div>

        </div>
    );
};

export default Login;