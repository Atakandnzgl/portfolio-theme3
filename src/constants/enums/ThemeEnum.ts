export enum ThemeEnum {
    DEFAULT = 0,
    DEFAULT_DARK = 1,
    FLOYKA = 2,
    FLOYKA_DARK = 3,
    ETOPES = 4,
    ETOPES_DARK = 5,
    ARTISAN = 6,
    ARTISAN_DARK = 7,
    PERSONA = 8
}

export const ThemeEnumImgPath: Record<string, string> = {
    DEFAULT: "/assets/images/themes/default-theme.png",
    DEFAULT_DARK: "/assets/images/themes/default-dark-theme.png",
    FLOYKA: "/assets/images/themes/floyka-theme.jpg",
    FLOYKA_DARK: "/assets/images/themes/floyka-dark-theme.jpg",
    PERSONA: "/assets/images/themes/persona-theme.png",
};

export const ThemeEnumText: Record<string, string> = {
    DEFAULT: "Default",
    DEFAULT_DARK: "Default Dark",
    FLOYKA: "Floyka",
    FLOYKA_DARK: "Floyka Dark",
    PERSONA: "Persona",
} 