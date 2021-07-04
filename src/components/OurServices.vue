<template>
  <div class="our-services__container">
    <div class="services-info">
      <p class="heading">{{ $t('routes.services.heading') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Our-Services'
}
</script>

<style lang="scss" scoped>
.our-services__container {
  position: relative;
  overflow: hidden;
  background: #fff;
  margin: auto;
  width: 80%;
  padding: 3em 0 5em 0;
}
.services-info {
  margin: 0 auto;
  width: 65%;
}
p.heading {
  font-family: 'Oswald-VariableFont_wght';
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: #444;
  font-size: 36px;
  padding-bottom: 0.75rem;
  margin: 0 auto 1em auto;
  border-bottom: 0.1rem solid rgb(205, 205, 205);
}
p {
  color: #fff;
  text-align: left;
  font-size: 1.5rem;
  width: 50%;
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .our-services__container {
    width: 90%;
  }
  h2,
  p {
    text-align: center;
    width: 100%;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  h2 {
    &::before {
      width: 100%;
    }
  }
  .our-services__container {
    width: 100%;
        padding: 2em 0 0 0;
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  p.heading {
    font-size: 30px;
  }
  .services-info {
    width: 100%;
  }
  h2 {
    &::before {
      width: 93%;
    }
  }
}
</style>
