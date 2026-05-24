import { createContext, ReactNode, useEffect, useState } from "react";

// interface UserType {
//   _id: string;
//   name: string;
//   email: string;
// }

interface AuthContextType {
    user: any;
    token: string | null;
    login: (token: string, userData: any) => void;
    logout: () => void;
}

// create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// wrap entire app
export const AuthProvider = ({children}:{children: ReactNode}) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(null);

    // සයිට් එක මුලින්ම Load වෙද්දිම බ්‍රව්සර් එකේ සේව් වෙලා තියෙනවද කියලා බලනවා
    useEffect(() =>{
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if(storedToken && storedUser){
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // කවුරුහරි Login වුණාම මේ ෆන්ක්ෂන් එකෙන් තමයි ඩේටා ටික සේව් කරන්නේ
    const login = (newToken: string, userData: any) => {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    // Logout වුණාම දේවල් මකලා දානවා
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};



