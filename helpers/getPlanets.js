import axios from 'axios';
export const getPlanets = async(name) => {
    try{
        if(name){
            const res=await axios.get(`https://dragonball-api.com/api/planets?name=${name}`);
            return res.data;
        }
        const res=await axios.get('https://dragonball-api.com/api/planets?limit=20');
        return res.data.items;
    }
    catch(error){
        return [];
    }
}