import React, { useState, useEffect } from 'react';
import { SettingsProvider } from '../context/SettingsContext';
import i18n from '../common/i18n';
import {LangEnum, RoleEnum, Settings, SettingsActionEnum, ThemeEnum} from '../common/types';

const AppSettingsProvider: React.FC = ({ children }) => {
    const changeSettingParam = (action: SettingsActionEnum, payload: any) => {
        switch (action) {
            case SettingsActionEnum.SetUser:
                setSettings({...settings, user: payload});
                break;
            case SettingsActionEnum.SetTheme:
                setSettings({...settings, theme: payload});
                break;
            case SettingsActionEnum.SetLanguage:
                setSettings({...settings, lang: payload});
                break;
            case SettingsActionEnum.SetEnableNotifications:
                setSettings({...settings, enableNotifications: payload});
                break;
            case SettingsActionEnum.SetEnambleBotHelp:
                setSettings({...settings, enableBotHelp: payload});
                break;
        }
    }

    const [settings, setSettings] = useState<Settings>({
        user: {
            firstName: 'Andrew',
            lastName: 'Ptashkin',
            role: RoleEnum.Viewer
        },
        theme: ThemeEnum.Light,
        lang: LangEnum.Ru,
        enableNotifications: false,
        enableBotHelp: false,
        handleAction: changeSettingParam
    });

    useEffect(() => {
        document.body.className = '';
        document.body.className = `theme-${settings.theme}`;
    }, [settings.theme]);

    useEffect(() => {
        i18n.changeLanguage(settings.lang);
    }, [settings.lang]);

    return (<SettingsProvider value={settings}>{children}</SettingsProvider>)
}

export { AppSettingsProvider };