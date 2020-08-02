import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = '144b6d2650bcddcda0c3d7cbbbddb4b7';


export const fetchWather = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'matric',
            APIID:APIKEY
        }
    });
}

return data ; 