import type { NextPage } from 'next'

const ThingsToDo: NextPage = () => {
	return (
		<div>
			<h1>Things To Do</h1>
			<p>
				We’re so excited to share a few of our favorite places in the area with
				you.
			</p>

			<ul>
				<li>
					<img
						src='https://images.zola.com/6b155d79-188f-4d12-a656-d5802eee900d?h=400'
						style={{ height: 100, width: 100, borderRadius: '50%' }}
					/>
					<h3>
						<a href=''>GOLDEN GATE BRIDGE</a>
					</h3>
					<h5>San Francisco, CA 94129</h5>
					<p>
						We know this is cliché, but it’s a must see. A great walk or bike
						ride for the rare day that it is sunny out.
					</p>
					<button>VIEW</button>
				</li>
				<li>
					<img
						src='https://images.zola.com/6b155d79-188f-4d12-a656-d5802eee900d?h=400'
						style={{ height: 100, width: 100, borderRadius: '50%' }}
					/>
					<h3>
						<a href=''>PIZZERIA PICCO</a>
					</h3>
					<h5>San Francisco, CA 94129</h5>
					<p>
						About 30 minutes outside of the city, this is such yummy pizza (and
						frozen yogurt) it is worth the trip. Great if you are staying in San
						Francisco for longer, and very easy to make a pit-stop on your way
						to or from Napa.
					</p>
					<button>VIEW</button>
				</li>
				<li>
					<img
						src='https://images.zola.com/6b155d79-188f-4d12-a656-d5802eee900d?h=400'
						style={{ height: 100, width: 100, borderRadius: '50%' }}
					/>
					<h3>
						<a href=''>GOLDEN GATE BRIDGE</a>
					</h3>
					<h5>San Francisco, CA 94129</h5>
					<p>
						We know this is cliché, but it’s a must see. A great walk or bike
						ride for the rare day that it is sunny out.
					</p>
					<button>VIEW</button>
				</li>
				<li>
					<img
						src='https://images.zola.com/6b155d79-188f-4d12-a656-d5802eee900d?h=400'
						style={{ height: 100, width: 100, borderRadius: '50%' }}
					/>
					<h3>
						<a href=''>GOLDEN GATE BRIDGE</a>
					</h3>
					<h5>San Francisco, CA 94129</h5>
					<p>
						We know this is cliché, but it’s a must see. A great walk or bike
						ride for the rare day that it is sunny out.
					</p>
					<button>VIEW</button>
				</li>
			</ul>
		</div>
	)
}

export default ThingsToDo
