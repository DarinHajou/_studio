import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';

export default {
	title: 'Online Shoe Catalogue',

	projectId: 'z3su1wta',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemas,
	},
};
