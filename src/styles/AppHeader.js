import { fade, makeStyles } from '../components/Matlib';

export const Styles = makeStyles(theme => ({
      root: {
            display: "flex",
      },
      appBar: {
            height: 48,
            boxShadow: "none",
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: theme.background["00"],
      },
      divider: theme.divider["00"],
      dividerVertical: theme.verticalDivider["00"],
      checkbox: {
            marginLeft: 20
      },
      logoContainer: {
            flex: 1,
            marginRight: 10,
            
            "& button": {
                  padding: "7px 0 0 0",
            }
      },
      logo: {
            height: 30,
            marginRight: -5,
            cursor: "pointer",
            [theme.breakpoints.up('sm')]: {
                  display: 'block',
            },

            "& svg": {
                  color: theme.text[50],
            }
      },
      logoTitle:{
            height: "auto",
            marginBottom: 4,
            cursor: "pointer",
            [theme.breakpoints.up('sm')]: {
                  display: 'block',
            },

            "& svg": {
                  color: theme.text[50],
            }
      },
      search: {
            width: '100%',
            marginLeft: 0,
            marginRight: 10,
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.background[10], 0.8),
            '&:hover': {
                  backgroundColor: theme.background[10],
            },
            [theme.breakpoints.up('sm')]: {
                  marginLeft: theme.spacing(1),
                  width: 'auto',
            },
      },
      searchIcon: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            pointerEvents: 'none',
            color: theme.text[50],
            width: theme.spacing(7),
            justifyContent: 'center',

            "& svg": {
                  fontSize: 18
            },
      },
      inputRoot: {
            color: theme.text["00"],
      },
      inputInput: {
            fontSize: 13,
            width: '100%',
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                  width: "35vw",
                  '&:focus': {
                        width: "40vw",
                        backgroundColor: theme.background[10],
                  },
            },
      },
      themeTogglerFab: {
            width: 25,
            height: 25,
            opacity: 0.1,
            minHeight: 25,
      },
      themeTogglerDay: {
            ...theme.btn.primary,
            padding: 2,
            fontSize: 16,
            borderRadius: 15,
            transform: "rotate(120deg)",
            color: theme.background["00"],
            backgroundColor: theme.reverse.background["00"],
      },
      themeTogglerNight: {
            ...theme.btn.primary,
            padding: 2,
            fontSize: 16,
            borderRadius: 15,
            transform: "rotate(120deg)",
            color: theme.reverse.background["00"],
            backgroundColor: theme.palette.primary.main,
      },
      menuTabs: {
            minHeight: 20,
            backgroundColor: theme.background[10],
            "& button": {
                  minHeight: 20,
                  color: theme.text[30],
                  textTransform: "Capitalize",
                  fontSize: theme.typography.body1.fontSize
            }
      },
      iconButton: {
            padding: 5,
            margin: "0px 7px",
            color: theme.text[60],

            "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: fade(theme.palette.primary.main, 0.1)
            }
      },
      popoverIN: {
            color: theme.text[30],
            backgroundColor: theme.background["00"],

            "& ul>li:hover": {
                  color: theme.text[10],
                  backgroundColor: theme.background[10],
            }
      },
      iconFacebook: {
            height: 25
      },
      hamburger: {
            color: theme.text[10],
            padding: 7,
      },
}));