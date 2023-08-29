export type IconsId =
  | "hause-bathroom"
  | "hause-bed"
  | "hause-kitchen"
  | "hause"
  | "user";

export type IconsKey =
  | "HauseBathroom"
  | "HauseBed"
  | "HauseKitchen"
  | "Hause"
  | "User";

export enum Icons {
  HauseBathroom = "hause-bathroom",
  HauseBed = "hause-bed",
  HauseKitchen = "hause-kitchen",
  Hause = "hause",
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.HauseBathroom]: "61697",
  [Icons.HauseBed]: "61698",
  [Icons.HauseKitchen]: "61699",
  [Icons.Hause]: "61700",
  [Icons.User]: "61701",
};
