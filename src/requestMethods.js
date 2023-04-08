import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmNmMDgwNmYwODMwODllZWNkMzYxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc2NjEzOCwiZXhwIjoxNjgwOTM4OTM4fQ.StkNStiwXARgeOCS9eyq0QweWswTVX8eO_cYLS4GY6s"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN} ` }
})