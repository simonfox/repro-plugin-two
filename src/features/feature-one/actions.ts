import { actionCreatorFactory } from "typescript-fsa";
import { FEATURE_REDUCER_KEY } from "./constants";

const actionCreator = actionCreatorFactory(FEATURE_REDUCER_KEY);

const featureOne = actionCreator<{ name: string, order: number }>("feature-one");

export default {
  featureOne,
};
