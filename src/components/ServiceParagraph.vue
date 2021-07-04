<template>
  <div class="grid-item__container">
    <p class="paragraph__heading">{{ data.heading }}</p>
    <p class="grid-item__content">{{ data.content }}</p>
    <font-awesome-icon v-if="has_arrow_down" class="icon" :icon="['fas', 'angle-double-down']" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    has_arrow_down: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item__container {
  font-size: 16px;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
  -moz-box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
  box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  width: 75%;
  margin: 2em;
  padding: 2em;
  z-index: 0;
  &::before {
    position: absolute;
    top: 1.5rem;
    left: -1.5rem;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(250, 250, 250);
    -webkit-box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
    -moz-box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
    box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 1);
  }
}
.paragraph__heading {
  text-align: center;
  position: relative;
  padding-right: 1em;
  font-family: $secondary-font;
  margin-bottom: 1.5em;
  display: inline-block;
  font-size: 22px;
}
.icon {
  color: rgb(183, 183, 183);
  position: absolute;
  bottom: -2.2em;
  left: 50%;
  bottom: -2.7em;
  transform: translateX(-50%);
  font-size: 18px;
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .grid-item__container {
    width: 80%;
    margin: 1em auto;
    padding: 1em 1.5em 1.5em 1.5em;
    margin-bottom: 4em;
    &:first-child {
      margin-top: 3em;
    }
  }
  .icon {
    bottom: -3em;
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .grid-item__content {
    font-size: 1.5rem;
  }
  .grid-item__container {
    width: 95%;
    &::before {
      display: none;
    }
  }
  .icon {
    bottom: -2.75em;
  }
}
</style>