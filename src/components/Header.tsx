import React from 'react'
import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<div>
				<h5>August 5, 2023</h5>
				<h5>Toronto, ON</h5>
			</div>
			<Link href='/'>
				<h2>
					<a>Kenneth & Rebecca</a>
				</h2>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/schedule'>
							<a>SCHEDULE</a>
						</Link>
					</li>
					<li>
						<Link href='/travel'>
							<a>TRAVEL</a>
						</Link>
					</li>
					<li>
						<Link href='/registry'>
							<a>REGISTRY</a>
						</Link>
					</li>
					<li>
						<Link href='/wedding-party'>
							<a>WEDDING PARTY</a>
						</Link>
					</li>
					<li>
						<Link href='/photos'>
							<a>PHOTOS</a>
						</Link>
					</li>
					<li>
						<Link href='/things-to-do'>
							<a>THINGS TO DO</a>
						</Link>
					</li>
					<li>
						<Link href='/faqs'>
							<a>FAQS</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
