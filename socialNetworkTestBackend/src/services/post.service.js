const { SocialUser } = require('../db/models/socialUser.model');
const { models } = require('../libs/sequelize');

class PostService {
    constructor() {}

    async getAll() {
        const res = await models.Post.findAll();
        return res
    }

    async getById(id){
        const res = await models.Post.findByPk(id);
        return res;
    }

    async getByUserId(user_id){
        const res = await models.Post.findAll({
            where: {
                user_id,
            }
        })
        return res;
    }


    async create(data){
        const res = await models.Post.create(data);
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

module.exports = PostService;