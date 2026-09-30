import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { warmImageCache } from './lib/imageCache.js'

warmImageCache()

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
