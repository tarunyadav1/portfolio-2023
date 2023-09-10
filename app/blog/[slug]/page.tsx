import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import { getTweets } from 'lib/twitter'
import Balancer from 'react-wrap-balancer'
import ViewCounter from '../view-counter'
import { getViewsCount } from 'lib/metrics'
import { formatDate } from 'app/utils/time'

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	const post = allBlogs.find((post) => post.slug === params.slug)
	if (!post) {
		return
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
		slug,
	} = post
	const ogImage = image
		? `https://tarunyadav.xyz${image}`
		: `https://tarunyadav.xyz/og?title=${title}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://tarunyadav.xyz/blog/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default async function Blog({ params }) {
	const post = allBlogs.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const [allViews] = await Promise.all([getViewsCount()])

	return (
		<section>
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(post.structuredData)}
			</script>
			<h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
				<Balancer>{post.title}</Balancer>
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{formatDate(post.publishedAt)}
				</p>
				<ViewCounter allViews={allViews} slug={post.slug} trackView />
			</div>
			<Mdx code={post.body.code} />
		</section>
	)
}
