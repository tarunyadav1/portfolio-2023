export const config = {
    twitter: 'https://twitter.com/tarunyadav9761',
    github: "https://github.com/tarunyadav1",
    linkedin: "https://www.linkedin.com/in/tarunyadav9761/",
}

// make an type for the project info
export type ProjectInfo = {
    year: string
    title: string
    details: string
    tech: string[]
    imagesLinks: string[]
    link: string
}

export const projectInfo: ProjectInfo[] = [
    {
        year: '2022',
        title: 'Cross-Chain Swap',
        details:
            'The ZetaLabs Swap App uses the simplicity and power of ZetaChain’s native value transfer — with no bridging, wrapping, or locking of assets — to achieve any-to-any token/chain trades.',
        tech: ['Next.js', 'TailwindCSS', "Sentry", 'RainbowKit', 'EtherJs', 'NextAuth.js'],
        imagesLinks: [
            // '/images/projects/diva-website-1.png',
            // '/images/projects/diva-website-2.png',
            // '/images/projects/diva-website-3.png',
        ],
        link: 'https://labs.zetachain.com/swap',
    },
    {
        year: '2022',
        title: 'ZetaChain Explore',
        details:
            'ZetaChain maintained explorer. You can view recent ZetaChain transactions and track the status of cross-chain transactions end- to-end.',
        tech: ['Next.js', 'Tailwind CSS', 'Emotion'],
        imagesLinks: [
            // '/images/projects/zeta-explore-1.png',
            // '/images/projects/zeta-explore-2.png',
            // '/images/projects/zeta-explore-3.png',
        ],
        link: 'https://explorer.zetachain.com/',
    },
    {
        year: '2023',
        title: 'Diva Protocol website',
        details: 'A website for the Diva Protocol. Built with React, Redux Toolkit, Chakra UI, EtherJS, rainbowkit, wagmi hooks.',
        tech: ['React', 'Redux Toolkit', 'Chakra ui', 'EtherJS', 'rainbowkit', 'wagmi hooks'],
        imagesLinks: [],
        link: 'https://www.divaprotocol.io/',
    }
]

export const sideProjectsInfo: ProjectInfo[] = [
    {
        year: '2021',
        title: 'Project 1',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        tech: ['React', 'Next.js', 'Tailwind CSS'],
        imagesLinks: [
            // '/images/projects/diva-website-1.png',
            // '/images/projects/diva-website-2.png',
            // '/images/projects/diva-website-3.png',
        ],
        link: 'https://www.google.com',
    },
]

export const workExperienceInfo = [
    {
        companyName: 'Diva Protocol',
        companyLink: 'https://www.divaprotocol.io/',
        role: 'Frontend Developer',
        year: '2021 - Present',
    },
    {
        companyName: 'Diva Protocol',
        companyLink: 'https://www.divaprotocol.io/',
        role: 'Frontend Developer',
        year: '2021 - Present',
    },
]