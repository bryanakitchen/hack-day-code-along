import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getCharacters, getCharactersById } from "../services/trek-api";
import { Character, ListCharacter } from "../types/types";

export const useCharacters = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [characters, setCharacters] = useState<ListCharacter[]>([]);

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

export const useCharacter = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [character, setCharacter] = useState<Character>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getCharactersById(id)
          .then(data => setCharacter(data))
          .finally(() => setLoading(false));
    }, [])

    return {
        loading,
        character
    }
}
