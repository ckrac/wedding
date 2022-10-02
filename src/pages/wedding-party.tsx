import type { NextPage } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/wedding-party.module.scss'
import React from 'react'

enum Role {
	M = 'GROOMSMAN',
	F = 'BRIDESMAID',
}

const Hosts = [
	{
		img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fhelen-sloan-hbo-6-1-2000.jpg&w=450&h=302&c=sc&poi=face&q=60',
		name: 'SARAH MILLER',
		role: Role.F,
		description: `Sure, she’s two years older than the bride, but she might as well have been a twin.`,
	},
	{
		img: 'https://i.pinimg.com/originals/0d/31/0c/0d310cd5c53d2b57b92f235687cba7a7.png',
		name: 'WILLIAM BOYD',
		role: Role.M,
		description: `Lax teammate in high school through college. You could say it’s a bromance, but it might be more than that (and Kate’s trying not to be jealous).`,
	},
	{
		img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fhelen-sloan-hbo-6-1-2000.jpg&w=450&h=302&c=sc&poi=face&q=60',
		name: 'SARAH MILLER 1',
		role: Role.F,
		description: `Sure, she’s two years older than the bride, but she might as well have been a twin. but she might as well have been a twin. but she might as well have been a twin. but she might as well have been a twin.`,
	},
	{
		img: 'https://i.pinimg.com/originals/0d/31/0c/0d310cd5c53d2b57b92f235687cba7a7.png',
		name: 'WILLIAM BOYD 2',
		role: Role.M,
		description: `Lax teammate in high school through college. You could say it’s a bromance, but it might be more than that (and Kate’s trying not to be jealous).`,
	},
	{
		img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fhelen-sloan-hbo-6-1-2000.jpg&w=450&h=302&c=sc&poi=face&q=60',
		name: 'SARAH MILLER3',
		role: Role.F,
		description: `Sure, she’s two years older than the bride, but she might as well have been a twin.`,
	},
	{
		img: 'https://i.pinimg.com/originals/0d/31/0c/0d310cd5c53d2b57b92f235687cba7a7.png',
		name: 'WILLIAM BOYD 5',
		role: Role.M,
		description: `Lax teammate in high school through college. You could say it’s a bromance, but it might be more than that (and Kate’s trying not to be jealous).`,
	},
	{
		img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fhelen-sloan-hbo-6-1-2000.jpg&w=450&h=302&c=sc&poi=face&q=60',
		name: 'SARAH MILLER5',
		role: Role.F,
		description: `Sure, she’s two years older than the bride, but she might as well have been a twin.`,
	},
	{
		img: 'https://i.pinimg.com/originals/0d/31/0c/0d310cd5c53d2b57b92f235687cba7a7.png',
		name: 'WILLIAM BOYD 10',
		role: Role.M,
		description: `Lax teammate in high school through college. You could say it’s a bromance, but it might be more than that (and Kate’s trying not to be jealous).`,
	},
]

const WeddingParty: NextPage = () => {
	return (
		<div className='page-container'>
			<div className='page-header'>
				<h1 className='page-title'>Wedding Party</h1>
				<p className='page-description'>
					Meet our family and friends who are walking down the aisle with us.
				</p>
			</div>
			<ul className={cn('card-list', styles['responsive-card-list'])}>
				{Hosts.map(({ name, role, description, img }, i) => (
					<React.Fragment key={name}>
						<li className='card'>
							<img className={styles['img']} src={img} alt={`${name}`} />
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
				))}
			</ul>
		</div>
	)
}

export default WeddingParty
