import { fade, makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
        root: {
                width: "100%",
                height: "93vh",
                display: "flex",
                marginTop: "2vh",
                flexDirection: "row"
        },
        divider: theme.divider["00"],
        listItem: {
                padding: "2px 10px 4px 20px",
        },
        actionSection: {
                width: 300,
                height: "100%",
                borderRight: `solid 1px ${theme.text[80]}`,
        },
        activeSection: {
                borderRight: `solid 5px ${theme.palette.primary.main}`,
                backgroundColor: fade(theme.palette.primary.main, 0.075),

                "&:hover": {
                        backgroundColor: fade(theme.palette.primary.main, 0.075)
                },
                "& span": {
                        color: theme.text[10],
                }
        },
        sectionText: {
                color: theme.text[40],

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