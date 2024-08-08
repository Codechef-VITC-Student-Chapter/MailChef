import { auth } from "../../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
// import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);
    const [loading, setLoading] = useState(true);
    //   const [isGoogleUser, setIsGoogleUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            // check if provider is email and password login
            const isEmail = user.providerData.some(
                (provider) => provider.providerId === "password"
            );
            setIsEmailUser(isEmail);
            // check if the auth provider is google or not
            //   const isGoogle = user.providerData.some(
            //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
            //   );
            //   setIsGoogleUser(isGoogle);
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }

        setLoading(false);
    }

    const value = {
        userLoggedIn,
        isEmailUser,
        isGoogleUser,
        currentUser,
        loading,
        setCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );



//OLD CODE

    // import { auth } from "../../Firebase/firebase";
    // import { onAuthStateChanged } from "firebase/auth";
    // import { useContext, useEffect, useState } from "react";

    // const AuthContext = React.createContext();

    // export function useAuth() {
    //     return useContext(AuthContext);
    // }

    // export function AuthProvider({ children }) {
    //     const [currentUser, setCurrentUser] =useState(null);
    //     const [userLoggedIn, setUserLoggedIn] = useState(false);
    //     const [loading, setLoading] = useState(true);

    //     useEffect(()=>{
    //         const unsubscribed = onAuthStateChanged(auth,initializeUser);
    //         return unsubscribed;
    //     },[])

    //     async function initializeUser(user) {
    //         if(user){
    //             setCurrentUser({ ...user });
    //         }else{
    //             setCurrentUser(null);
    //             setUserLoggedIn(false);
    //         }
    //         setLoading(false);
    //     }
    //     const value = {
    //         currentUser,
    //         userLoggedIn,
    //         loading
    //     }
    //     return (
    //         <AuthContext.Provider value ={value}>
    //             {!loading && children}
    //         </AuthContext.Provider>
    //     )
    // } 
}