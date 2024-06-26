import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { signOut } from "lib/api/auth";

import { AuthContext } from "App";

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none"
  }
}));

const Header: React.FC = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const classes = useStyles();
  const histroy = useHistory();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();

      if (res.status === 200) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        histroy.push("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color="inherit"
            className={classes.linkBtn}
            onClick={handleSignOut}
          >
            サインアウト
          </Button>
        )
      } else {
        return (
          <Button
            component={Link}
            to="/signin"
            color="inherit"
            className={classes.linkBtn}
          >
            サインイン
          </Button>
        )
      }
    } else {
      return <></>
    }
  };

  const MypageButton = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            component={Link}
            to="/mypage"
            color="inherit"
            className={classes.linkBtn}
          >
            マイページ
          </Button>
        )
      } else {
        return <></>
      }
    } else {
      return <></>
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            Poker Learning
          </Typography>
          <Button
            component={Link}
            to="/"
            color="inherit"
            className={classes.linkBtn}
          >
            ホーム
          </Button>
          <MypageButton />
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;