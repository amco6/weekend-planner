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
    let plans = JSON.parse(fs.readFileSync(planLocation));

    console.log('Requested plan: ' + req.params.id);
    let plan = _.find(plans, plan => plan.id.toString() === req.params.id.toString());
    res.json(plan);
});

router.post('/', function (req, res) {
    let data = JSON.parse(fs.readFileSync(planLocation));

    // Create new plan
    let newPlan = req.body;
    newPlan.id = uuidv1();
    newPlan.status = 'NEW';
    data.push(newPlan);

    // Update data in file
    fs.writeFileSync(planLocation, JSON.stringify(data, null, 2));

    res.json(newPlan);
});

router.put('/:id', function (req, res) {
    const id = req.params.id;
    let data = JSON.parse(fs.readFileSync(planLocation));
    let index = _.findIndex(data, plan => plan.id.toString() === id.toString());

    // Update plan
    data[index] = req.body;

    // Update data in file
    fs.writeFileSync(planLocation, JSON.stringify(data, null, 2));

    res.json(data[index]);
});

router.delete('/', function (req, res) {

});

module.exports = router;