import { createContext, useState } from "react";

export let wordContext = createContext('')

export default function SearchContextProvide(props) {
    const [wordSearch, setWordSearch] = useState('')



    function search(e) {
        setWordSearch(e.target.value)
    }



    return <wordContext.Provider value={{ search , wordSearch }}>
        {props.children}
    </wordContext.Provider>
}

