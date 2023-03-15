import axios from 'axios'
// import { history } from '../index';
import { createBrowserHistory } from 'history'




export const DOMAIN = 'https://shop.cyberlearn.vn';

export const history = createBrowserHistory();


export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 2000
})

// cấu hình cho request


// cấu hình cho response

http.interceptors.response.use((response) =>{

    return response
},(error) =>{
    if(error.response.status === 400 || error.response.status === 404){

        history.push('/')
    }


    return Promise.reject(error)
}
)