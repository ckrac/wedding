import type { NextPage } from 'next'

const Faqs: NextPage = () => {
	return (
		<div>
			<h1>FAQs</h1>
			<p>
				If you have any other questions other than what we’ve listed here,
				please reach out to our wedding planner, Annie, at 555-555-5555.
			</p>

			<ul>
				<li>
					<div>
						<p>QUESTION</p>
						<h4>ARE KIDS INVITED?</h4>
					</div>
					<div>
						<p>ANSWER</p>
						<h4>
							We love your kids—we really do. But we want our wedding to be your
							night off! We’ve booked a couple babysitters to make that a
							reality.
						</h4>
					</div>
				</li>

				<li>
					<div>
						<p>QUESTION</p>
						<h4>
							IS THERE TRANSPORTATION TO AND FROM THE HOTELS TO THE CEREMONY?
						</h4>
					</div>
					<div>
						<p>ANSWER</p>
						<h4>
							Yes, check out our Travel & Accommodations page for all the info
							you need.
						</h4>
					</div>
				</li>

				<li>
					<div>
						<p>QUESTION</p>
						<h4>CAN I BRING A DATE?</h4>
					</div>
					<div>
						<p>ANSWER</p>
						<h4>
							If your invitation says “and Guest,” then yes, if not, we would
							prefer if it was just you.
						</h4>
					</div>
				</li>

				<li>
					<div>
						<p>QUESTION</p>
						<h4>WHAT’S THE DRESS CODE?</h4>
					</div>
					<div>
						<p>ANSWER</p>
						<h4>
							Cocktail, please. But we want you to feel comfortable, so if those
							shoes are too high or that top button is too tight, let it all
							hang loose.
						</h4>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Faqs
