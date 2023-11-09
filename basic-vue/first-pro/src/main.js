import { createApp } from 'vue'

import App from './App.vue'
import Testimonial from './Testimonial.vue'
import Event from './Event.vue'
import Form from './Form.vue'
import Watchers from './Watchers.vue'

// createApp(App).mount('#app')
// createApp(Testimonial).mount('#testimonial')
// createApp(Event).mount('#testimonial')
// createApp(Form).mount('#form')
createApp(Watchers).mount('#watcher')