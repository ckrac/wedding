import { InferGetStaticPropsType } from 'next'
import cn from 'classnames'
import styles from '@styles/pages/faqs.module.scss'
import { fetchAPI } from '@src/lib/api'
import { ApiFaqFaq } from 'cms/schemas'

const Faqs = ({
	description,
	faqs,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<div className='page-container'>
		<div className='page-header'>
			<h1 className='page-title'>FAQs</h1>
			<p className='page-description'>{description}</p>
		</div>

		<ul className={cn('card-list', styles['responsive-card-list'])}>
			{faqs.map(({ id, attributes: { answer, question } }) => (
				<li key={id} className='card'>
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

export async function getStaticProps() {
	const [faqsRes, pageRes] = await Promise.all([
		fetchAPI('/faqs', {
			['sort[0]']: 'order:desc',
			['fields[0]']: 'answer',
			['fields[1]']: 'question',
		}),
		fetchAPI('/page', { ['fields[0]']: 'faqsDescription' }),
	])

	return {
		props: {
			faqs: faqsRes.data as {
				id: number
				attributes: ApiFaqFaq['attributes']
			}[],
			description: pageRes.data.attributes.faqsDescription,
		},
		revalidate: 1,
	}
}

export default Faqs
