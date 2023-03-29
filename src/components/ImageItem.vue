<!-- eslint-disable no-unused-vars -->
<template>
  <div class="image-container">
    <h2>{{ animationDirection }}</h2>
    <Presence :exitBeforeEnter="true">
      <Motion
        tag="img"
        :key="src"
        :initial="{ opacity: 0, x: 50 * animationDirection }"
        :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 },
        }"
        :exit="{ opacity: 0, x: 110 * animationDirection }"
        class="image"
        :src="src"
      />
    </Presence>
  </div>
</template>

<script>
import { Motion, Presence } from "motion/vue";

export default {
  components: { Motion, Presence },
  inject: ["animationDirection"],
  data() {
    return {
      test: this.animationDirection,
    };
  },
  watch: {
    test(val) {
      console.log(val);
    },
  },
  props: ["src", "animationDirection"],
};
</script>

<style>
.image-container {
  width: clamp(20rem, 30%, 50rem);
}

img {
  max-width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
