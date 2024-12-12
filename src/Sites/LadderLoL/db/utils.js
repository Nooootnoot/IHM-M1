import axios from "axios";

export const getPerkImage = async (id, version) => {
    const data = (await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`)).data

    return data.find(perk => perk.id === id).icon
}