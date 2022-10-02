import type { NextPage } from 'next'
import styles from '@styles/pages/photo.module.scss'

const Images = [
	{
		src: 'https://images.zola.com/0f14b8a8-ea17-40a6-a0cd-5dde20921062?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/ab57f490-5561-4f8b-8fbb-9beb39cadb46?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/1787293e-0f3e-469c-be55-c52dd13b5ed4?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/c9745809-0c7d-4143-a064-a3a9610a74d9?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/e8e663f9-e94b-4cf7-8432-b23cb5d124a4?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/4d47a172-8f95-46ce-addb-16b448c8cca6?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/d17b5d05-ddff-4afc-aa6f-e7f5bedad42e?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/6f582e02-937a-4dee-a140-ed65af0d9c53?w=800&h=800',
		alt: '',
	},
	{
		src: 'https://images.zola.com/caa69165-a090-4299-816e-e7fdc7722b71?w=800&h=800',
		alt: '',
	},
]

const Photos: NextPage = () => {
	return (
		<div className='page-container'>
			<div className='page-header'>
				<h1 className='page-title'>Photos</h1>
				<p className='page-description'>
					A few snaps taken of us over the years…
				</p>
			</div>
			<div className={styles['photos-container']}>
				{Images.map(({ alt, src }) => (
					<img key={src} className={styles.photo} src={src} alt={alt} />
				))}
			</div>
		</div>
	)
}

export default Photos
