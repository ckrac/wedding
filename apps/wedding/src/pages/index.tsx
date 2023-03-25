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
					Rebecca and Kenneth had been crossing paths at the gym for a few
					years, but they had never been formally introduced. It wasn't until a
					friend's party in December 2014 that their paths finally crossed.
					During the course of the evening, Rebecca mustered up the courage to
					give Kenneth her phone number. On Christmas Day, Kenneth sent her a
					text wishing her a Merry Christmas, but without revealing his
					identity. Confused, Rebecca responded with a simple "Merry Christmas!"
					not realizing who it was.
					<br />
					<br />
					Months later, while having dinner with friends, Rebecca revealed her
					crush on Kenneth. Her friend Ivan, who knew Kenneth, eagerly handed
					over his phone number to her. From that moment on, their story took a
					new turn, leading to a memorable and meaningful relationship.
				</p>
			</section>
			<section className={styles['home__about-us']}>
				<div className={styles['home__about-us__header']}>
					<h5 className={styles['home__about-us__title']}>THE PROPOSAL</h5>
					<h6 className={styles['home__about-us__subtitle']}>07.31.2022</h6>
				</div>
				<p
					className={styles['home__about-us__description']}
				>{`Kenneth, along with his friends Henry and Kugi, took Rebecca to the charming town of Port Hope. The group spent a delightful day exploring the area, enjoying lunch, and riding their bikes. As they took in the stunning view of the water, Henry suggested that they snap a group picture. Kugi then directed Rebecca's attention back to the breathtaking view. When she turned back, she was met with a surprising sight. Kenneth was down on one knee, with a ring box in hand and the sounds of Bruno Mars's "Marry You" in the background. He gazed up at her with a smile and asked, "Will you marry me?" Overcome with joy, Rebecca quickly slid the ring onto her finger before exclaiming a resounding "YES!"`}</p>
			</section>
		</div>
	</div>
)

export default Home
