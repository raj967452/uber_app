'use strict';

const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const middlewares = require('../middlewares');
const Container = require("typedi").Container;


const route = Router();

route.post('/signup', celebrate({
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }),
    async (req, res, next) => {
        const logger = Container.get('logger');
        try {
            const authService = Container.get(AuthService);
            const { user, token } = await authService.signup(req.body);
            return res.json({user, taken}).status(201);
        } catch (error) {
            logger.error('error %o ', error);
            return next(error);
        }
    }
);

route.post('/signin', celebrate({
        body: Joi.object({       
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }),
    async (req, res, next) => {
        const logger = Container.get('logger');
        try {
            const authService = Container.get(AuthService);
            const { user, token } = await authService.signup(req.body);
            return res.json({user, taken}).status(200);
        } catch (error) {
            logger.error('error %o ', error);
            return next(error);
        }
    }
);

route.post('/logout', middlewares.isAuth, (req, res, next) => {
    async (req, res, next) => {
        const logger = Container.get('logger');
        try {
            return res.status(200).end()
        } catch (error) {
            logger.error('error %o ', error);
            return next(error);
        }
    }
});