import type { InferGetStaticPropsType } from 'next'
import styles from '@styles/pages/home.module.scss'
import { fetchAPI } from '@src/lib/api'
import { ApiHistoryHistory } from 'cms/schemas'

type History = {
	[Property in keyof ApiHistoryHistory['attributes']]: string
}

function formatDate(date: string) {
	const dateObj = new Date(date.replace(/-/g, '/')) // returned date is 2023-08-05 Year-Month-Day, replace hyphens to correct date object parser
	const day = dateObj.getDay()
	const month = dateObj.getMonth() + 1
	const year = dateObj.getFullYear()
	return `${month}.${day}.${year}`
}

const Home = ({
	histories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className={styles.home}>
			<div className={styles['home__header']}>
				<h1>{`We're getting married!`}</h1>
			</div>

			<div className={styles['home__name-outer']}>
				<div className={styles['home__name-middle']}>
					<h2 className={styles['home__name-full']}>
						<span>Rebecca</span>
						<span>Lee</span>
					</h2>
					<span className={styles['home__name-connection']}>and</span>
					<h2 className={styles['home__name-full']}>
						<span>Kenneth</span>
						<span>Racadio</span>
					</h2>
				</div>
			</div>

			<section className={styles['home__wedding-info']}>
				<div className={styles['home__wedding-info-inner']}>
					<h3 className={styles['home__date']}>
						<span>August</span>
						<span>05, </span>
						<span>2023</span>
					</h3>

					<h4 className={styles['home__location']}>TORONTO, ON</h4>
				</div>
			</section>

			<div className={styles['home__about-us-container']}>
				{histories.map(({ id, attributes: { title, description, date } }) => (
					<section key={id} className={styles['home__about-us']}>
						<div className={styles['home__about-us__header']}>
							<h5 className={styles['home__about-us__title']}>{title}</h5>
							<h6 className={styles['home__about-us__subtitle']}>
								{formatDate(date).toString()}
							</h6>
						</div>
						<p className={styles['home__about-us__description']}>
							{description}
						</p>
					</section>
				))}
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetchAPI('/histories', { populate: '*' })

	return {
		props: {
			histories: res.data as {
				id: number
				attributes: History
			}[],
		},
		revalidate: 1,
	}
}

export default Home
