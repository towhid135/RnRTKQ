import {StyleSheet} from 'react-native';
import {colors} from 'theme';
import {FontFamily} from 'components/type/type';

export const styles = ({Rp, Rh, mode}: StyleFunctionType) =>
  StyleSheet.create({
    H1: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(93),
      fontFamily: FontFamily.RobotoLight,
      letterSpacing: Rp(-1.5),
    },
    H2: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(58),
      fontFamily: FontFamily.RobotoLight,
      letterSpacing: Rp(-0.5),
    },
    H3: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(46),
      fontFamily: FontFamily.RobotoLight,
      letterSpacing: Rp(0),
    },
    H4: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(33),
      fontFamily: FontFamily.RobotoLight,
      letterSpacing: Rp(0.25),
    },
    H5: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(23),
      fontFamily: FontFamily.RobotoLight,
      letterSpacing: Rp(0),
    },
    S1: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(15),
      fontFamily: FontFamily.RobotoRegular,
      letterSpacing: Rp(0.15),
    },
    S2: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(13),
      fontFamily: FontFamily.RobotoRegular,
      letterSpacing: Rp(0.1),
    },
    P1: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(15),
      fontFamily: FontFamily.RobotoRegular,
      letterSpacing: Rp(0.5),
    },
    P2: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(13),
      fontFamily: FontFamily.RobotoRegular,
      letterSpacing: Rp(0.25),
    },
    L1: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(15),
      fontFamily: FontFamily.RobotoMedium,
      letterSpacing: Rp(0),
    },
    L2: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(10),
      fontFamily: FontFamily.RobotoRegular,
      letterSpacing: Rp(0),
    },
    L3: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(10),
      fontFamily: FontFamily.RobotoMedium,
      letterSpacing: Rp(0),
    },
    B1: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(16),
      fontFamily: FontFamily.RobotoBold,
      letterSpacing: Rp(0),
    },
    B2: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(14),
      fontFamily: FontFamily.RobotoMedium,
      letterSpacing: Rp(0),
    },
    B3: {
      color: colors[mode].base.primary.normal,
      fontSize: Rp(12),
      fontFamily: FontFamily.RobotoMedium,
      letterSpacing: Rp(0),
    },
  });
