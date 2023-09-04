import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import ViewCounter from './view-counter'
import { getViewsCount } from 'lib/metrics'
import clsx from 'clsx'
import { formatDate } from 'app/utils/time'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
}

export default async function BlogPage() {
	// const allViews = await getViewsCount()

	return (
		<section>
			<h1 className="font-bold text-2xl mb-8 tracking-tighter">writing</h1>
			<div className="mb-16 mt-9">
				Brain dumps, explorations, and how-to guides. I write about different
				topics, such as design system, accessibility, start ups and user/dev
				experience.
			</div>
			{allBlogs
				.sort((a, b) => {
					if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col space-y-1 mb-4 w-full cursor-wait"
						href={`/blog/${post.slug}`}>
						<div
							className={clsx(
								'flex w-full flex-col p-4 -ml-4 gap-2 hover:bg-gradient-to-r from-[#15192D] to-[#27141C] rounded-md hover:ease-linear duration-300 cursor-default h-full bg-[#111010]'
							)}>
							<p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold text-base">
								{post.title}
							</p>
							<span className="text-neutral-400 text-base">{post.summary}</span>
							<time className="text-neutral-400 text-xs">
								{formatDate(post.publishedAt)}
							</time>
							{/* <ViewCounter
								allViews={allViews}
								slug={post.slug}
								trackView={false}
							/> */}
						</div>
					</Link>
				))}
		</section>
	)
}
