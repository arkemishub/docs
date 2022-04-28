import React, { ReactNode, useEffect, useState } from "react";
import { Input, Grid, Button, Alert } from "@arke/react-ui";
import { Key } from "react-feather";

interface Props {
  children: ReactNode;
  onLogin?: (username: string, password: string) => void;
  error?: string;
}

export default function Auth(props: Props) {
  const [paToken, setPaToken] = useState<string>(getPaToken());
  const [isAuth, setIsAuth] = useState(!!paToken);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(props.error);
  const { children } = props;

  function getPaToken() {
    try {
      return JSON.parse(window.localStorage.getItem("githubPagesAuth") || "");
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  function handleOnLogin() {
    if (!paToken) {
      setErr("Inserire il Personal Access Token");
    } else {
      setLoading(true);
      onLogin(paToken);
    }
  }

  const org = "arkemishub";
  const repo = "arke-docs";
  function onLogin(paToken: string) {
    const request = new Request(
      `https://api.github.com/repos/${org}/${repo}/branches`,
      {
        method: "GET",
        credentials: "omit",
        headers: {
          Accept: "application/json",
          Authorization: `token ${paToken}`,
        },
      }
    );

    fetch(request)
      .then((response) => {
        if (response.status !== 200) {
          setErr(`Unauthorized (${response.status})`);
        } else {
          window.localStorage.setItem(
            "githubPagesAuth",
            JSON.stringify(paToken)
          );
          setIsAuth(true);
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {!isAuth ? (
        <div
          style={{
            margin: "auto",
            height: "100vh",
            maxWidth: 420,
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container style={{ minWidth: 340 }}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Input
                id="pa-token"
                value={paToken}
                onChange={(e) => setPaToken(e.target.value)}
                placeholder="Personal Access Token"
                style={{
                  marginTop: 20,
                  width: "100%",
                }}
                fullWidth
                startIcon={<Key size={16} style={{ color: "#fff" }} />}
                inputProps={{
                  style: { textAlign: "center", fontSize: 16, marginLeft: -24 },
                }}
              />
              <br />
              {err && (
                <>
                  <Alert severity="warning" style={{ width: "100%" }}>
                    {err}
                  </Alert>
                  <br />
                </>
              )}
              <Button
                onClick={handleOnLogin}
                variant="contained"
                color="secondary"
                loading={loading}
                style={{ width: "100%", fontSize: 16 }}
                data-testid="submit"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        children
      )}
    </>
  );
}
