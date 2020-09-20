const router = require('express').Router();
const handle = require('../../handlers');

router.get('/random-user', handle.getRandomUser);

module.exports = router;