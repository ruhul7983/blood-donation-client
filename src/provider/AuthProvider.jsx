import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const [user,setUser]= useState(null);
    
    const auth = getAuth(app);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            const loggedUser = {email:currentUser?.email || user?.email};
            
            setLoading(false);
            setUser(currentUser);
            if(currentUser){
                axiosSecure.post("/jwt",loggedUser)
                .then(res=>{
                    console.log("token response", res.data);
                })
            }
        });

        return ()=>{
            return unsubscribe();
        }
    },[auth,axiosSecure,user?.email]);

    const authInfo = {user,loading,createUser,signIn,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;