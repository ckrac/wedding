import { Fragment } from 'react'
import cn from 'classnames'
import styles from '@styles/pages/wedding-party.module.scss'

const friends = [
	{
		name: 'Priscilla',
		role: 'BRIDESMAID',
		image: 'Daenerys_Targaryen.jpg',
	},
	{
		name: 'Kim',
		role: 'GROOMSMAN',
		image:
			'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Tyrion-Lannister.Game-of-Thrones.webp',
	},
	{
		name: 'Jady',
		role: 'BRIDESMAID',
		image: 'Daenerys_Targaryen.jpg',
	},
	{
		name: 'Ahmed',
		role: 'GROOMSMAN',
		image:
			'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Tyrion-Lannister.Game-of-Thrones.webp',
	},
	{
		name: 'Kugi',
		role: 'BRIDESMAID',
		image: 'Daenerys_Targaryen.jpg',
	},
	{
		name: 'Henry',
		role: 'GROOMSMAN',
		image:
			'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Tyrion-Lannister.Game-of-Thrones.webp',
	},
	{
		name: 'Christine',
		role: 'BRIDESMAID',
		image: 'Daenerys_Targaryen.jpg',
	},
	{
		name: 'Kavi',
		role: 'GROOMSMAN',
		image:
			'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Tyrion-Lannister.Game-of-Thrones.webp',
	},
	{
		name: 'Raisa',
		role: 'BRIDESMAID',
		image: 'Daenerys_Targaryen.jpg',
	},
]

const WeddingParty = () => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Wedding Party</h1>
			<p className='page-description'>
				Meet our family and friends who are walking down the aisle with us.
			</p>
		</div>
		<ul className={cn('card-list', styles['responsive-card-list'])}>
			{friends.map(({ name, role, image }, index) => (
				<Fragment key={index}>
					<li className='card'>
						<img className={styles['img']} src={image} alt={`${name}`} />
						<h3 className='card-title'>{name}</h3>
						<h4 className='card-subtitle'>{role}</h4>
					</li>
					{index % 2 === 0 && (
						<li className='separator' aria-hidden='true' role='presentation' />
					)}
				</Fragment>
			))}
		</ul>
	</div>
)

export default WeddingParty
