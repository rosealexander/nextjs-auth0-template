import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

export const lightTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'light',
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
    }));

export const darkTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
    }));

export default lightTheme
