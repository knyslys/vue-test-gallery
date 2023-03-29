import { createApp } from "vue";
import App from "./App.vue";
import ImageGallery from "./components/ImageGallery.vue";
import ImageItem from "./components/ImageItem.vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App).use(MotionPlugin);

app.component("image-gallery", ImageGallery);
app.component("image-item", ImageItem);

app.mount("#app");
