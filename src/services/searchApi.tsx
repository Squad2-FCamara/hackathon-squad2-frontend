import api from "./api"

interface Info {

}

export async function getResults(text: string) {
    try {
        const res = await api.get(`/users/skill/${text}`)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}