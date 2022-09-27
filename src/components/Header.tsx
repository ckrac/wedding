import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@styles/Header.module.scss'
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
	const [showMobileNavMenu, setShowMobileNavMenu] = useState(false)

	return (
		<header className={styles.header}>
			<button
				onClick={() => setShowMobileNavMenu(!showMobileNavMenu)}
				className={cn(styles['header__menu-btn'], {
					[styles['header__menu-btn--hidden']]: showMobileNavMenu,
				})}
			>
				<span />
			</button>

			<div className={styles['header__wedding-info']}>
				<h5>August 5, 2023</h5>
				<h5>Toronto, ON</h5>
			</div>

			<Link href='/'>
				<h2 className={styles.header__title}>
					<a>Kenneth & Rebecca</a>
				</h2>
			</Link>

			<button
				onClick={() => setShowMobileNavMenu(false)}
				className={cn(styles['header__menu-close-btn'], {
					[styles['header__menu-close-btn--hidden']]: !showMobileNavMenu,
				})}
			/>

			<nav>
				<ul
					className={cn(styles.header__nav, {
						[styles['header__nav--hidden']]: !showMobileNavMenu,
					})}
				>
					{Links.map(({ path, text }) => (
						<li
							key={path}
							className={cn(styles['header__nav-item'], {
								[styles['header__nav-item--active']]: asPath === path,
							})}
							onClick={() => setShowMobileNavMenu(false)}
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
