import cn from 'classnames'
import styles from '@styles/pages/faqs.module.scss'

const faqs = [
	{
		question: `ARE KIDS INVITED?`,
		answer: `We adore your little ones, and we appreciate your understanding that we would like to make our wedding day a time for you to unwind and celebrate with us without any extra worries. So, we kindly request that you leave your children at home for the day. We hope you'll enjoy this special occasion with us, free of any additional stress or responsibilities. Let's all have a night to remember!`,
	},
	{
		question: `Can I bring a gift to the wedding?`,
		answer: `Your presence at our wedding is enough of a gift, but should you wish to buy us something, we’d greatly appreciate a financial contribution.`,
	},
	{
		question: `What time should I arrive for the wedding?`,
		answer: `The invitation should indicate the rival time, which is 4:30PM.`,
	},
	{
		question: `Where should I park?`,
		answer: `If you are driving directly to the venue, there is a municipal parking lot next to our venue. The parking address is 15 Hanna Ave, Toronto, ON M6K 1G1.`,
	},
	{
		question: `Can I take photos or videos during the ceremony?`,
		answer: `We are thrilled that you would like to capture memories of our ceremony with photos and videos! While we welcome you to do so, we kindly request that you are mindful of our photographer as we have hired them to take our professional photos. Thank you for your understanding, and we can't wait to see your beautiful photos and videos of our special day!`,
	},
	{
		question: `Will there be food and drinks at the wedding?`,
		answer: `Food and drinks provided at the reception. If you have any dietary restrictions, please let Rebecca or Kenneth know in advance.`,
	},
	{
		question: `What should I do if I have to cancel my RSVP?`,
		answer: ` If you have to cancel your RSVP, let Rebecca or Kenneth know as soon as possible.`,
	},
]

const Faqs = () => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>FAQs</h1>
		</div>

		<ul className={cn('card-list', styles['responsive-card-list'])}>
			{faqs.map(({ answer, question }, index) => (
				<li key={index} className='card'>
					<div className='card-header'>
						<p className='card-subtitle'>QUESTION</p>
						<h4 className='card-title'>{question + ''}</h4>
					</div>
					<div className='separator' aria-hidden='true' role='presentation' />
					<div className='card-content'>
						<p className='card-subtitle'>ANSWER</p>
						<h4 className='card-description'>{answer + ''}</h4>
					</div>
				</li>
			))}
		</ul>
	</div>
)

export default Faqs
