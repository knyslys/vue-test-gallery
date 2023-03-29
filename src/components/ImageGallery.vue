<template>
  <div class="container">
    <image-item
      :src="firstImage"
      :animation-direction="swipeDirection"
    ></image-item>
    <image-item
      :src="secondImage"
      :animation-direction="swipeDirection"
    ></image-item>
    <!-- <img :src="firstImage" /> -->
  </div>
</template>

<script>
export default {
  props: ["firstImage", "secondImage", "swipeDirection"],
};
</script>
<style>
.container {
  max-width: 80%;
  background-color: cadetblue;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
