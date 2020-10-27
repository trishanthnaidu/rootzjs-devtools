import { makeStyles } from "../../Matlib";

export const Styles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "93vh",
        display: "flex",
        marginTop: "2vh",
        flexDirection: "column"
    },
    divider: theme.divider["00"],
    pageDivider: {
        ...theme.divider["00"],
        backgroundColor: theme.text[70]
    },
    paper: {
        display: "flex",
        alignItems: "center",
        margin: "25px 10px 20px",
        height: theme.isMobile ? 40 : 150,
        backgroundColor: theme.background[20],
        width: theme.isMobile ? "90vw" : "70vw",
    },
    card: {
        padding: 10,
        display: "flex",
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "20px 10px 0 10px",
        justifyContent: "flex-start",
        backgroundColor: theme.background["00"],
    },
    avatarTAR: {
        height: theme.isMobile ? 30 : 100,
        width: theme.isMobile ? 30 : 100,
        marginLeft: theme.isMobile ? 5 : 7
    },
    title: {
        fontWeight: "bold",
        color: theme.text[20],
        fontSize: theme.isMobile ? 10 : 24,
        margin: theme.isMobile ? 10 : "20px 20px 7px",
    },
    cardTitle: {
        fontWeight: "bold",
        color: theme.text[20],
        fontSize: theme.isMobile ? 10 : 20,
    },
    subTitle: {
        color: theme.text[30],
        fontSize: theme.isMobile ? 10 : 17,
        margin: theme.isMobile ? 10 : "0 20px 10px",
    },
    cardContainer: {
        width: "100%"
    },
    paperContainer: {
        width: "100%"
    },
    headerContianer: {
        flex: 1,
        display: "flex",
    },
    titleContianer: {
        display: "inline-flex",
    },
    subscribeContainer: {
        margin: "5px 30px",
    },
    subscribeBtn: {

    },
    cardHeaderContainer: {
        width: "100%",
        padding: "5px 20px 15px",
        alignItems: "center",
        display: "inline-flex",
    },
    cardBodyContainer: {
        padding: 20,
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",

        "& div:first-child": {
            marginLeft: 0
        },
        "& div:last-child": {
            marginRight: 0
        },
    },
    moreBtn: {
        height: 35,
        textTransform: "Capitalize",
        color: theme.palette.primary.main,
    },
    void: {
        height: 10
    },
    storyCard: {
        width: 300,
        borderRadius: 10,
        margin: "5px 10px",
        color: theme.text[30],
        backgroundColor: theme.background[10],

        "& p": {
            color: theme.text[40]
        }
    },
    locationContainer: {
        display: "inline-flex",
        alignItems: "center",

        "& svg": {
            fontSize: 15,
            marginRight: 5,
            color: theme.text[40],
        }
    },
    showcaseContainer: {
        overflowY: "auto"
    },
    titleDesc: {
        flex: 1,
        height: 18,
        fontSize: 15,
        display: "flex",
        margin: "0 7px",
        color: theme.text[40],
    }
}))