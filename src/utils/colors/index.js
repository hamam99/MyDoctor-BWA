const mainColors = {
    green1:'#0BCaD4',
    green2:'#EDFCFD',
    dark1:'#112340',
    dark2:'#495A75',
    dark3:'#8092AF',
    grey1:'#7D8797',
    grey2:'#E9E9E9',
    grey3:'#EDEEF0',
    blue1: '#0656CB',
    black1:'#00000',
    black2:'rgba(0,0,0,0.5)',
    red1:'#E06379',
};

export const colors = {
    white:'white',
    black:'black',
    primary : mainColors.green1,
    secondary: mainColors.dark1,
    tertiary: mainColors.blue1,
    disable: mainColors.grey3,
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
        menuInactive:mainColors.dark2,
        menuActive: mainColors.green1,
        subtitle: mainColors.dark3,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text:'white',
        },
        secondary: {
            background:'white',
            text: mainColors.dark1,
        },
    },
    border: mainColors.grey2,
    cardLight:mainColors.green2,
    loadingBackground:mainColors.black2,
    error:mainColors.red1,
};
