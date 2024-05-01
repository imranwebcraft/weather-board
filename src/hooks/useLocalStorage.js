import { useEffect, useState } from "react"

const useLocalStorage = (storageKey, storageValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? storageValue
    )

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    },[value, storageKey, setValue])

    return [value, setValue];
}

export default useLocalStorage;