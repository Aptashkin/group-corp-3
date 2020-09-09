import React from "react";
import {Settings} from '../common/types';

export const SettingsContext = React.createContext<Settings>({} as Settings);
export const SettingsProvider = SettingsContext.Provider;
export const SettingsConsumer = SettingsContext.Consumer;