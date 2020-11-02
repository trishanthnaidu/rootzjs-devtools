import { fade, makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
        root: {
                width: "100%",
                height: "95vh",
                display: "flex",
                flexDirection: "row"
        },
        divider: theme.divider["00"],
        listItem: {
                padding: "2px 10px 4px 30px",
        },
        actionSection: {
                width: 300,
                height: "100%",
                borderRight: `solid 1px ${theme.text[80]}`,
        },
        activeSection: {
                borderRight: `solid 5px ${theme.palette.primary.main}`,
                backgroundColor: theme.text[90],

                "&:hover": {
                        backgroundColor: fade(theme.text[90], 0.25),
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
                paddingLeft: 20,
                lineHeight: "30px",
                fontWeight: "bold",
                color: theme.text[60],
                textTransform: "uppercase",

                "& span": {
                        fontSize: 15
                }
        },
        impactTree: {
                width: "calc(100% - 300px)",

        }
}))