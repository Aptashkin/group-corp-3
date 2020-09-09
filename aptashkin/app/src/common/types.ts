export type Settings = {
    user: User;
    theme: ThemeEnum;
    lang: LangEnum;
    enableNotifications: boolean;
    enableBotHelp: boolean;
    handleAction: (action: SettingsActionEnum, payload: any) => void;
}

export type User = {
    firstName: string;
    lastName: string;
    role: RoleEnum;
}

export enum ThemeEnum {
    Light = 'light',
    Dark = 'dark'
}

export enum LangEnum {
    Ru = 'ru',
    En = 'en'
}

export enum RoleEnum {
    Viewer,
    Admin
}

export enum SettingsActionEnum {
    SetLanguage,
    SetTheme,
    SetUser,
    SetEnableNotifications,
    SetEnambleBotHelp
}