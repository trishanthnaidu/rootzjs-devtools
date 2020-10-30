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
                border: `solid 1px ${theme.text[80]}`,
                backgroundColor: fade(theme.background[20], 0.6),
        },
        copyBtn: {
                margin: "10px 0",
                padding: "6px 10px",
                color: theme.text[10],
                textTransform: "capitalize",
                backgroundColor: theme.palette.secondary.main,

                "&:hover": {
                        backgroundColor: fade(theme.palette.secondary.main, 0.8),
                }
        },
        copiedBtn: {
                margin: "10px 0",
                padding: "6px 10px",
                color: theme.text[10],
                textTransform: "capitalize",
                backgroundColor: "#479030",

                "&:hover": {
                        backgroundColor: fade("#479030", 0.8),
                }
        },
        codeLine: {
                marginLeft: 35,
        },
        braces: {
                color: "#ABB2BF"
        },
        key: {
                color: "#E06C75"
        },
        operator: {
                color: "#5EA8E6"
        },
        string: {
                color: "#98C379"
        },
        note: {
                marginTop: 20,
                color: theme.text[50]
        },
        variable: {
                color: "#D19A66"
        },
        dataType: {
                color: "#C678DD"
        },
        comments: {
                color: "#5C6371",
                fontStyle: "italic"
        },
        equals: {
                color: "#56B6C2"
        },
        comp: {
                color: "#E5C07B"
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
                margin: "20px 0 5px",
                color: theme.text[40],

                "&:first-child": {
                        marginTop: 0
                }
        },
        notation: {
                color: theme.text[50],
                fontStyle: "italic"
        },
        inputBase: {
                top: 0,
                position: "absolute",
        }
}))