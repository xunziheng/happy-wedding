import './app.css'
import App from './App.svelte'
import "tailwindcss/tailwind.css"

const app = new App({
  target: document.getElementById('app')
})

export default app
