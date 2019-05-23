import { getToken } from '@/utils/auth'

export default function ({ $axios, redirect }) {
    $axios.defaults.baseURL = 'http://localhost:8000/api'

    $axios.onRequest(config => {
        // if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['X-Token'] = getToken()
        // }
        // return config
    })
  
    $axios.onError(error => {
        redirect('/404')
    })
  }