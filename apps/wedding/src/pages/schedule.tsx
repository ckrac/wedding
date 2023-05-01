import React from 'react'
import cn from 'classnames'
import styles from '@styles/pages/schedule.module.scss'

const itineraries = [
	{
		title: 'WELCOME DRINKS',
		description:
			'There will be a few light bites in addition to cocktails. Can’t wait to see you!',
		date: 'SATURDAY, SEPTEMBER, 2023',
		time: '4:30 PM',
		streetAddress: '75 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps/place/75+E+Liberty+St,+Toronto,+ON+M6K+3R3/data=!4m2!3m1!1s0x882b35035a5d382f:0x886bed28e8ebb928?sa=X&ved=2ahUKEwipwYbPzdT-AhWWl2oFHdZHA6gQ8gF6BAgYEAI',
	},
	{
		title: 'CEREMONY',
		description:
			'Join us for our heartfelt ceremony where we will exchange vows.',
		date: 'SATURDAY, SEPTEMBER, 2023',
		time: '5:30 PM',
		streetAddress: '75 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps/place/75+E+Liberty+St,+Toronto,+ON+M6K+3R3/data=!4m2!3m1!1s0x882b35035a5d382f:0x886bed28e8ebb928?sa=X&ved=2ahUKEwipwYbPzdT-AhWWl2oFHdZHA6gQ8gF6BAgYEAI',
	},
	{
		title: 'RECEPTION',
		description: `Dinner, drinks and dancing to follow our ceremony! There's an outdoor space that can get a little chilly at night—we recommend bringing a shawl or light jacket.`,
		date: 'SATURDAY, SEPTEMBER, 2023',
		time: '6:00 - 11:00 PM',
		streetAddress: '75 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps/place/75+E+Liberty+St,+Toronto,+ON+M6K+3R3/data=!4m2!3m1!1s0x882b35035a5d382f:0x886bed28e8ebb928?sa=X&ved=2ahUKEwipwYbPzdT-AhWWl2oFHdZHA6gQ8gF6BAgYEAI',
	},
]

function onMapClick(link: string) {
	window?.open(link, '_blank')
}

const Schedule = () => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Schedule</h1>
			<p className='page-description'>
				Here's what to expect during our wedding. We can't wait to celebrate
				with you!
			</p>
		</div>

		<ol className={cn('card-list', styles['responsive-card-list'])}>
			{itineraries.map(
				(
					{
						title,
						description,
						time,
						date,
						streetAddress,
						cityProvinceZIPCodeAddress,
						mapLink,
					},
					index
				) => (
					<li key={index} className='card'>
						<div className='card-header'>
							<h2 className='card-title'>{title}</h2>
							<p className='card-subtitle'>{date}</p>
							<p className='card-subtitle'>{time}</p>
						</div>
						<div className='card-content'>
							<address className='card-description'>
								{streetAddress}
								<br />
								{cityProvinceZIPCodeAddress}
							</address>
							<p className='card-description'>{description}</p>
							<button
								className='primary-button'
								onClick={() => onMapClick(mapLink)}
							>
								MAP
							</button>
						</div>
					</li>
				)
			)}
		</ol>
	</div>
)

export default Schedule
