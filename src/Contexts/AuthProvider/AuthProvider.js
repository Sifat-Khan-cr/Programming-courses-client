import React from 'react';
import { createContext } from 'react';
import app from '../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const googleAuthProvider = new GoogleAuthProvider();
    const auth = getAuth(app);


    const googleHandler = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    const user = { name: 'sifat' };

    const authInfo = { user, googleHandler };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;