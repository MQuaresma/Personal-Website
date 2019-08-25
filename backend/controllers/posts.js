const posts = require('../models/posts');

var PostsController = module.exports

PostsController.getPosts = async () => {
    procPosts = posts.find().exec().then(rawPosts => {
        procPosts = []

        rawPosts.forEach(post => {
            procPosts.push(post.toObject());
        });

        return procPosts;
    }).catch(error => console.log("PostsController.getPosts error:", error));

    return procPosts;
}

PostsController.getByTitle = async (title) => {
    post = posts.findOne( {title : title} ).exec().then( post => {
        return post.toObject();
    }).catch(error => console.log("PostsController.getByTitle error:", error));

    return post;
}
