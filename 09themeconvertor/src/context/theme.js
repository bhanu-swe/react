import { createContext, useContext } from "react";

export const themecontext=createContext({
    themeMode : "light",
    darktheme: ()=>{},
    lighttheme: ()=>{},
})

export const themeprovider = themecontext.Provider;

export default function useTheme(){
    return useContext(themecontext)
}