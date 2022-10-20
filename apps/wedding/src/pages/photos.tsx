import type { InferGetStaticPropsType } from 'next'
import styles from '@styles/pages/photo.module.scss'
import { fetchAPI, getStrapiMedia } from '@src/lib/api'

const Photos = ({ photos }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className='page-container'>
			<div className='page-header'>
				<h1 className='page-title'>Photos</h1>
				<p className='page-description'>
					A few snaps taken of us over the years…
				</p>
			</div>
			<div className={styles['photos-container']}>
				{photos.map(({ id, attributes: { image } }) => (
					<img key={id} className={styles.photo} src={getStrapiMedia(image)} />
				))}
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetchAPI('/photos', { populate: '*' })

	return {
		props: {
			photos: res.data as {
				id: number
				attributes: {
					image: {
						data: {}
					}
				}
			}[],
		},
		revalidate: 1,
	}
}

export default Photos
