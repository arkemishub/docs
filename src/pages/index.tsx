import React from "react";
import Layout from "@theme/Layout";

export default function Index() {
  return (
    <Layout>
      <div
        style={{
          backgroundImage: "url(img/arke_background.png)",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "56px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Optimise your project time.
          <br />
          OpenSource tools to build your apps.
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/arke-docs/docs/introduction">
            <button
              style={{
                border: "1px solid #fff",
                borderRadius: 4,
                minWidth: 200,
                height: 60,
                fontSize: 24,
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
