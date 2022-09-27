import type { NextPage } from 'next'
import styles from '@styles/pages/home.module.scss'

const AboutUs = [
	{
		title: 'HOW WE MET',
		subtitle: '5.23.15',
		description: `We met at a classmate’s party and didn’t think much of it. Then a
						bunch of us went to karaoke after a long day of back-to-back classes
						and we both picked, “I’d Do Anything for Love.” And it just clicked.
						He went low, I went high. There were fist pumps. We harmonized by
						accident. That’s pretty much when we thought, “Okay. This could be
						something.”`,
	},
	{
		title: 'THE PROPOSAL',
		subtitle: '7.29.22',
		description: `On the anniversary of when we first met, we went back to our old
						stomping grounds to do karaoke with friends. When "I'd Do Anything
						for Love" came on, we ran up to the front. When the music suddenly
						died down, I looked over and he was down on one knee. I screamed,
						shouted "YES," and we were engaged. We're so excited to celebrate
						this next chapter in our lives with you. See you in San Fran!`,
	},
]

const Home: NextPage = () => {
	return (
		<div className={styles.home}>
			<div className={styles['home__header']}>
				<h1>We're getting married!</h1>
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
				{AboutUs.map(({ description, subtitle, title }) => (
					<section key={title} className={styles['home__about-us']}>
						<div className={styles['home__about-us__header']}>
							<h5 className={styles['home__about-us__title']}>{title}</h5>
							<h6 className={styles['home__about-us__subtitle']}>{subtitle}</h6>
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

export default Home
