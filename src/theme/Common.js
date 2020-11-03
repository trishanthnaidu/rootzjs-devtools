import { darkThemeStyles } from './Dark';
import { lightThemeStyles } from './Light';
import { PRIMARY_FONT_SIZE } from './Master';
import { BUTTONS_PROPS } from './Buttons';

const themeCollections = {
      light: lightThemeStyles,
      dark: darkThemeStyles
}

export const commonThemeStyles = selectedTheme => ({
      divider: {
            "00": {
                  backgroundColor: themeCollections[selectedTheme].text[80],
            },
            "10": {
                  backgroundColor: themeCollections[selectedTheme].text[80],
                  margin: "1px 12px 1px"
            },
      },
      verticalDivider: {
            "00": {
                  height: 'auto',
                  margin: "8px 4px",
                  alignSelf: 'stretch',
                  backgroundColor: themeCollections[selectedTheme].text[80],
            },
            "10": {
                  height: '80%',
                  margin: "8px 4px",
                  alignSelf: 'stretch',
                  backgroundColor: themeCollections[selectedTheme].text[80],
            }
      },
      animation: {
            smoothRollUp: "smoothRollUp 0.3s ease-out both;",
      },
      ellipsis: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
      },
      checkbox: {
            "& .MuiButtonBase-root": {
                  color: themeCollections[selectedTheme].text[50]
            },
            "& .Mui-checked": {
                  color: themeCollections[selectedTheme].palette.primary.main
            }
      },
      typography: {
            fontFamily: [
                  'Roboto',
                  '"Helvetica Neue"',
                  'Arial',
                  'sans-serif',
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"'
            ],
            body1: {
                  fontSize: PRIMARY_FONT_SIZE,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
            h6: {
                  fontSize: 15,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }
      },
      btn: {
            primary: BUTTONS_PROPS.PRIMARY,
            secondary: BUTTONS_PROPS.SECONDARY
      },
      icons: {
            size: {
                  primary: {
                        fontSize: 18
                  }
            }
      },
      shadow: {
            "00": "1px 1px 3px 1px rgba(0,0,0,0.25)",
            "10": "1px 1px 3px 1px rgba(0,0,0,0.1)",
            "20": "1px 1px 3px 1px rgba(0,0,0,0.05)",
      },
      isMobile: /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
});