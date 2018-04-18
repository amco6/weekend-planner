let express = require('express');
let router = express.Router();
const uuidv1 = require('uuid/v1');
const _ = require('lodash');

const fs = require('fs');

const planLocation = 'plans.json'

router.get('/', function (req, res) {
    // Reread data from file
    let plans = JSON.parse(fs.readFileSync(planLocation));

    res.json(plans);
});

router.get('/:id', function (req, res) {
    let plans = JSON.parse(fs.readFileSync(req.app.get(planLocation)));

    console.log('Requested plan: ' + req.params.id);
    let plan = _.find(plans, org => org.id === req.params.id);
    res.json(plan);
});

router.post('/', function (req, res) {
    let data = JSON.parse(fs.readFileSync(planLocation));

    // Create new quiz
    let newPlan = req.body;
    newPlan.id = uuidv1();
    data.push(newPlan);

    // Update data in file
    fs.writeFileSync(planLocation, JSON.stringify(data, null, 2));

    res.json(newPlan);
});

module.exports = router;