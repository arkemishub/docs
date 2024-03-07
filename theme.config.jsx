import Image from 'next/image'

export default {
    /*banner: {
        key: '2.0-release',
        text: (
            <a href="https://nextra.site" target="_blank">
                🎉 Arke Client 2.0 is released. Read more →
            </a>
        )
    },*/
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: true
    },
    primaryHue: 165,
    primarySaturation: 75,
    project: {
        link: 'https://github.com/arkemishub'
    },
    logo: <Image src="/arke.svg" alt="arke" width={110} height={60} />,
    //faviconGlyph: "/favicon/favicon.ico",
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Arke'
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Arke" />
            <meta property="og:description" content="The Arke Framework Docs" />
            <link
                rel="shortcut icon"
                type="image/x-icon"
                href={"/favicon/favicon.ico"}
            />
            <link
                rel="icon"
                type="image/x-icon"
                sizes="16x16"
                href={"/favicon/favicon-16x16.png"}
            />
            <link
                rel="icon"
                type="image/x-icon"
                sizes="32x32"
                href={"/favicon/favicon-32x32.png"}
            />
        </>
    ),
    darkMode: false,
    footer: {
        text: (
            <span>
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://mokkastudios.com" target="_blank">Mokka Studios S.r.l.</a>
            </span>
        )
    }
}
