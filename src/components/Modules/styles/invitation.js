import { fade, makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
        root: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
        },
        container: {
                width: 500,
                padding: 10,
                display: "flex",
                flex: "0.5 1 auto",
                flexDirection: "column",
        },
        designWrapper: {
                margin: 25,
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
        },
        inputWrapper: {
                width: "100%",
                height: 55,
                display: "inline-flex",
                flexDirection: "row",
        },
        input: {
                fontSize: 20,
                marginRight: 7,
                borderRadius: 7,
                flex: "1 1 auto",
                padding: "8px 12px",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                border: `solid 1px ${theme.text[90]}`,
                backgroundColor: fade(theme.background[20], 0.6),
        },
        joinBtn: {
                fontSize: 20,
                borderRadius: 7,
                flex: "0.5 1 auto",
                border: `solid 1px ${theme.background[10]}`,
                color: theme.text[90],
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                textTransform: "capitalize",
                backgroundColor: theme.palette.primary.main,

                "&:hover": {
                        backgroundColor: fade(theme.palette.primary.main, 0.8),
                }
        },
        collaborateImg: {
                width: "90%"
        },
        collaborateText: {
                padding: 20,
                fontSize: 40,
                fontWeight: "300",
                animation: "smoothRollUp 3s ease-out both;",
                color: fade(theme.palette.primary.main, 0.5),
        },
        ReviewText: {
                padding: 20,
                fontSize: 40,
                fontWeight: "300",
                animation: "smoothRollUp 5s ease-out both;",
                color: fade(theme.palette.primary.main, 0.7),
        },
        ImproviseText: {
                padding: 20,
                fontSize: 40,
                fontWeight: "300",
                animation: "smoothRollUp 7s ease-out both;",
                color: fade(theme.palette.primary.main, 1),
        },
        verticalDivider: theme.verticalDivider["00"]
}))