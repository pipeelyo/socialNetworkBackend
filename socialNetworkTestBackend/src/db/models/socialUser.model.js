const {Model, DataTypes} = require('sequelize');

const SOCIAL_USER_TABLE = 'SocialUser';

class SocialUser extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: SOCIAL_USER_TABLE,
            modelName: 'SocialUser',
            timestamps: true,
        }
    }
}

const SocialUserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    full_name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'full_name'
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'age'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email'
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password'
    },
    // created_at: {
    //     allowNull: true,
    //     type: DataTypes.DATE,
    //     field: 'created_at'
    // },
    // updated_at: {
    //     allowNull: true,
    //     type: DataTypes.DATE,
    //     field: 'updated_at'
    // },
    // deleted_at: {
    //     allowNull: true,
    //     type: DataTypes.DATE,
    //     field: 'deleted_at'
    // }
}

module.exports = { SocialUser , SocialUserSchema};