import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'
import cn from 'classnames'

const Links = [
	{ path: '/', text: 'HOME' },
	{ path: '/schedule', text: 'SCHEDULE' },
	{ path: '/wedding-party', text: 'WEDDING PARTY' },
	{ path: '/photos', text: 'PHOTOS' },
	{ path: '/things-to-do', text: 'THINGS TO DO' },
	{ path: '/faqs', text: 'FAQS' },
]

const Header = () => {
	const { asPath } = useRouter()

	return (
		<header className={styles.header}>
			<div className={styles['header__wedding-info']}>
				<h5>August 5, 2023</h5>
				<h5>Toronto, ON</h5>
			</div>

			<Link href='/'>
				<h2 className={styles.header__title}>
					<a>Kenneth & Rebecca</a>
				</h2>
			</Link>
			<nav>
				<ul className={styles.header__nav}>
					{Links.map(({ path, text }) => (
						<li
							key={path}
							className={cn(styles['header__nav-item'], {
								[styles['header__nav-item--active']]: asPath === path,
							})}
						>
							<Link href={path}>
								<a>{text}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
