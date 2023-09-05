import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link'
import ViewCounter from './blog/view-counter'
import { getViewsCount } from 'lib/metrics'
import { formatDate } from './utils/time'
import { useState } from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { ProjectInfo, projectInfo, workExperienceInfo } from './constant'
import clsx from 'clsx'

const ProjectSection = ({
	projectInfo,
	heading,
}: {
	projectInfo: ProjectInfo[]
	heading: string
}) => {
	return (
		<div className="mt-16">
			<h3 className="mb-8 font-bold text-xl text-neutral-200">{heading}</h3>

			<li className="flex gap-10 justify-between flex-wrap">
				{projectInfo.map(({ title, details, year, link, tech }) => (
					<div className="md:flex justify-between w-full">
						<span className="text-neutral-400 text-base min-w-[30%]">
							{year}
						</span>
						<div className="flex flex-col gap-3">
							<a href={link} target="_blank" className="hover:underline">
								<div className="flex items-center gap-2">
									<span className="text-gray-200">{title}</span>
									<ExternalLinkIcon />
								</div>
							</a>
							<div className="text-neutral-400 text-base">{details}</div>
							<div>
								{tech.map((tech) => (
									<span className="mr-2 text-xs bg-[#201E20] p-2 rounded text-neutral-300">
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-6 flex-wrap">
								{projectInfo[0].imagesLinks.map((imageLink) => (
									<img src={imageLink} className="w-1/4 rounded opacity-70" />
								))}
							</div>
						</div>
					</div>
				))}
			</li>
		</div>
	)
}

const WorkExperienceSection = () => {
	return (
		<div className="mt-16">
			<h3 className="mb-8 font-bold text-xl text-neutral-200">
				{'Work Experience 🧑‍💻'}
			</h3>

			<li className="flex gap-10 justify-between flex-wrap">
				{workExperienceInfo.map(({ companyLink, companyName, role, year }) => (
					<div className="md:flex w-full">
						<span className="text-neutral-400 text-base min-w-[30%]">
							{year}
						</span>
						<div className="flex flex-col gap-3">
							<a href={companyLink} target="_blank" className="hover:underline">
								<div className="flex items-center gap-2">
									<span className="text-gray-200">{role}</span>
									<ExternalLinkIcon />
								</div>
							</a>
							<div className="text-neutral-400 text-base">{companyName}</div>
						</div>
					</div>
				))}
			</li>
		</div>
	)
}

const ProductionProjectSection = () => {
	return <ProjectSection projectInfo={projectInfo} heading={'Project 🗃️'} />
}

const SideProjectSection = () => {
	return (
		<ProjectSection projectInfo={projectInfo} heading={'Side Project 🗃️'} />
	)
}

export default async function Page() {
	// const allViews = await getViewsCount()
	// const headingGradient =
	// 	'bg-gradient-to-r from-red-200 to-yellow-200 bg-clip-text text-transparent'
	// const borderGradient =
	// 	'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'

	return (
		<section>
			<h1
				className={clsx(
					`font-bold text-2xl mb-8 tracking-tighter`,
					'bg-gradient-to-r from-red-200 to-yellow-200 bg-clip-text text-transparent'
				)}>
				hey, I'm Tarun 👋
			</h1>
			<p className="prose prose-neutral dark:prose-invert">
				{`I'm a Frontend developer based in India. I'm interested in frontend, design systems, web3, user/dev experience and under engineering.`}
				<br />
				<br />
				{`I'm currently working at `}
				<a href="https://www.divaprotocol.io/" target="_blank">
					Diva Protocol
				</a>
				{` as a Frontend developer ,where we're building a decentralized protocol for derivatives product.`}
			</p>

			<div className="mt-16">
				<h3 className="mb-8 font-bold text-xl text-neutral-200">Writing 📚</h3>

				<li className="flex gap-3 md:gap-6 flex-wrap md:-ml-4">
					{allBlogs
						.sort((a, b) => {
							if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
								return -1
							}
							return 1
						})
						.slice(0, 3)
						.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`}>
								<div
									className={clsx(
										'rounded-md p-[0.5px] flex flex-col justify-center items-center w-full md:w-auto min-h-full'
									)}>
									<div
										className={clsx(
											'flex flex-col justify-start items-stretch border border-transparent min-h-[128px] w-full md:w-[188px] gap-2 py-6 px-4 hover:bg-gradient-to-r from-[#15192D] to-[#27141C] rounded-md hover:ease-linear duration-300 cursor-default h-full bg-[#111010]'
										)}>
										<span className="text-base font-bold text-neutral-300">
											{post.smallTitle}
										</span>
										<span className="text-neutral-400 text-sm">
											{post.summary}
										</span>
										<time className="text-neutral-400 text-xs">
											{formatDate(post.publishedAt)}
										</time>
									</div>
								</div>
							</Link>
						))}
				</li>
			</div>

			<ProductionProjectSection />
			<SideProjectSection />
			<WorkExperienceSection />
		</section>
	)
}

// bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
