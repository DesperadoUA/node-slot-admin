import axios from 'axios'
import config from './config';
class DAL_Settings {
    static getPages(data) {
        return axios.post(config.API_URL + 'settings', data)
    }
    static getPageById(data) {
        return axios.post(config.API_URL + `settings/${data.url}`, data)
    }
    static updatePage(data) {
        return axios.post(config.API_URL + `settings/update`, data)
    }
}
export default DAL_Settings