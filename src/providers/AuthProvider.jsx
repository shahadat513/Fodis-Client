import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    // Default to true during initial auth state check


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed:", currentUser?.email);

            setLoading(true)
            if(currentUser?.email){
                const user = {email:currentUser.email}

                axios.post('https://fodis-server.vercel.app/jwt',user,{
                    withCredentials: true
                })
                .then(res=>{
                    setLoading(false);
                    console.log('log in token',res.data)})
                    setUser(currentUser)
            }
            else{
                axios.post('https://fodis-server.vercel.app/logout',{},{
                    withCredentials: true
                })
                .then(res=>{
                    setLoading(false);
                    console.log('log out',res.data)})
                    setUser(null)
            }



             // Stop loading after auth state check
        });

        // Cleanup function to unsubscribe from the listener
        return () => unsubscribe();
    }, []);

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        });
    };

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleLogOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        handleLogOut,
        manageProfile,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
