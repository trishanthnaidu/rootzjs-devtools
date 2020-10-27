import { makeStyles } from "../components/Matlib";

export const Styles = makeStyles(theme => ({
      root: {
            width: "100vw",
            display: "flex",
            height: "100vh",
            backgroundColor: theme.background[10],
      },
      playgroundMasterContainer: {
            width: "100%",
            display: "flex",
            margin: theme.isMobile ? "75px 10px" : "40px 0 0",
            justifyContent: "center",
            "& h1": {
                  fontSize: 15,
                  fontWeight: "normal",
                  color: theme.text[50],
            }
      },
      oopsSomethingWentWrongContianer: {

      },
}))