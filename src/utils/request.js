import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://fdb-web-api.azurewebsites.net', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['Content-Type'] = 'application/json'
    // do something before request is sent
    // if (store.getters.token) {
    //   config.headers['Authorization'] = store.getters.token
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.config.responseType === 'blob') {
      return response
    } else {
      const res = response.data
      return res
    }
  },
  error => {
    const { response } = error

    switch (response.status) {
      case 400:
        console.error(error)
        break
      case 401:
        console.error(error)
        break
      default:
        console.error(error)
    }
    return Promise.reject(error)
  }
)

export default service
