import { actionCreatorFactory } from "typescript-fsa";
import { FEATURE_REDUCER_KEY } from "./constants";
var actionCreator = actionCreatorFactory(FEATURE_REDUCER_KEY);
var featureOne = actionCreator("feature-one");
export default {
    featureOne: featureOne,
};
