/*
all types: common, casino, game, setting, option, page
*/
export default {
    roles: {
        admin: [],
        editor: ['common', 'casino', 'game', 'setting', 'option', 'page'],
        guest: ['common', 'game']
    },
    checkLinks(data, role) {
        if(role in this.roles) {
            if(role === 'admin') return data
            else return data.filter(item => this.roles[role].includes(item.type))
        } else {
            alert('error role')
            return []
        }
    },
    checkRouts(type, role) {
        if(role in this.roles) {
            if(role === 'admin') return true
            else return this.roles[role].includes(type)
        } else {
            return false
        }
    }
}