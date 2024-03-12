import { createContext, useState } from "react";

// Crear mi contexto
export const UserContext = createContext(null);

//Crear mi proveedor de mi contexto
export const MyProvider = ({children}) => {
    
    const [data,setData] = useState(null);
 
    const userObject = {
        data,
        setData
    }

    return(
        <UserContext.Provider value={userObject} >
            {children}
        </UserContext.Provider>
    )
}
