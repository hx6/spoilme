const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/ListArticle');

//GET all articles
router.route('/')
  .get((req, res) => {
    Article
      .find()
      .exec()
      .then(docs => {
        res.status(200).json(docs)
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  })

  // creating and saving data
  .post(async (req, res) => {
    let data = req.body

    let article = new Article({
      name: data.name,
      price: data.price,
      store: data.store,
      description: data.description,
      reserved: false,
      thumbnailUrl: data.thumbnailUrl,
      createdBy: data.createdBy
    })

    await article.save((err) => {
      if (err) {
        throw err
      }
      res
        .status(201)
        .json(article.toJSON())
    })
  })

//removing item
router.route('/:articleId')
  .delete((req, res) => {
    const idToRemove = req.params._id
    Article.findByIdAndRemove(idToRemove, (err, results) => {
      if (err) {
        throw err
      }
      res.json(results)
    })
  })

  //modifying item
  .put((req, res) => {
    let articleId = req.params._id
    let data = req.body

    Article.findById(articleId)
      .exec((err, result) => {
        if (err) {
          throw err
        }
        if (result) {
          result.name = data.name
          result.price = data.price
          result.store = data.store
          result.description = data.description
          result.reserved = data.reserved
          result.thumbnailUrl = data.thumbnailUrl
        }
        result.save((err) => {
          if (err) {
            throw err
          }
          res.json(result.toJSON)
        })
      })
  })
module.exports = router

