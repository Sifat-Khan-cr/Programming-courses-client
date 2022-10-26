import React from 'react';
import { createContext } from 'react';
import app from '../../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
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

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user state ", currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = { user, googleHandler };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;