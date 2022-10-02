import { useRouter } from 'next/router'

const RoutePathHeadPropsMap = {
	'/': {
		title: 'Ken And Rebecca Wedding',
		metaName: 'Home',
	},
	'/faqs': {
		title: 'Faqs',
		metaName: 'Faqs',
	},
	'/photos': {
		title: 'Photos',
		metaName: 'Photos',
	},
	'/schedule': {
		title: 'Schedule',
		metaName: 'Schedule',
	},
	'/wedding-party': {
		title: 'Wedding Party',
		metaName: 'Wedding Party',
	},
}

export const useHeadProps = (): { title: String; metaName: string } => {
	const { pathname } = useRouter()

	return RoutePathHeadPropsMap[pathname] || { title: '', metaName: '' }
}
