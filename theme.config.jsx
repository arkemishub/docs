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
    project: {
        link: 'https://github.com/arkemishub'
    },
    logo: <Image src="/arke.svg" alt="arke" width={110} height={60} />,
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
