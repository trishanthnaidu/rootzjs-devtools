import { fade, makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
        root: {
                width: "100%",
        },
        configContainer: {
                width: "75%",
                borderRadius: 7,
                fontFamily: "menlo",
                padding: "8px 12px",
                border: `solid 1px ${theme.text[90]}`,
                backgroundColor: fade(theme.background[20], 0.6),
        },
        copyBtn: {
                margin: "10px 0",
                padding: "6px 10px",
                color: theme.text[90],
                textTransform: "capitalize",
                backgroundColor: theme.palette.primary.main,

                "&:hover": {
                        backgroundColor: fade(theme.palette.primary.main, 0.8),
                }
        },
        copiedBtn: {
                margin: "10px 0",
                padding: "6px 10px",
                color: "#31636E",
                textTransform: "capitalize",
                backgroundColor: "#BFE0D6",

                "&:hover": {
                        backgroundColor: "#BFE0D6",
                }
        },
        codeLine: {
                marginLeft: 35,
        },
        braces: {
                color: "#767C88"
        },
        key: {
                color: "#E45649"
        },
        operator: {
                color: "#4078F2"
        },
        string: {
                color: "#50A14F"
        },
        note: {
                marginTop: 20,
                color: theme.text[50]
        },
        variable: {
                color: "#986801"
        },
        dataType: {
                color: "#A626A4"
        },
        comments: {
                color: "#B9BFCC",
                fontStyle: "italic"
        },
        equals: {
                color: "#0084BC"
        },
        comp: {
                color: "#C18402"
        },
        nextLine: {
                margin: "25px 0"
        },
        setupLink: {
                cursor: "pointer",
                color: theme.text[20],
                textDecoration: "underline",

                "&:hover": {
                        color: theme.text[30],
                }
        },
        contentPoints: {
                margin: "25px 0 5px",
                color: theme.text[20],

                "&:first-child": {
                        marginTop: 0
                }
        },
        notation: {
                color: theme.text[40],
                fontStyle: "italic"
        },
        inputBase: {
                top: 0,
                position: "absolute",
        }
}))