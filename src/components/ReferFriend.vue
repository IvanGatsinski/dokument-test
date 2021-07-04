<template>
  <div class="refer__container">
    <div class="headings__container">
      <div class="title">
        {{ $t('routes.promotions.accounting.heading_1') }}
      </div>
      <div class="title">
        {{ $t('routes.promotions.accounting.heading_2') }}
      </div>
    </div>

    <div class="descr__container">
      <p class="text">
        {{ $t('routes.promotions.accounting.intro.p1') }}
      </p>
      <p class="text">{{ $t('routes.promotions.accounting.intro.p2') }}</p>
      <p class="text">
        {{ $t('routes.promotions.accounting.intro.p3') }}
      </p>
    </div>

    <p class="heading">
      {{ $t('routes.promotions.accounting.container_1.heading') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_1.p1') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_1.p2') }}
    </p>

    <p class="heading">
      {{ $t('routes.promotions.accounting.container_2.heading') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_2.p1') }}
    </p>
    <p class="text">
      {{ $t('routes.promotions.accounting.container_2.p2') }}
    </p>

    <p class="heading">
      {{ $t('routes.promotions.accounting.container_3.heading') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_3.p1') }}
    </p>
    <p class="text">
      {{ $t('routes.promotions.accounting.container_3.p2') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_3.p3') }}
    </p>

    <p class="text">
      {{ $t('routes.promotions.accounting.container_3.p4') }}
    </p>

    <div class="terms__container">
      <p class="terms">
        {{ $t('routes.promotions.accounting.terms.p1') }}
      </p>
      <p class="terms">
        {{ $t('routes.promotions.accounting.terms.p2') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.refer__container {
  background-color: #fff;
  width: 80%;
  margin: auto;
  padding: 3em 10em 5em 10em;
  font-size: 18px;
  border: 1px solid #ccc;
  margin-bottom: 3em;
}
.headings__container {
  font-family: 'Oswald-VariableFont_wght';
  text-align: center;
  font-size: 28px;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
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
    content: '';
    width: 350px;
    height: 1px;
    background: rgba(220, 20, 60, 0.2);
  }
}
.descr__container {
  text-align: center;
}
.text {
  margin: 0.5em 0;
}

.terms__container {
  margin-top: 2em;
  padding-top: 0.5em;
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
  h3 {
    font-size: 1.9rem;
  }
}
@media (max-width: 575.98px) {
  .descr__container {
    text-align: left;
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
