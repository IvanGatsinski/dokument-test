<template>
  <transition name="fade">
    <div @click="$emit('close')" v-if="is_open" class="modal__container">
      <div class="img__container">
        <img :src="imgSrc" alt="modal-img" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    is_open: {
      type: Boolean,
      required: true,
      default: false
    },
  }
};
</script>

<style lang="scss" scoped>
.modal__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  .img__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    width: 50%;
    height: 65%;
    img {
      -webkit-box-shadow: 0px 0px 33px 3px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 33px 3px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 33px 3px rgba(255, 255, 255, 1);
      height: 100%;
      border-radius: 8px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>