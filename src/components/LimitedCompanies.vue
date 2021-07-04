<template>
  <div class="limited-companies__container">
    <p class="heading">{{ $t('routes.accounting.heading') }}</p>
    <div class="paragraphs__container">
      <div v-for="(value, key, i) in limited_companies.paragraphs" :key="i">
        <p class="decorator-text">
          <span class="paragraph__heading">{{ value.heading }}</span>
        </p>
        <ul>
          <li class="paragraph__text" v-for="text in value.texts" :key="text">
            <span class="icon__container">
              <font-awesome-icon class="icon-check" icon="check" />
            </span>
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="break-line"></div>
    <div class="bottom-paragraphs__container">
      <ServiceParagraph
        v-for="(paragraph, i) in $t('routes.accounting.bottom')"
        :key="i"
        :data="paragraph"
        :has_arrow_down="i === $t('routes.accounting.bottom').length -1 ? false : true"
      />
    </div>
    <div class="disclaimer">
      <p>{{ $t('routes.accounting.footer') }}</p>
    </div>
  </div>
</template>

<script>
import ServiceParagraph from "@/components/ServiceParagraph";

export default {
  components: {
    ServiceParagraph,
  },
  computed: {
    limited_companies() {
      return {
        title: "Счетоводни услуги",
        paragraphs: {
          left: {
            heading: "Limited Companies",
            texts: [
              "Bookkeeping",
              "Year End Accounts",
              "Corporation Tax Return",
              "CIS returns and CIS statements for subcontractors",
              "Payroll",
              `VAT returns ${this.$t(
                "routes.accounting.top.limited_companies.vat_returns"
              )}`,
              `${this.$t(
                "routes.accounting.top.limited_companies.ltd"
              )} (Limited Company)`,
            ],
          },
          right: {
            heading: "Sole Trader / self employed",
            texts: [
              this.$t("routes.accounting.top.solo_trader.register"),
              `${this.$t(
                "routes.accounting.top.solo_trader.decl"
              )} (self assessment tax return)`,
              `VAT Returns ${this.$t("routes.accounting.top.solo_trader.vat")}`,
            ],
          },
          last: {
            heading: this.$t("routes.accounting.top.insurance.heading"),
            texts: [
              this.$t("routes.accounting.top.insurance.importance"),
              this.$t("routes.accounting.top.insurance.employer"),
              this.$t("routes.accounting.top.insurance.responsible"),
            ],
          },
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.limited-companies__container {
  width: 80%;
  position: relative;
  margin: 0 auto;
  top: 0;
  background: rgba(235, 235, 235, 0.95);
  padding: 2em;
}
p.heading {
  font-family: $secondary-font;
  font-weight: 400;
  text-align: center;
  width: 65%;
  color: #444;
  font-size: 36px;
  padding-bottom: 0.75rem;
  margin: 0 auto 1em auto;
  border-bottom: 0.1rem solid rgb(205, 205, 205);
}
.break-line {
  margin: 5em 0;
  border: 1px solid rgb(205, 205, 205);
}
.bottom-paragraphs__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.paragraph__heading {
  position: relative;
  padding: 1em;
  font-family: $secondary-font;
  margin-bottom: 0.5em;
  display: inline-block;
  font-size: 2.5rem;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    bottom: 0;
    border: 1px solid rgb(100, 100, 100);
  }
}
.paragraphs__container {
  display: flex;
  justify-content: center;
  div {
    position: relative;
    width: 70%;
  }
}
.paragraph__text {
  position: relative;
  // font-family: Roboto-Light;
  font-size: 16px;
  padding: 0.5em 1em 0.5em 3em;
  display: block;
}
.icon__container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  color: $checkmark-color;
}
.icon-check {
  position: relative;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
}
.find-more__btn,
.find-more__btn--xsm {
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: -5.3rem;
  display: flex;
  align-items: center;
  font-family: OpenSans-SemiBold;
  color: #fff;
}
.find-more__btn--xsm {
  display: none;
}
.plus {
  padding: 1.5rem;
  background: rgb(100, 100, 100);
}
.text {
  padding: 1.5rem;
  background: crimson;
  transition: 0.5s;
  &:hover {
    background-color: rgb(100, 100, 100);
  }
}

.disclaimer {
  padding: 1em 2em;
  width: 100%;
  p {
    font-size: 17px;
    text-align: center;
    color: #333;
    font-style: italic;
  }
}
//Custom
@media (max-width: 1399.98px) {
  .limited-companies__container {
    width: 100%;
  }
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  h1 {
    font-size: 3rem;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .limited-companies__container {
    padding: 0;
    //margin-bottom: 8em;
    position: relative;
    bottom: 4rem;
    transform: translateX(-50%);
    left: 50%;
  }
  .paragraphs__container {
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  h1 {
    font-size: 5vw;
  }
  p.heading {
    padding-top: 0.75em;
    font-size: 30px;
  }
  .decorator-text {
    font-size: 1.5rem;
  }
  .find-more__btn {
    display: none;
  }
  .find-more__btn--xsm {
    display: block;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    bottom: -7rem;
  }
  .text-xsm {
    border-radius: 40px;
    padding: 1em;
    background: rgb(100, 100, 100);
  }
  .limited-companies__container {
    bottom: -3rem;
    //margin-bottom: 18em;
  }
}
</style>
