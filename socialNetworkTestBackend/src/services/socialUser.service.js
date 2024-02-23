const { models } = require('../libs/sequelize');

class SocialUserService {
    constructor() {}

    async getAll() {
        const res = await models.SocialUser.findAll();
        return res
    }

    async getByUserName(full_name){
        const res = await models.SocialUser.findAll({
            where: {
                full_name,
            }
        })
        return res;
    }

    async getById(id){
        const res = await models.SocialUser.findByPk(id);
        return res;
    }

    async create(data){
        const res = await models.SocialUser.create(data);
        return res;
    }

    async update(id, data){
        const model = await this.getById(id);
        if(!model) return { data: 'no find user whit id', id };
        const res = await model.update(data);
        return res;
    }

    async delete(id){
        const model = await this.getById(id);
        await model.destroy()
        return {deleted: true};
    }
}

module.exports = SocialUserService;