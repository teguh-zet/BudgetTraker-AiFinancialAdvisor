const { User } = require('../../../models');
const bcrypt = require('bcrypt');
const BadRequestError = require('../../errors/BadRequestError');
const NotFound = require('../../errors/NotFoundError');
const ServerError = require('../../errors/ServerError');

class UserService {
    constructor() {
        this.SALT_ROUNDS = 10;
    }

    async getAll() {
        return await User.findAll({ attributes: { exclude: ['password']} });
    }

    async getById(id) {
        return await User.findByPk(id, { attributes: { exclude: ['password'] } });
    }

    async create(data) {
        const existstingUser = await User.findOne({
            where: {email: data.email}
        });

        if(existstingUser) {
            throw new BadRequestError("Email Sudah Terdaftar");
        }

        const hash =  await bcrypt.hash(data.password, this.SALT_ROUNDS);

        const user = await User.create({ ...data, password: hash});
        const userJson = user.toJSON();
        delete userJson.password;

        return userJson;
    }

    async update(id, data) {
        const user = await User.findByPk(id);
        if(!user) return null;

        if(data.email && data.email !== user.email){
            const existingUser = await User.findOne({
                where: {email: data.email}
            })

            if(existingUser) {
                throw new BadRequestError("Email Sudah Di pake browww");
            }
        }

        if(data.password) {
            data.password = await bcrypt.hash(data.password, this.SALT_ROUNDS);
        } else {
            delete data.password;
        }

        try {
            await user.update(data, { validate: true });
        } catch (err) {
            console.error("error", err);
            const message = err.errors?.map(e => e.message) || [err.message];
            throw new ServerError("Gagal Update user: " + message.join(', '));
        }

        const userJson = user.toJSON();
        delete userJson.password;
        return userJson;
    }

    async delete(id) {
        const user = await User.findByPk(id);
        if(!user) return null;
        
        await user.destroy();
        return true;
    }
}

module.exports = new UserService();