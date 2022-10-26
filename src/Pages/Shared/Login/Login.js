import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleHandler } = useContext(AuthContext);
    return (
        <div>
            <h1>this is login page</h1>
            <Button onClick={googleHandler} variant="success">Google</Button>
            <Button variant="success">Twitter</Button>

        </div>
    );
};

export default Login;