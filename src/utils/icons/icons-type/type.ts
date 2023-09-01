export type IconsId =
  | "Arrow-Down"
  | "Arrow-Left"
  | "Arrow-Right"
  | "Arrow-Up"
  | "Cancel"
  | "Chevron-Down"
  | "Chevron-Left"
  | "Chevron-Right"
  | "Chevron-Up"
  | "Clear"
  | "Eye-Off"
  | "Eye-On"
  | "More-2"
  | "More"
  | "Search"
  | "Support"
  | "Tick";

export type IconsKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "Cancel"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "Clear"
  | "EyeOff"
  | "EyeOn"
  | "More_2"
  | "More"
  | "Search"
  | "Support"
  | "Tick";

export enum Icons {
  ArrowDown = "Arrow-Down",
  ArrowLeft = "Arrow-Left",
  ArrowRight = "Arrow-Right",
  ArrowUp = "Arrow-Up",
  Cancel = "Cancel",
  ChevronDown = "Chevron-Down",
  ChevronLeft = "Chevron-Left",
  ChevronRight = "Chevron-Right",
  ChevronUp = "Chevron-Up",
  Clear = "Clear",
  EyeOff = "Eye-Off",
  EyeOn = "Eye-On",
  More_2 = "More-2",
  More = "More",
  Search = "Search",
  Support = "Support",
  Tick = "Tick",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.ArrowLeft]: "61698",
  [Icons.ArrowRight]: "61699",
  [Icons.ArrowUp]: "61700",
  [Icons.Cancel]: "61701",
  [Icons.ChevronDown]: "61702",
  [Icons.ChevronLeft]: "61703",
  [Icons.ChevronRight]: "61704",
  [Icons.ChevronUp]: "61705",
  [Icons.Clear]: "61706",
  [Icons.EyeOff]: "61707",
  [Icons.EyeOn]: "61708",
  [Icons.More_2]: "61709",
  [Icons.More]: "61710",
  [Icons.Search]: "61711",
  [Icons.Support]: "61712",
  [Icons.Tick]: "61713",
};
