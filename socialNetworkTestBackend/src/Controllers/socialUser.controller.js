const SocialUserService = require('../services/socialUser.service');
const service = new SocialUserService();

const create = async (req, res) => {
    try {
        const response = await service.create(req.body);
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const get = async (_req, res) => {
    try {
        const response = await service.getAll();
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.getById(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const getByName = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await service.getByUserName(name);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const getByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const response = await service.getByUserEmail(email);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

const _delete = async  (req, res) => { 
    try {
        const { id } = req.params;
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

module.exports = { create, get, getById, update, _delete, getByName, getByEmail};