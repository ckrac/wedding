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
		streetAddress: '65 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps?q=cn+tower&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMhMILhCDARCvARDHARCxAxCKBRBDMgoIABCKBRCxAxBDMggIABCABBCxAzIOCC4QrwEQxwEQsQMQgAQyBQgAEIAEMgsIABCABBCxAxCDATIRCC4QgwEQrwEQxwEQsQMQgAQyBwgAEIoFEEMyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoOCC4QigUQxwEQrwEQkQI6CAgAEIoFEJECOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6EwguEIMBEMcBELEDENEDEIoFEEM6DQgAEIoFELEDEIMBEEM6DQguEIoFEMcBEK8BEEM6EQguEIAEELEDEIMBEMcBEK8BOg4ILhCABBCxAxDHARCvAToQCC4QrwEQxwEQsQMQigUQQ0oECEEYAFDxCljQFGCLG2gBcAF4AIABfogBgweSAQMxLjeYAQCgAQHIAQnAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiAnei1mPj9AhWKpIkEHbgyBQ8Q_AUoAnoECAEQBA',
	},
	{
		title: 'CEREMONY',
		description:
			'The grass can be a little soft, so you might want to rethink stilettos!',
		date: 'SATURDAY, SEPTEMBER, 2023',
		time: '5:00 PM',
		streetAddress: '65 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps?q=cn+tower&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMhMILhCDARCvARDHARCxAxCKBRBDMgoIABCKBRCxAxBDMggIABCABBCxAzIOCC4QrwEQxwEQsQMQgAQyBQgAEIAEMgsIABCABBCxAxCDATIRCC4QgwEQrwEQxwEQsQMQgAQyBwgAEIoFEEMyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoOCC4QigUQxwEQrwEQkQI6CAgAEIoFEJECOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6EwguEIMBEMcBELEDENEDEIoFEEM6DQgAEIoFELEDEIMBEEM6DQguEIoFEMcBEK8BEEM6EQguEIAEELEDEIMBEMcBEK8BOg4ILhCABBCxAxDHARCvAToQCC4QrwEQxwEQsQMQigUQQ0oECEEYAFDxCljQFGCLG2gBcAF4AIABfogBgweSAQMxLjeYAQCgAQHIAQnAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiAnei1mPj9AhWKpIkEHbgyBQ8Q_AUoAnoECAEQBA',
	},
	{
		title: 'RECEPTION',
		description: `Dinner, drinks and dancing to follow our ceremony! There's an outdoor space that can get a little chilly at night—we recommend bringing a shawl or light jacket.`,
		date: 'SATURDAY, SEPTEMBER, 2023',
		time: '7:00 PM',
		streetAddress: '65 East Liberty St',
		cityProvinceZIPCodeAddress: 'Toronto, ONT M6K 3R2',
		mapLink:
			'https://www.google.com/maps?q=cn+tower&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMhMILhCDARCvARDHARCxAxCKBRBDMgoIABCKBRCxAxBDMggIABCABBCxAzIOCC4QrwEQxwEQsQMQgAQyBQgAEIAEMgsIABCABBCxAxCDATIRCC4QgwEQrwEQxwEQsQMQgAQyBwgAEIoFEEMyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoOCC4QigUQxwEQrwEQkQI6CAgAEIoFEJECOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6EwguEIMBEMcBELEDENEDEIoFEEM6DQgAEIoFELEDEIMBEEM6DQguEIoFEMcBEK8BEEM6EQguEIAEELEDEIMBEMcBEK8BOg4ILhCABBCxAxDHARCvAToQCC4QrwEQxwEQsQMQigUQQ0oECEEYAFDxCljQFGCLG2gBcAF4AIABfogBgweSAQMxLjeYAQCgAQHIAQnAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiAnei1mPj9AhWKpIkEHbgyBQ8Q_AUoAnoECAEQBA',
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
				Here's what to expect during our wedding weekend. There will also be a
				printout of this schedule available in your hotel rooms. We can't wait
				to celebrate with you!
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
