import axios from "axios";

const apiPath = 'https://ws.audioscrobbler.com/2.0/?';
const userName = 'raminhbb'
const apiKey ='32eb2d7a7dae121619b5441cf61f44f2'

const getTopArtistsByCountry = async(country:string,page:number) => {
   
    let res =  await axios.get(`${apiPath}method=geo.gettopartists&country=${country}&user=${userName}&api_key=${apiKey}&format=json&limit=5&page=${page}`);

    return res;
}

const getArtistTopTrack = async(artist:string,page:number) => {
   
    let res =  await axios.get(`${apiPath}method=artist.gettoptracks&artist=${artist}&user=${userName}&api_key=${apiKey}&format=json&limit=5&page=${page}`);

    return res;
}


export {getTopArtistsByCountry,getArtistTopTrack}