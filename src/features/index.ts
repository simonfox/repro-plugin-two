import { FrameworkConfiguration } from "aurelia-framework";
import featureOne from "./feature-one";


export function configure(config: FrameworkConfiguration) {
  config.feature(featureOne.path);
}

export default {
  featureOne: featureOne,
};