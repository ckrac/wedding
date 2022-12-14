import type { InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/wedding-party.module.scss'
import React from 'react'
import { fetchAPI, getStrapiMedia } from '@src/lib/api'

const WeddingParty = ({
	description,
	friends,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Wedding Party</h1>
			<p className='page-description'>{description}</p>
		</div>
		<ul className={cn('card-list', styles['responsive-card-list'])}>
			{friends.map(
				({ id, attributes: { name, role, description, image } }, i) => (
					<React.Fragment key={id}>
						<li className='card'>
							<img
								className={styles['img']}
								src={getStrapiMedia(image)}
								alt={`${name}`}
							/>
							<h3 className='card-title'>{name}</h3>
							<h4 className='card-subtitle'>{role}</h4>
							<p className='card-description'>{description}</p>
						</li>
						{i % 2 === 0 && (
							<li
								className='separator'
								aria-hidden='true'
								role='presentation'
							/>
						)}
					</React.Fragment>
				)
			)}
		</ul>
	</div>
)

export async function getStaticProps() {
	const [friendsRes, pageRes] = await Promise.all([
		fetchAPI('/friends', { populate: '*', ['sort[0]']: 'order:desc' }),
		fetchAPI('/page', { ['fields[0]']: 'weddingPartyDescription' }),
	])

	return {
		props: {
			friends: friendsRes.data as {
				id: number
				attributes: {
					name: string
					description: string
					role: string
					image: {
						data: {}
					}
				}
			}[],
			description: pageRes.data.attributes.weddingPartyDescription,
		},
		revalidate: 1,
	}
}

export default WeddingParty
