type Permissions = {
	[key: string]: string[]
}

async function setPublicPermissions(newPermissions: Permissions) {
	// Find the ID of the public role
	const publicRole = await strapi
		.query('plugin::users-permissions.role')
		.findOne({
			where: {
				type: 'public',
			},
		})

	// Create the new permissions and link them to the public role
	const allPermissionsToCreate = []
	Object.keys(newPermissions).map((controller) => {
		const actions = newPermissions[controller]
		const permissionsToCreate = actions.map((action) => {
			return strapi.query('plugin::users-permissions.permission').create({
				data: {
					action: `api::${controller}.${controller}.${action}`,
					role: publicRole.id,
				},
			})
		})
		allPermissionsToCreate.push(...permissionsToCreate)
	})
	await Promise.all(allPermissionsToCreate)
}

const bootstrap = async () => {
	// Allow read of application content types
	await setPublicPermissions({
		faqs: ['find', 'findOne'],
	})

	console.log('Ready to go')
}

export default bootstrap
