interface UseResponsive {
  Rp: (value: number) => number;
  Rh: (value: number) => number;
}

type StyleFunctionType = UseResponsive & {
  mode: Theme;
};
