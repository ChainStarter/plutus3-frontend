export enum THEME_MEDIA_ENUM {
  large = "@media screen and (min-width: 1200px)",
  medium = "@media screen and (max-width: 1199px)",
  small = "@media screen and (max-width: 835px)",
}

export function colors(darkMode = false) {
  return {
    primary: "#9C77F8",
    error: "#ef447d"
  };
}

export function theme(darkMode = false) {
  return {
    ...colors(darkMode),
  };
}
