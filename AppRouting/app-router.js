const express = require('express')
const appRouter = express.Router()
const appServices = require('./app-services')

appRouter
    .route('/api/users')

appRouter
    .route('/api/posts')


module.exports = appRouter