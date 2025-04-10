import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [authReady, setAuthReady] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            //TODO: Continue working here! MERN #11 41:20
        }
        checkToken()
    }, [])
    
    const value = {
    
    };

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) throw new Error('useAuth must be thrown inside an AuthContextProvider');

    return context;
};
