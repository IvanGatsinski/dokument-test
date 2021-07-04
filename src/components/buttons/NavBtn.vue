<template>
  <router-link :to="data.to" class="nav-btn">
    {{ data.name }}
    <div
      :class="{ 'hidden-dropdown': is_hidden }"
      class="optional-dropdown__container"
    >
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Header-Btn',
  props: {
    has_dropdown: {
      type: Boolean
    },
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      is_hidden: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden-dropdown {
  display: none;
}
.btns__container > .nav-btn:nth-child(2),
.btns__container > .nav-btn:nth-child(5) {
  &:hover {
    &::after {
      position: fixed;
      content: '';
      top: 125px;
      left: 0;
      width: 100vw;
      height: 95px;
      background: rgba(68, 68, 68, 0.97);
      z-index: -1;
      cursor: auto;
    }
  }
}
.nav-btn {
  display: block;
  color: #fff;
  position: relative;
  font-size: 16px;
  text-transform: capitalize;
  padding: 0.65em 2.25em;
  letter-spacing: 0.5;
  &:not(:last-child) {
    border-right: none;
  }
  &:hover {
    background: rgb(245, 245, 245);
    color: #555;
  }
  &:hover .optional-dropdown__container {
    visibility: visible;
  }
}
.optional-dropdown__container {
  visibility: hidden;
  width: 22rem;
  position: absolute;
  left: 0;
  top: 100%;
  & .nav-btn {
    top: 2px;

    &:nth-child(odd) {
      border-bottom: none;
    }
  }
}
@media (max-width: 1199.98px) {
  .nav-btn {
      padding: 0.65em 1.75em;
  }
}
</style>
