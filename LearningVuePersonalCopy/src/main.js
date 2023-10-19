//main.js
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./routes.js";

// Ensure these paths aare correct
import "primevue/resources/themes/lara-dark-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button)
app.use(PrimeVue);
app.use(router);

app.mount("#app");
