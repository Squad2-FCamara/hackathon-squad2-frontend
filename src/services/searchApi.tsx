import api from "./api"

export async function getResults(text: string) {
    try {
        const res = await api.get(`/profile/skill/${text}`)
        console.log(res)
        return res.data

    } catch (error) {
        console.log(error);
        
    }
}