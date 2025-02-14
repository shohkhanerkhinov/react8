import axios from "axios";

const http = axios.create({
    baseURL: 'https://json-api.uz/api/project/flowers'
})

export {http}