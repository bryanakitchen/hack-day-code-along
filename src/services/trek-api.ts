import { Character } from "../types/types";

const URL = process.env.REACT_APP_API_URL as string;

export const getCharacters = async(): Promise<Character[]> => {
    const res = await fetch(URL);
    const json = await res.json();

    if(!res.ok) throw new Error('Uh oh, something went wrong');

    return json;
}
