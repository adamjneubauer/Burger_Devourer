const orm = require("../config/orm.js");

// Use our orm functions to add burger functionality
const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(userBurger, cb) {
        orm.insertOne("burgers", "burger_name", userBurger, function(res){
            cb(res);
        });
    },
    devour: function(setNewValue, matchedCondition, cb) {
        orm.updateOne("burgers", setNewValue, matchedCondition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;