import { ChangeEvent, createContext, useState } from "react";

export type SearchContextType = {
    result: string,
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)

type ProviderProps = {
    children: JSX.Element
}


export function SearchProvider({ children }: ProviderProps) {
    const [result, setResult] = useState("")

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setResult(e.target.value.toLowerCase())
        
    }

    return (
        <SearchContext.Provider value={{ result, handleInput }}>
            {children}
        </SearchContext.Provider>
    )

}