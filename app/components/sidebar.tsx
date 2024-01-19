'use client'

import { GithubIcon, Twitter } from 'lucide-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'

import { config } from '../constant'
import { Button } from './ui/button'
import React from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/app/components/ui/tooltip'

const navItems = {
	'/': {
		name: 'home',
	},
	'/blog': {
		name: 'writing',
	},
	'/guestbook': {
		name: 'guestbook',
	},
	'/resume.pdf': {
		name: 'resume',
	},
}

const SOCIAL_LINKS = [
	{
		href: config.github,
		icon: GithubIcon,
		alt: 'github',
	},
	{
		href: config.twitter,
		icon: Twitter,
		alt: 'twitter',
	},
]

export default function Navbar() {
	const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)

	let pathname = usePathname() || '/'
	if (pathname.includes('/blog/')) {
		pathname = '/blog'
	}

	const hoverStyle = {
		backgroundImage:
			'linear-gradient(25deg, #FA3CF9 1.7%, #FC587E 50.85%, #FC3239 99.99%)',
		color: 'hsla(261, 98.7%, 3.0%, 0.918)',
	}

	return (
		<TooltipProvider delayDuration={0}>
			<aside className="-ml-[8px] mb-16 tracking-tight">
				<div className="lg:sticky lg:top-20">
					<LayoutGroup>
						<nav
							className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
							id="nav">
							<div className="flex flex-row space-x-0 pr-10">
								{Object.entries(navItems).map(([path, { name }]) => {
									const isActive = path === pathname
									return (
										<Link
											key={path}
											href={path}
											className={clsx(
												'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
												{
													'text-neutral-500': !isActive,
												}
											)}>
											<span className="relative py-1 px-2">
												{name}
												{path === pathname ? (
													<motion.div
														className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
														layoutId="sidebar"
														transition={{
															type: 'spring',
															stiffness: 350,
															damping: 30,
														}}
													/>
												) : null}
											</span>
										</Link>
									)
								})}
							</div>

							<div className="flex items-center gap-4">
								{SOCIAL_LINKS.map((link) => (
									<Tooltip key={link.href}>
										<TooltipTrigger asChild>
											<Button
												style={hoveredLink === link.href ? hoverStyle : {}}
												onMouseEnter={() => setHoveredLink(link.href)}
												onMouseLeave={() => setHoveredLink(null)}
												size="icon"
												className="bg-transparent text-slate-200 ">
												<a
													key={link.href}
													href={link.href}
													target="_blank"
													rel="noopener noreferrer">
													<link.icon className="h-[1.2rem] w-[1.2rem]" />
												</a>
											</Button>
										</TooltipTrigger>
										<TooltipContent side="bottom">
											<p>{link.alt}</p>
										</TooltipContent>
									</Tooltip>
								))}
							</div>
						</nav>
					</LayoutGroup>
				</div>
			</aside>
		</TooltipProvider>
	)
}
