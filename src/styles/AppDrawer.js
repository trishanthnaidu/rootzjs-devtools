import { fade, makeStyles } from '../components/Matlib';

const drawerWidth = 220;
const drawerWidthMobile = "75%";

export const Styles = makeStyles(theme => ({
      root: {
            display: 'flex',
            width: theme.isMobile ? 0 : 260
      },
      toolbar: {
            minHeight: 50
      },
      divider: {
            flexShrink: 0,
            backgroundImage: `linear-gradient(to right, ${theme.background[10]}, ${fade(theme.text[20], 0.12)}, ${theme.background[10]})`
      },
      dividerMain: {
            flexShrink: 0,
            backgroundColor: theme.text[70]
      },
      drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.text[90],
            color: theme.text[10],
            borderRight: "none",
      },
      drawerPaperMobile: {
            width: drawerWidthMobile,
            backgroundColor: theme.background[10],
            color: theme.text[10],
            border: "none",
      },
      icons: {
            color: theme.text[30],
            minWidth: 40
      },
      iconSvg: {
            width: 40,
            fontSize: 20,
      },
      iconRemove: {
            fontSize: 11
      },
      listItem: {
            padding: "4px 0 4px 24px",
      },
      activeSection: {
            backgroundColor: fade(theme.palette.primary.main, 0.175),
            "&:hover": {
                  backgroundColor: fade(theme.palette.primary.main, 0.175)
            },
            "& svg": {
                  fill: theme.palette.primary.main
            },
            "& span": {
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
            }
      },
      sectionText: {
            color: theme.palette.primary.main,

            "& span": {
                  fontSize: 15
            }
      },
      sectionTextHeader: {
            paddingLeft: 24,
            margin: "15px 0 0",
            lineHeight: "30px",
            fontWeight: "bold",
            color: theme.text[60],
            textTransform: "uppercase",

            "& span": {
                  fontSize: 15
            }
      },
      listItemLabelButton: {
            cursor: "pointer",
            color: theme.palette.primary.main,
            paddingLeft: 11
      },
      listSubHeader: {
            color: theme.text[50],
            fontSize: theme.typography.body1.fontSize
      },
      addIconButton: {
            textTransform: "Capitalize",
            color: theme.palette.primary.main,
            padding: 7
      },
      addDynamicName: {
            fontSize: 14,
            color: theme.text[10]
      },
      buttonRemove: {
            padding: 5,
            minWidth: "auto"
      },
      logoContainer: {
            display: "inline-flex",
            alignItems: "center",
            flex: 1
      },
      closeContainer: {
            display: "inline-flex",
            alignItems: "center"
      },
      iconContainer: {
            padding: "2px 0 1px 0",
            color: theme.text[10],
      },
      title: {
            display: "inline-flex",
            fontSize: 17,
            color: theme.palette.secondary.main,
            marginLeft: 10,
            fontWeight: 400,
            alignItems: "center"
      },
      titleMobileExtraCss: {
            flex: 1
      },
      logo: {
            height: theme.isMobile ? 35 :20,
            display: 'inline-flex',

            "& svg": {
                  color: theme.text[50],
            }
      },
      logoSectionDrawer: {
            display: "flex",
            padding: "5px 15px"
      },
      rotateIcon90deg: {
            transform: "rotate(135deg)"
      },
      drawerFooter: {
            flex: 0,
            display: "flex",
            marginBottom: 25
      },
      drawerBody: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
      },
      drawerMobileContainer: {
            height: "100%",
            display: "flex",
            flexDirection: "column"
      }
}));