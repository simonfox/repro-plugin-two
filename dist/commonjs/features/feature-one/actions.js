"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_fsa_1 = require("typescript-fsa");
var constants_1 = require("./constants");
var actionCreator = typescript_fsa_1.actionCreatorFactory(constants_1.FEATURE_REDUCER_KEY);
var featureOne = actionCreator("feature-one");
exports.default = {
    featureOne: featureOne,
};
