import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
// import 'boxicons';
import HomeButton from './components/HomeButton.vue';
// import TheFooter from './components/TheFooter.vue';


const app=  createApp(App)



app.use(router);

app.component('home-button', HomeButton);
// app.component('the-footer', TheFooter);



app.mount('#app');
