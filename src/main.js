// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import axios from 'axios';
import Feature from '~/components/Feature.vue';
import Grid from '~/components/Grid.vue';
import Page from '~/components/Page.vue';
import Teaser from '~/components/Teaser.vue';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);

	// register components
	Vue.component('Page', Page);
	Vue.component('Teaser', Teaser);
	Vue.component('Feature', Feature);
	Vue.component('Grid', Grid);
	Vue.use(axios);
}
