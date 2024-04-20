import { selfService } from "./selfService";
import { policies } from "./policies";
import { organization } from "./organization";
import { generalSetting } from "./general";
import { automation } from "./automation";
import { access } from "./accessControl.js";

export const settings = [
  ...selfService,
  ...policies,
  ...organization,
  ...generalSetting,
  ...access,
  ...automation,
];
