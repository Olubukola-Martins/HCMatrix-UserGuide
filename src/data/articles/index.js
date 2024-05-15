import { getStarted } from "./getStarted";
import { settings } from "./settings";
import { signUpArticles } from "./signUp";

export const articles = [...getStarted, ...settings, ...signUpArticles];
// export const articles = [];
