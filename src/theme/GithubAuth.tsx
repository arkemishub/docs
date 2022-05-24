import React, { ReactNode, useEffect, useState } from "react";
import { Input, Grid, Button, Alert } from "@arke/react-ui";
import { Key } from "react-feather";

interface Props {
  children: ReactNode;
  onLogin?: (username: string, password: string) => void;
  error?: string;
}

export default function GithubAuth(props: Props) {
  const [paToken, setPaToken] = useState<string>("");
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(props.error);
  const { children } = props;

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const localToken = await getPaToken();
    setPaToken(localToken);
    if (
      window.location.href.startsWith("https://arkemishub.github.io/arke-docs")
    ) {
      verifyToken(localToken).then(
        () => {
          setIsAuth(true);
          console.debug("authenticated");
        },
        () => {
          console.debug("not authenticated");
          setIsAuth(false);
        }
      );
    } else {
      setIsAuth(true);
    }
  }

  async function getPaToken() {
    try {
      if (window.localStorage.getItem("githubPagesAuth")) {
        return await JSON.parse(window.localStorage.getItem("githubPagesAuth"));
      } else {
        return "";
      }
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
    verifyToken(paToken).then(
      () => {
        const container = window.parent
          ? window.parent.document
          : window.document;
        container.location.reload();
      },
      () => setErr(`Unauthorized (401)`)
    );
  }

  function verifyToken(paToken: string): Promise<any> {
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
    return new Promise((res, rej) => {
      fetch(request)
        .then((response) => {
          if (response.status !== 200) {
            rej(false);
          } else {
            window.localStorage.setItem(
              "githubPagesAuth",
              JSON.stringify(paToken)
            );
            res(true);
          }
        })
        .catch(() => rej(false))
        .finally(() => setLoading(false));
    });
  }

  return (
    <>
      {!isAuth ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
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
                    style: {
                      textAlign: "center",
                      fontSize: 16,
                      marginLeft: -24,
                    },
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
        </div>
      ) : (
        children
      )}
    </>
  );
}
