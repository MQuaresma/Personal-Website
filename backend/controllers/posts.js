const posts = require('../models/posts');


const PostsController = module.exports

PostsController.getPosts = async () => {
    procPosts = posts.find().exec().then(rawPosts => {
        procPosts = []

        rawPosts.forEach(post => {
            procPosts.push({ title: post.title, body: post.body });
        });

        return procPosts;
    });

    return procPosts;
}
