<template>
  <div class="main">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
export default {
  components: {
    Dashboard
  }
}
</script>

<style lang="scss" scoped>
.main {
  // width: 80%;
  margin: 0 auto;
}

.main-img__container {
  position: relative;
  //top: 5rem;
  margin-bottom: 5rem;
}
img {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 55%;
  z-index: 0;
  filter: grayscale(35%);
}
.main-img__decorator-container {
  width: 50%;
  position: relative;
  bottom: 11rem;
  left: 8rem;
  background: rgba(235, 235, 235, 0.95);
  padding: 2rem;
}

// Custom
@media (max-width: 1399.98px) {
  .main-img__decorator-container {
    width: 55%;
  }
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .main-img__container {
    margin-bottom: 10rem;
  }
  .main-img__decorator-container {
    width: 65%;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .main-img__decorator-container {
    margin-bottom: 8rem;
    width: 85%;
    position: relative;
    bottom: 4rem;
    transform: translateX(-50%);
    left: 50%;
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .main-img__decorator-container {
    width: 100%;
    bottom: -3rem;
    margin-bottom: 18rem;
  }
}
</style>
