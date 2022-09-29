import React from 'react'
import type { NextPage } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/schedule.module.scss'

const Schedules = [
	{
		event: 'WELCOME DRINKS',
		date: 'FRIDAY, JUNE 7, 2019',
		time: '9:00 PM',
		address: ['Fairmont', '950 Mason St', 'San Francisco, CA 94108'],
		description: `There will be a few light bites in addition to cocktails. Can’t wait to see you!`,
	},
	{
		event: 'CEREMONY',
		date: 'SATURDAY, JUNE 8, 2019',
		time: '5:30 PM',
		address: [
			'Palace of Fine Arts Theatre',
			'3301 Lyon Street',
			`San Francisco, CA 94123`,
		],
		description: `The grass can be a little soft, so you might want to rethink stilettos!`,
	},
	{
		event: 'RECEPTION',
		date: 'SATURDAY, JUNE 8, 2019',
		time: '7:00 PM - 11:00 PM',
		address: [
			'Palace of Fine Arts Theatre',
			'3301 Lyon Street',
			`San Francisco, CA 94123`,
		],
		description: `Dinner, drinks and dancing to follow our ceremony! There's an outdoor space that can get a little chilly at night—we recommend bringing a shawl or light jacket.`,
	},
	{
		event: 'BRUNCH',
		date: 'SATURDAY, JUNE 8, 2019',
		time: '10:00 AM - 12:00 PM',
		address: [
			'Palace of Fine Arts Theatre',
			'3301 Lyon Street',
			`San Francisco, CA 94123`,
		],
		description: `A final gathering before we all head home.`,
	},
]

const Schedule: NextPage = () => {
	return (
		<div className='page-container'>
			<div className='page-header'>
				<h1 className='page-title'>Schedule</h1>
				<p className='page-description'>
					Here's what to expect during our wedding weekend. There will also be a
					printout of this schedule available in your hotel rooms. We can't wait
					to celebrate with you!
				</p>
			</div>

			<ol className={cn('card-list', styles['responsive-card-list'])}>
				{Schedules.map(({ event, date, time, address, description }) => (
					<li key={event} className='card'>
						<div className='card-header'>
							<h2 className='card-title'>{event}</h2>
							<p className='card-subtitle'>{date}</p>
							<p className='card-subtitle'>{time}</p>
						</div>
						<div className='card-content'>
							<address className='card-description'>
								{address.map((a) => (
									<React.Fragment key={a}>
										{a}
										<br />
									</React.Fragment>
								))}
							</address>
							<p className='card-description'>{description}</p>
							<button className='primary-button'>MAP</button>
						</div>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Schedule
