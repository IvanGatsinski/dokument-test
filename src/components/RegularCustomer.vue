<template>
  <div class="refer__container">
    <div class="headings__container">
      <div class="title">{{ $t('routes.promotions.services.heading_1') }}</div>
      <div class="title">{{ $t('routes.promotions.services.heading_2') }}</div>
    </div>

    <div class="descr__container">
      <p class="text">{{ $t('routes.promotions.services.intro.p1') }}</p>
      <p class="text">{{ $t('routes.promotions.services.intro.p2') }}</p>
      <p class="text">{{ $t('routes.promotions.services.intro.p3') }}</p>
    </div>

    <p class="heading">{{ $t('routes.promotions.services.container_1.heading') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_1.p1') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_1.p2') }}</p>

    <p class="heading">{{ $t('routes.promotions.services.container_2.heading') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_2.p1') }}</p>

    <ul>
      {{
      $t('routes.promotions.services.container_2.list.heading')
      }}
      <li>{{ $t('routes.promotions.services.container_2.list.items.p1') }}</li>
      <li>{{ $t('routes.promotions.services.container_2.list.items.p2') }}</li>
      <li>{{ $t('routes.promotions.services.container_2.list.items.p3') }}</li>
    </ul>

    <div class="terms__container">
      <p class="terms">{{ $t('routes.promotions.services.container_2.list.conclusion') }}</p>
    </div>

    <p class="heading">{{ $t('routes.promotions.services.container_3.heading') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_3.p1') }}</p>
    <p class="text">{{ $t('routes.promotions.services.container_3.p2') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_3.p3') }}</p>

    <p class="text">{{ $t('routes.promotions.services.container_3.p4') }}</p>

    <div class="terms__container">
      <p class="terms">{{ $t('routes.promotions.services.container_3.conclusion') }}</p>
      <p class="terms">{{ $t('routes.promotions.services.footer') }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.refer__container {
  background-color: #fff;
  width: 80%;
  margin: auto;
  padding: 3em 7.5em 5em 7.5em;
  font-size: 18px;
  border: 1px solid #ccc;
  margin-bottom: 3em;
}
.headings__container {
  font-family: $secondary-font;
  text-align: center;
  font-size: 28px;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
}
.descr__container {
  margin: 2em 0;
  text-align: center;
  p {
    font-style: italic;
    margin: 0.5em 0;
  }
}
.heading {
  position: relative;
  font-weight: bold;
  color: #333;
  font-size: 18px;
  margin: 3em 0 1em 0;
  &::before {
    position: absolute;
    top: 100%;
    content: "";
    width: 350px;
    height: 1px;
    background: rgba(220, 20, 60, 0.2);
  }
}
.text {
  margin-bottom: 0.25em;
}
.terms__container {
  margin-top: 2em;
  padding-top: 0.5em;
}
ul {
  margin: 1.5em 0;
  font-size: 16px;
}
li {
  margin-top: 0.2em;
  margin-left: 2.5em;
  list-style: disc;
}
.terms {
  color: rgb(163, 16, 45);
  font-weight: bold;
}

@media (max-width: 1199.98px) {
  .refer__container {
    padding: 3em 3em 5em 3em;
  }
}
@media (max-width: 991.98px) {
  .refer__container {
    width: 100%;
  }
}
@media (max-width: 767.98px) {
  .refer__container {
    padding: 3em 1em 5em 1em;
    margin-bottom: 0;
  }
}
@media (max-width: 575.98px) {
  .descr__container {
    text-align: left;
  }
  li {
    margin-left: 2em;
  }
  .headings__container {
    margin-bottom: 2em;
    font-size: 24px;
  }
  .heading {
    text-align: center;
    &::before {
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
  }
}
</style>
