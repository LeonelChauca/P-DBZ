import axios from 'axios';
export const getHeroes = async(name) => {
    try{
        if(name){
            const res=await axios.get(`https://dragonball-api.com/api/characters?name=${name}`);
            return res.data;
        }
        const res=await axios.get('https://dragonball-api.com/api/characters?limit=58');
        return res.data.items;
    }
    catch(error){
        return [];
    }
}