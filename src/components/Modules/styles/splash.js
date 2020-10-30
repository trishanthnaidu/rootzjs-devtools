import { makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
        root: {
                flex: 0.5,
        },
        playgroundMasterContainer: {
                width: "100%",
                display: "flex",
                margin: theme.isMobile ? "75px 10px" : "48px 0 0",
                justifyContent: "center",
                "& h1": {
                        fontSize: 15,
                        fontWeight: "normal",
                        color: theme.text[50],
                }
        },
        heading:{
                fontSize: 25,
                display: "flex",
                margin: "50px 0 40px",
                color: theme.text[50],
                justifyContent: "center",
        },
        appBar: {
                borderRadius: 4,
                boxShadow: "none",
                backgroundColor: theme.background[30],
        },
        tabs: {
                height: 35,
                minHeight: 35,
                color: theme.text[50],
                textTransform: "Capitalize",
                backgroundColor: theme.background[30],
        },
        tabsRoot: {
                minHeight: 35,
                borderRadius: 4
        },
        tabsSelected: {
                color: `${theme.text[10]} !important`
        }
}))