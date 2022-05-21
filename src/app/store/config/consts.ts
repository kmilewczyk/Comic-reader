import { Theme } from "@app/core/_enums";
import { UserConfiguration } from "./models";

export const CONFIG_FEATURE_NAME = 'config';

export const defaultConfiguration: UserConfiguration = {
  'ui.theme': Theme.Light,
  'ui.disableAnimations': false,
}
