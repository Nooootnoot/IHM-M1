import axios from "axios";

export const getAccount = async () => {
    return (await axios.get('https://maetis.fr:3002/account')).data;
}

export const getCarrousel = async () => {
    return (await axios.get('https://maetis.fr:3002/match/carrousel')).data;
}

export const getProfil = async (puuid) => {
    return (await axios.get(`https://maetis.fr:3002/account/profil/${puuid}`)).data;
}