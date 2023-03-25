import styles from '@styles/pages/photo.module.scss'
import cn from 'classnames'

const photos = [
	{
		src: 'mexico-1.jpeg',
		largeSize: true,
	},
	{
		src: 'with-hazel-1.jpeg',
		largeSize: true,
	},
	{
		src: 'proposal-1.JPG',
		largeSize: false,
	},
	{
		src: 'with-hazel-3.jpeg',
		largeSize: false,
	},
	{
		src: 'water.JPG',
		largeSize: false,
	},

	{
		src: 'proposal-2.jpeg',
		largeSize: false,
	},
	{
		src: 'mexico-2.jpeg',
		largeSize: false,
	},
	{
		src: 'sunset.JPG',
		largeSize: false,
	},
	{
		src: 'with-hazel-2.jpeg',
		largeSize: false,
	},
]

const Photos = () => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Photos</h1>
			<p className='page-description'>
				A few snaps taken of us over the years…
			</p>
		</div>
		<div className={styles['photos-container']}>
			{photos.map(({ src, largeSize }, index) => (
				<img
					key={index}
					className={cn(styles.photo, { [styles.large]: largeSize })}
					src={src}
				/>
			))}
		</div>
	</div>
)

export default Photos
