import axios from 'axios'
import config from './config';
class DAL_Options {
    static getPages(data) {
        return axios.post(config.API_URL + 'options', data)
    }
    static getPageById(data) {
        return axios.post(config.API_URL + `options/${data.url}`, data)
    }
    static updatePage(data) {
        return axios.post(config.API_URL + `options/update`, data)
    }
}
export default DAL_Options