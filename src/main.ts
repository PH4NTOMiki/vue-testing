import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')

declare global { interface Window { snapSaveState: Function } }

window.snapSaveState = () => {
    document.querySelector("#app")?.setAttribute("data-server-rendered", "true");
};
