const express = require('express');
const router = express.Router();

const Post = require('../models/Post');
const verifyToken = require("../verifyToken");
const User = require("../models/User");

router.post('/', verifyToken, async (req, res) => {
    // Code to insert data
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        createdBy: req.body.createdBy
    })

    try {
        const validPost = await post.save()
        res.send(validPost)
    } catch(err){
        res.status(400).send(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.send(post)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.put('/:postId', async (req, res) => {
    // Validation to check if user is the creator
    const creatorExists = await Post.findOne({createdBy: req.body.createdBy});
    if (!creatorExists) {
        return res.status(400).send('Only creator can update this post');
    }

    try{
        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                    title:req.body.title,
                    description:req.body.description,
                }
            })
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})

router.delete('/:postId',async(req,res)=>{
    // Validation to check if user is the creator
    const creatorExists = await Post.findOne({createdBy: req.body.createdBy});
    if (!creatorExists) {
        return res.status(400).send('Only creator can delete this post');
    }

    try{
        const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router;