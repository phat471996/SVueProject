import { getToken } from '@/utils/auth'

export default function ({ $axios, redirect }) {
    $axios.defaults.baseURL = 'http://localhost:8000/api'

    $axios.onRequest(config => {
        let token = getToken();
        if (token) {
            config.headers['x-access-Token'] = token
        }
        return config
    })
  
    $axios.onError(error => {
        redirect('/404')
    })
  }