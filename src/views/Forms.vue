<template>
  <div class="forms__container">
    <div class="office">
      <p class="section-desc">{{ $t('routes.forms.dokument.heading') }}</p>
      <p v-for="file in dokument" :key="file.name" class="file-desc">
        {{ file.name }}
        <a :href="file.src">{{ $t('routes.forms.download_file') }}</a>
      </p>
    </div>
    <div class="biurokrat">
      <p class="section-desc">{{ $t('routes.forms.biurokrat.heading') }}</p>
      <p v-for="file in biurokrat" :key="file.name" class="file-desc">
        {{ file.name }}
        <a :href="file.src">{{ $t('routes.forms.download_file') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dokument: [
        {
          name: this.$t("routes.forms.dokument.p1"),
          src:
            "https://drive.google.com/uc?export=download&id=1hg8sjxhixVPnxCxhHv6XpAwJYmsui_Hh",
        },
        {
          name: this.$t("routes.forms.dokument.p2"),
          src:
            "https://drive.google.com/uc?export=download&id=1MeB7mEfpOxGuCwkomeh0BnCnxephCAB4",
        },
        {
          name: this.$t("routes.forms.dokument.p3"),
          src:
            "https://drive.google.com/uc?export=download&id=13wEFWDwcifnTkHHBt1v8Afd94Pjp4Tjs",
        },
        {
          name: this.$t("routes.forms.dokument.p4"),
          src:
            "https://drive.google.com/uc?export=download&id=16-03CbZC3IJCQbEd1y7PGDMSTfHQG41-",
        },
        {
          name: this.$t("routes.forms.dokument.p5"),
          src:
            "https://drive.google.com/uc?export=download&id=1LRGTSR1837IVm2ynJw9qR47ntzyK_yNJ",
        },
        {
          name: this.$t("routes.forms.dokument.p6"),
          src:
            "https://drive.google.com/uc?export=download&id=1UX4l54qJ2GmuMEbVHoSwxeRdGB-ir8mP",
        },
      ],
      biurokrat: [
        {
          name: this.$t("routes.forms.biurokrat.p1"),
          src:
            "https://drive.google.com/uc?export=download&id=1lp3dGdHy_BySTfxl6Hsej_kjnJBpl56a",
        },
        {
          name: this.$t("routes.forms.biurokrat.p2"),
          src:
            "https://drive.google.com/uc?export=download&id=1tlLWwbIIPe9xsrY5D6pVekhDZSGGebdX",
        },
        {
          name: this.$t("routes.forms.biurokrat.p3"),
          src:
            "https://drive.google.com/uc?export=download&id=1z_XRkBc7JgD_WQo6YYyI5nuyZVZ6gUqm",
        },
        {
          name: this.$t("routes.forms.biurokrat.p4"),
          src:
            "https://drive.google.com/uc?export=download&id=1-oRvMFe-n7S0TXJfWULRecw9EeX2Mfxf",
        },
        {
          name: this.$t("routes.forms.biurokrat.p5"),
          src:
            "https://drive.google.com/uc?export=download&id=1k-eLlhTmUYv8mUlREUnF70pHRKA4pzHO",
        },
        {
          name: this.$t("routes.forms.biurokrat.p6"),
          src:
            "https://drive.google.com/uc?export=download&id=1DIRzaLHZM7xHccPrPFt8ltR6VECC57mL",
        },
        {
          name: this.$t("routes.forms.biurokrat.p7"),
          src:
            "https://drive.google.com/uc?export=download&id=10ogPBZLnJ4yMliGXnKATF5DD0W3PiqbR",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.forms__container {
  width: 85%;
  background: #fff;
  margin: 0 auto;
  padding: 0.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.office,
.biurokrat {
  text-align: center;
  padding: 2.5em;
  flex-grow: 1;
  flex-basis: 0;
  font-family: "Oswald-VariableFont_wght";
}
.section-desc {
  font-size: 24px;
  padding: 1em 0;
  border-bottom: 1px solid #ccc;
}
a {
  font-weight: bold;
  &:hover {
    color: crimson;
  }
}
.file-desc {
  font-family: $primary-font;
  text-align: left;
  margin-top: 1em;
}
@media (max-width: 991.98px) {
  .forms__container {
    width: 100%;
  }
}
</style>
