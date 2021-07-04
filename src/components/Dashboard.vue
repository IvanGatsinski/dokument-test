<template>
  <div>
    <div class="dashboard__container">
      <p class="text">
        <span class="title">DoKument Ltd </span>
        {{ $t('routes.welcome.intro') }}
      </p>
      <p class="heading">{{ $t('routes.welcome.heading') }}</p>
      <p class="text">
        {{ $t('routes.welcome.p1') }}
      </p>
      <p class="text">
        {{ $t('routes.welcome.p2') }}
      </p>
      <p class="text">
        {{ $t('routes.welcome.p3') }}
        <router-link to="/accounting">{{
          $t('routes.welcome.span_here')
        }}</router-link
        >.
      </p>
      <p class="text">
        {{ $t('routes.welcome.p4') }}
        <router-link to="/services">{{
          $t('routes.welcome.span_here')
        }}</router-link
        >.
      </p>
      <p class="text">
        {{ $t('routes.welcome.p5') }}
      </p>
      <p class="text">
        {{ $t('routes.welcome.p6') }}
        <router-link to="/accounting-promotions">{{
          $t('routes.welcome.span_here')
        }}</router-link
        >.
      </p>
      <p class="text trust">{{ $t('routes.welcome.conclusion') }}</p>
    </div>
    <div class="info__container">
      <ul class="info">
        <li class="address">
          <ul>
            <li class="info-item">
              <span class="office"
                >{{ $t('routes.welcome.footer.office') }} DoKument</span
              >
            </li>
            <li class="info-item">Office 1</li>
            <li class="info-item">37 Marsh Parade</li>
            <li class="info-item">Newcastle-under-Lyme</li>
            <li class="info-item">ST5 1BT</li>
          </ul>
        </li>
        <br />
        <li class="work-time__container">
          <ul>
            <li class="info-item work-time">
              <span class="open-hours">{{
                $t('routes.welcome.footer.open_hours')
              }}</span>
            </li>
            <li class="info-item work-time">
              {{ $t('monday') }} 09.00 – 18.00
            </li>
            <li class="info-item work-time">
              {{ $t('tuesday') }} 09.00 – 18.00
            </li>
            <li class="info-item work-time">
              {{ $t('wednesday') }} 09.00 – 18.00
            </li>
            <li class="info-item work-time">
              {{ $t('thursday') }} 09.00 – 18.00
            </li>
            <li class="info-item work-time">
              {{ $t('friday') }} 09.00 – 18.00
            </li>
          </ul>
        </li>
      </ul>
      <ul class="info">
        <li class="address">
          <ul>
            <li class="info-item">
              <span class="office"
                >{{ $t('routes.welcome.footer.office') }} Biurokrat</span
              >
            </li>
            <li class="info-item">124 West Street</li>
            <li class="info-item">Crewe</li>
            <li class="info-item">CW1 3HG</li>
            <li class="hidden">Hidden</li>
          </ul>
        </li>
        <br />
        <li class="work-time__container">
          <ul>
            <li class="info-item work-time">
              <span class="open-hours">{{
                $t('routes.welcome.footer.open_hours')
              }}</span>
            </li>
            <li class="info-item work-time">
              {{ $t('monday') }} 10.00 – 17.00
            </li>
            <li class="info-item work-time">
              {{ $t('tuesday') }} 10.00 – 17.00
            </li>
            <li class="info-item work-time">
              {{ $t('wednesday') }} 10.00 - 17.00
            </li>
            <li class="info-item work-time">
              {{ $t('thursday') }} 10.00 – 15.00
            </li>
            <li class="info-item work-time">
              {{ $t('friday') }} 10.00 - 17.00
            </li>
            <li class="info-item work-time">
              {{ $t('saturday') }} 10.30 - 13.30
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.open-hours {
  font-style: italic;
  margin-bottom: 0.5em;
  border-bottom: 2px solid #595959;
  display: block;
  font-size: 20px;
}
.dashboard__container {
  -webkit-box-shadow: 0px 0px 15px 5px #ccc;
  -moz-box-shadow: 0px 0px 15px 5px #ccc;
  box-shadow: 0px 0px 15px 5px #ccc;
  position: relative;
  width: 85%;
  padding: 3em 5em 5em 5em;
  background-color: rgba(255, 255, 255, 0.97);
  font-size: 18px;
  margin: 0 auto 2em auto;
}
.heading {
  font-family: Oswald-VariableFont_wght;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: #444;
  font-size: 34px;
  padding-bottom: 0.75rem;
  margin: 0 auto 1em auto;
  border-bottom: 0.1rem solid #cdcdcd;
}
.text {
  margin-bottom: 2em;
  &:nth-child(1) {
    font-style: italic;
  }
  &:last-child {
    margin-bottom: 0;
    font-style: italic;
  }
}
.office {
  display: block;
  color: #fff;
  font-size: calc(14px * 1.618);
  margin-bottom: 0.5em;
  border-bottom: 2px solid darken(#666, 5%);
}
.title {
  font-weight: bolder;
  font-size: 18px;
  color: #444;
}
.trust {
  font-size: 21px;
  // font-weight: bold;
  //color: rgb(112, 111, 111);
}
.hidden {
  opacity: 0;
}
.info__container {
  position: relative;
  background: #333;
  font-size: 16px;
  display: flex;
  color: #ccc;
  justify-content: space-around;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 200px;
    width: 100%;
    //border-top: 2px solid crimson;

    background: darken(#555, 8%); //=> color ;
    z-index: -1;
  }
}
.address,
.work-time__container {
  margin: 1em 0;
}
.info-item {
  // margin: 0.25em 0;
  font-size: 16px;
}
.work-time {
  font-size: 16px;
  // font-weight: bold;
}
a {
  font-weight: bold;
}
@media (max-width: 1199.98px) {
  .dashboard__container {
    padding: 2em 4em;
  }
}
@media (max-width: 991.98px) {
  .dashboard__container {
    width: 100%;
    padding: 1em 2em;
  }
}
@media (max-width: 767.98px) {
  .dashboard__container {
    margin-bottom: 0;
  }
  .info__container {
    background: #444;
    flex-direction: column;
    text-align: center;
    &::after {
      background: #444; //=> color ;
    }
    .address {
      margin-top: 0;
      ul {
        li:first-child {
          .office {
            border-bottom: none;
            font-family: Oswald-VariableFont_wght;
            background: rgb(167, 0, 33);
            padding: 0.2em 0;
            // margin: 0;
            border: none;
          }
        }
      }
    }
  }
  .info {
    padding-bottom: 0.5em;
    border-bottom: none;
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .dashboard__container {
    padding: 3em 1em 5em 1em;
  }
}
</style>
