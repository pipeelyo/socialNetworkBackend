const {Model, DataTypes} = require('sequelize');

const POST_TABLE = 'Post';

class Post extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: POST_TABLE,
            modelName: 'Post',
            timestamps: true,
        }
    }
}

const PostSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'title'
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'content'
    },
    likes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'email'
    },
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER ,
        field: 'user_id'
    },
}

module.exports = { Post , PostSchema};