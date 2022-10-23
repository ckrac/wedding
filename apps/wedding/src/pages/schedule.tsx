import React from 'react'
import type { InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/schedule.module.scss'
import { fetchAPI } from '@src/lib/api'
import { ApiItineraryItinerary } from 'cms/schemas'

type Itinerary = {
	[Property in keyof ApiItineraryItinerary['attributes']]: string
}

function onMapClick(link: string) {
	window?.open(link, '_blank')
}

function formatDate(date: string) {
	return new Date(date.replace(/-/g, '/')).toDateString() // returned date is 2023-08-05 Year-Month-Day, replace hyphens to correct date object parser
}

function formatTime(date: string, time: string) {
	const [hours, minutes] = time.split(':') // returned time is 00:18:00.000 = 00:hour:minute:00.000
	return new Date(
		`${date.replace(/-/g, '/')} ${hours}:${minutes}`
	).toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
	})
}

const Schedule = ({
	itineraries,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Schedule</h1>
			<p className='page-description'>
				{`Here's what to expect during our wedding weekend. There will also be a printout of this schedule available in your hotel rooms. We can't wait to celebrate with you!`}
			</p>
		</div>

		<ol className={cn('card-list', styles['responsive-card-list'])}>
			{itineraries.map(
				({
					id,
					attributes: {
						title,
						description,
						date,
						startTime,
						endTime,
						streetAddress,
						cityProvinceZIPCodeAddress,
						mapLink,
					},
				}) => (
					<li key={id} className='card'>
						<div className='card-header'>
							<h2 className='card-title'>{title}</h2>
							<p className='card-subtitle'>{formatDate(date)}</p>
							<p className='card-subtitle'>{`${formatTime(date, startTime)} ${
								endTime ? '- ' + formatTime(date, endTime) : ''
							}`}</p>
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

export async function getStaticProps() {
	const itineraryRes = await fetchAPI('/itineraries', { populate: '*' })

	return {
		props: {
			itineraries: itineraryRes.data as {
				id: number
				attributes: Itinerary
			}[],
		},
		revalidate: 1,
	}
}

export default Schedule
