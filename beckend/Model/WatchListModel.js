const {model} = require("mongoose");

const {WatchListSchema} = require("../schemas/WatchListSchema");

const WatchListModel = new model("watchList",WatchListSchema );

module.exports = {WatchListModel};