import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import store from "./store";

import "/public/res/css/style.css";
import "/public/res/css/index.css";


createApp(App).use(router).use(store).mount("#app");