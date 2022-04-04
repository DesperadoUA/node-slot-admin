export default {
    roles: {
        admin: [],
        editor: ['common', 'casino', 'game', 'setting', 'option', 'page'],
        guest: ['common']
    },
    checkLinks(data, role) {
        if(role in this.roles) {
            if(this.roles[role] === 'admin') return data
            else return data.filter(item => this.roles[role].includes(item.type))
        } else {
            alert('error role')
            return []
        }
    }
}