import type { InferGetStaticPropsType } from 'next'
import styles from '@styles/pages/photo.module.scss'
import { fetchAPI, getStrapiMedia } from '@src/lib/api'
import cn from 'classnames'

const Photos = ({
	description,
	photos,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>Photos</h1>
			<p className='page-description'>{description}</p>
		</div>
		<div className={styles['photos-container']}>
			{photos.map(({ id, attributes: { image, large } }) => (
				<img
					key={id}
					className={cn(styles.photo, { [styles.large]: large })}
					src={getStrapiMedia(image)}
				/>
			))}
		</div>
	</div>
)

export async function getStaticProps() {
	const [photosRes, pageRes] = await Promise.all([
		fetchAPI('/photos', { populate: '*', ['sort[0]']: 'order:desc' }),
		fetchAPI('/page', { ['fields[0]']: 'photosDescription' }),
	])

	return {
		props: {
			photos: photosRes.data as {
				id: number
				attributes: {
					image: {
						data: {}
					}
					large: boolean
				}
			}[],
			description: pageRes.data.attributes.photosDescription,
		},
		revalidate: 1,
	}
}

export default Photos
