import styles from '@styles/pages/home.module.scss'

const Home = () => (
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

		<div className={styles['home__countdown']}>
			{`We're thrilled to share this special moment with you and can't wait for you to join us as we embark on this next journey together.`}
		</div>

		<section className={styles['home__wedding-info']}>
			<div className={styles['home__wedding-info-inner']}>
				<h3 className={styles['home__date']}>
					<span>September</span>
					<span>23, </span>
					<span>2023</span>
				</h3>

				<h4 className={styles['home__location']}>TORONTO, ON</h4>
			</div>
		</section>

		<div className={styles['home__about-us-container']}>
			<section className={styles['home__about-us']}>
				<div className={styles['home__about-us__header']}>
					<h5 className={styles['home__about-us__title']}>HOW WE MET</h5>
					<h6 className={styles['home__about-us__subtitle']}>12.13.2014</h6>
				</div>
				<p className={styles['home__about-us__description']}>
					{`Rebecca and Kenneth crossed paths at the gym for years but never formally met. Finally, at a friend's party in December 2014, Rebecca gave Kenneth her number. On Christmas Day, Kenneth texted her but didn't reveal his identity, confusing Rebecca. Months later, Rebecca revealed her crush to a friend who gave her Kenneth's number, and the rest, as they say, is history.`}
				</p>
			</section>
			<section className={styles['home__about-us']}>
				<div className={styles['home__about-us__header']}>
					<h5 className={styles['home__about-us__title']}>THE PROPOSAL</h5>
					<h6 className={styles['home__about-us__subtitle']}>07.31.2022</h6>
				</div>
				<p
					className={styles['home__about-us__description']}
				>{`Kenneth, with his friends Henry and Kugi, took Rebecca to Port Hope for a perfect day of exploring and biking. While admiring the water, Henry suggested a group photo. Kugi distracted Rebecca, and when she turned back, Kenneth proposed on one knee with a ring box and "Marry You" playing. Rebecca joyfully accepted with a "YES!" and slipped the ring on her finger.`}</p>
			</section>
		</div>
	</div>
)

export default Home
