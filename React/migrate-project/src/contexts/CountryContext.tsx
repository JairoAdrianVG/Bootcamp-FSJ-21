import { createContext, useState, useContext } from "react";

interface MyContextType {
    selectedCountry: string,
    changeRegion: () => void
}

// Le damos un valor por defecto al contexto
const MyContext = createContext<MyContextType>({
  selectedCountry: "all",
  changeRegion: () => {} 
});

// Custom hook para acceder al contexto
export const useRegion = () => useContext(MyContext);

export const MyProvider :React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  // RETO: Crear un contexto para compartir un estado

  const [selectedCountry,setSelectedCountry] = useState<string>("all");


  const changeRegion = (value:string) => {
      setSelectedCountry(value)
  }

  return(
    <>
      <MyContext.Provider value={}>
        {children}
      </MyContext.Provider>
    </>
  )

}
