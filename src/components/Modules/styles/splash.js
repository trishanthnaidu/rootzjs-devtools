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
                margin: "25px 0",
                color: theme.palette.primary.main,
                justifyContent: "center",
        },
        appBar: {
                borderRadius: 4,
                boxShadow: "none",
                backgroundColor: "transparent",
        },
        tabs: {
                height: 40,
                fontSize: 17,
                minHeight: 35,
                fontWeight: 400,
                marginBottom: 15,
                color: theme.text[50],
                textTransform: "Capitalize",
                backgroundColor: theme.background[30],
        },
        tabsRoot: {
                minHeight: 35,
                borderRadius: 4
        },
        tabsSelected: {
                color: `${theme.text[30]} !important`,
                backgroundColor: theme.background["00"],
        }
}))