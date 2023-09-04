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
        tech: ['React', 'Next.js', 'TailwindCSS', "Sentry", 'RainbowKit', 'EtherJs'],
        imagesLinks: [
            '/images/projects/diva-website-1.png',
            '/images/projects/diva-website-2.png',
            '/images/projects/diva-website-3.png',
        ],
        link: 'https://www.google.com',
    },
    {
        year: '2020',
        title: 'Project 1',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        tech: ['React', 'Next.js', 'Tailwind CSS'],
        imagesLinks: [
            '/images/projects/diva-website-1.png',
            '/images/projects/diva-website-2.png',
            '/images/projects/diva-website-3.png',
        ],
        link: 'https://www.google.com',
    },
]

export const sideProjectsInfo: ProjectInfo[] = [
    {
        year: '2021',
        title: 'Project 1',
        details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        tech: ['React', 'Next.js', 'Tailwind CSS'],
        imagesLinks: [
            '/images/projects/diva-website-1.png',
            '/images/projects/diva-website-2.png',
            '/images/projects/diva-website-3.png',
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