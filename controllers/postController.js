const Post = require("../models/postModel");

exports.getAllPosts = async (request, response, next) => {
    try {
        const posts = await Post.find();
        response.status(200).json({
            status: 'success',
            results: posts.length,
            data: posts,
        })
    } catch (e) {
        response.status(400).json({
            status: 'fail',
            error: e.message,
        })
    }
}

exports.getOnePost = async (request, response, next) => {
    try {
        const posts = await Post.findById(request.params.id);

        response.status(200).json({
            status: 'success',
            data: posts,
        })
    } catch (e) {
        response.status(400).json({
            status: 'fail',
            error: e.message,
        })
    }
}

exports.createPost = async (request, response, next) => {
    try {
        console.log(request.body);
        const post = await Post.create(request.body);

        response.status(200).json({
            status: 'success',
            data: post,
        })
    } catch (e) {
        response.status(400).json({
            status: 'fail',
            error: e.message,
        })
    }
}

exports.updatePost = async (request, response, next) => {
    try {
        const posts = await Post.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true,
        });

        response.status(200).json({
            status: 'success',
            data: posts,
        })
    } catch (e) {
        response.status(400).json({
            status: 'fail',
            error: e.message,
        })
    }
}

exports.deletePost = async (request, response, next) => {
    try {
        const posts = await Post.findOneAndDelete(request.params.id);

        response.status(200).json({
            status: 'success',
        })
    } catch (e) {
        response.status(400).json({
            status: 'fail',
            error: e.message,
        })
    }
}