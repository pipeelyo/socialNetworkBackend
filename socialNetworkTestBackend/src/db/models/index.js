const { SocialUser, SocialUserSchema } = require('./socialUser.model');
const { Post, PostSchema } = require('./post.model');

function setupModels( sequelize ) {
    SocialUser.init( SocialUserSchema, SocialUser.config(sequelize) );
    Post.init(PostSchema, Post.config(sequelize));
}

module.exports = setupModels;