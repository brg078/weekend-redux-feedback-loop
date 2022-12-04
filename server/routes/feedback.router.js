const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('in POST /feedback!');

    const feedback = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling","understanding","support","comments") VALUES ($1,$2,$3,$4)`

    pool.query(sqlText, feedback).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error POST /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;