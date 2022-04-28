import React from 'react';
import Layout from '@theme/Layout';

export default function Index() {
    return (
          <Layout>
            <div style={{
                backgroundImage:'url(img/arke_background.png)',
                backgroundSize: 'cover'
            }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:'50vh',
                        fontSize: '56px',
                        textAlign:'center',
                        fontWeight:'bold'
                    }}>
                    Optimise your project time.<br/>
                    OpenSource tools to build your apps.
                </div>
                <div style={{textAlign:'center'}}>
                    <a href="/docs/introduction">
                        <button className="button-blue">
                            Get Started
                        </button>
                    </a>
                    <a href="https://github.com/arkemishub" target="_blank">
                        <button>
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </Layout>
    );
}