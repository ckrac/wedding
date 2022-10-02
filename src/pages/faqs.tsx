import type { NextPage } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/faqs.module.scss'

const FAQS = [
	{
		question: `ARE KIDS INVITED?`,
		answer: `We love your kids—we really do. But we want our wedding to be your night off! We’ve booked a couple babysitters to make that a reality.`,
	},
	{
		question: `IS THERE TRANSPORTATION TO AND FROM THE HOTELS TO THE CEREMONY?`,
		answer: `Yes, check out our Travel & Accommodations page for all the info you need.`,
	},
	{
		question: `CAN I BRING A DATE?`,
		answer: `If your invitation says “and Guest,” then yes, if not, we would prefer if it was just you.`,
	},
	{
		question: `WHAT’S THE DRESS CODE?`,
		answer: `Cocktail, please. But we want you to feel comfortable, so if those shoes are too high or that top button is too tight, let it all hang loose.`,
	},
]

const Faqs: NextPage = () => {
	return (
		<div className='page-container'>
			<div className='page-header'>
				<h1 className='page-title'>FAQs</h1>
				<p className='page-description'>
					If you have any other questions other than what we’ve listed here,
					please reach out to our wedding planner, Annie, at 555-555-5555.
				</p>
			</div>

			<ul className={cn('card-list', styles['responsive-card-list'])}>
				{FAQS.map(({ question, answer }) => (
					<li key={question} className='card'>
						<div className='card-header'>
							<p className='card-subtitle'>QUESTION</p>
							<h4 className='card-title'>{question}</h4>
						</div>
						<div className='separator' aria-hidden='true' role='presentation' />
						<div className='card-content'>
							<p className='card-subtitle'>ANSWER</p>
							<h4 className='card-description'>{answer}</h4>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Faqs
