import axios from 'axios';

export const getConfig =(id_token)=> {
    const config = {
        headers:{
            Authorization: "Bearer " + id_token,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    }
  return config;
}

export const SchoolToolApi = axios.create({
    baseURL: "https://localhost:5001/api"
})