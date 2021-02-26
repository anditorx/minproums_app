const mainColors = {
  white: 'white',
  black: '#000000',
  red: '#D9435E',
  blackLowOppacity: 'rgba(0,0,0,0.5)',
  greyDark: '#858587',
  greyLight: '#dfe4ea',
  greyLight2: '#8D92A3',
  primary: '#1dd1a1',
};

export const Colors = {
  primary: mainColors.primary,
  body: mainColors.body,
  white: mainColors.white,
  red: mainColors.red,
  black: mainColors.black,
  greyDark: mainColors.greyDark,
  greyLight: mainColors.greyLight,
  greyLight2: mainColors.greyLight2,
  blackLowOppacity: mainColors.blackLowOppacity,
  text: {
    default: mainColors.black,
    grey: mainColors.greyDark,
  },
  button: {
    disable: {
      background: mainColors.greyDark,
      text: mainColors.greyDark,
    },
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
  },
  loadingBackground: mainColors.blackLowOppacity,
};
