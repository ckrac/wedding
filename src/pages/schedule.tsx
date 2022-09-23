import type { NextPage } from 'next'

const Schedule: NextPage = () => {
	return (
		<div>
			<h1>Schedule!</h1>
			<p>
				Here's what to expect during our wedding weekend. There will also be a
				printout of this schedule available in your hotel rooms. We can't wait
				to celebrate with you!
			</p>

			<ol>
				<li>
					<div>
						<h2>WELCOME DRINKS</h2>
						<p>FRIDAY, JUNE 7, 2019</p>
						<p>9:00 PM</p>
					</div>
					<div>
						<address>
							Fairmont <br /> 950 Mason St <br /> San Francisco, CA 94108
						</address>
						<p>
							There will be a few light bites in addition to cocktails. Can’t
							wait to see you!
						</p>
						<button>MAP</button>
					</div>
				</li>

				<li>
					<div>
						<h2>CEREMONY</h2>
						<p>SATURDAY, JUNE 8, 2019</p>
						<p>5:30 PM</p>
					</div>
					<div>
						<address>
							Palace of Fine Arts Theatre <br /> 3301 Lyon Street <br /> San
							Francisco, CA 94123
						</address>
						<p>
							The grass can be a little soft, so you might want to rethink
							stilettos!
						</p>
						<button>MAP</button>
					</div>
				</li>

				<li>
					<div>
						<h2>RECEPTION</h2>
						<p>SATURDAY, JUNE 8, 2019</p>
						<p>7:00 PM - 11:00 PM</p>
					</div>
					<div>
						<address>
							Palace of Fine Arts Theatre <br /> 3301 Lyon Street <br /> San
							Francisco, CA 94123
						</address>
						<p>
							Dinner, drinks and dancing to follow our ceremony! There's an
							outdoor space that can get a little chilly at night—we recommend
							bringing a shawl or light jacket.
						</p>
						<button>MAP</button>
					</div>
				</li>

				<li>
					<div>
						<h2>BRUNCH</h2>
						<p>SATURDAY, JUNE 8, 2019</p>
						<p>10:00 AM - 12:00 PM</p>
					</div>
					<div>
						<address>
							Palace of Fine Arts Theatre <br /> 3301 Lyon Street <br /> San
							Francisco, CA 94123
						</address>
						<p>A final gathering before we all head home.</p>
						<button>MAP</button>
					</div>
				</li>
			</ol>
		</div>
	)
}

export default Schedule
