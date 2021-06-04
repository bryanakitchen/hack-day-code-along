import { useEffect, useState } from "react"
import { getCharacters } from "../services/trek-api";
import { ListCharacter } from "../types/types";

export const useCharacters = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ characters, setCharacters ] = useState<ListCharacter[]>([]);

    useEffect(() => {
        getCharacters()
          .then(data => setCharacters(data))
          .finally(() => setLoading(false));
    }, [])

    return {
        loading,
        characters
    }
}
