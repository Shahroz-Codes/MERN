import { createContext, useContext } from "react";
//create and export context

const ThemeContext = createContext({
    theme: "light",
    darktheme: ()=>{},
    lighttheme: ()=>{}
})

//create and export context provider
export const ThemeProvider = ThemeContext.Provider

//crate a custom hook to access themecontext
export default function useTheme(){
    return useContext(ThemeContext)
}