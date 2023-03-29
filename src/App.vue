<template>
  <image-gallery
    :swipe-direction="swipeDirection"
    :first-image="pictures[firstPicture].imgSrc"
    :second-image="pictures[secondPicture].imgSrc"
  ></image-gallery>
  <button @click="swipeLeft">Left</button>
  <button @click="swipeRight">Right</button>
</template>

<script>
export default {
  data() {
    return {
      pictures: [
        {
          id: 1,
          imgSrc: require("./assets/1.webp"),
        },
        {
          id: 2,
          imgSrc: require("./assets/2.webp"),
        },
        {
          id: 3,
          imgSrc: require("./assets/3.webp"),
        },
        {
          id: 4,
          imgSrc: require("./assets/4.webp"),
        },
        {
          id: 5,
          imgSrc: require("./assets/5.webp"),
        },
        {
          id: 6,
          imgSrc: require("./assets/6.webp"),
        },
      ],
      firstPicture: 0,
      secondPicture: 1,
      swipeDirection: undefined,
    };
  },
  provide() {
    return {
      animationDirection: this.firstPicture,
    };
  },

  methods: {
    swipeLeft() {
      this.swipeDirection = -1;
      this.firstPicture -= 1;
      this.secondPicture -= 1;
    },
    swipeRight() {
      this.swipeDirection = 1;
      this.firstPicture += 1;
      this.secondPicture += 1;
      console.log(this.swipeDirection);
    },
  },

  watch: {
    firstPicture(curIndex) {
      if (curIndex < 0) {
        this.firstPicture = this.pictures.length - 1;
      } else if (curIndex > this.pictures.length - 1) {
        this.firstPicture = 0;
      }
    },
    secondPicture(curIndex) {
      if (curIndex < 0) {
        this.secondPicture = this.pictures.length - 1;
      } else if (curIndex > this.pictures.length - 1) {
        this.secondPicture = 0;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
