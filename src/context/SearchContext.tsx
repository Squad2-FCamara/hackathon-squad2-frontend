import { createContext, useState } from "react";

import api from "../services/api";

export const SearchContext = createContext<any>(undefined);

export function SearchProvider({ children }: any) {
    const [searchResult, setSearchResult] = useState([])

    const getSearchResult = async (searchText: any) => {
        try {
            const urlBase = "https://fcamara-squad2.herokuapp.com/";
            const res = await api.get(urlBase + `profile/feature/${searchText.toLowerCase()}`)
        
            const data = res.data
            setSearchResult(data)
        } catch (error) {
            console.log(error);
            console.log('Não foi possível encontrar o resultado da busca...')
        }
    }

    return (
        <SearchContext.Provider value={{ searchResult, getSearchResult }}>
            {children}
        </SearchContext.Provider>
    )
}
