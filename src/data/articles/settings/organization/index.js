import { branch } from "./branch";
import { department } from "./department";
import { designation } from "./designation";
import { group } from "./group";
import { employee } from "./employee";

export const organization = [
  ...branch,
  ...department,
  ...designation,
  ...group,
  ...employee,
];
