<template>
  <div class="service__container">
    <div class="service__grid">
      <ServiceParagraph
        v-for="(paragraph, i) in $t('routes.services.paragraphs')"
        :key="i"
        :data="paragraph"
        :has_arrow_down="i === $t('routes.services.paragraphs').length -1 ? false : true"
      />
    </div>
  </div>
</template>

<script>
import ServiceParagraph from "@/components/ServiceParagraph";

export default {
  name: "Our-Services-Grid",
  components: {
    ServiceParagraph,
  },
};
</script>

<style lang="scss" scoped>
.service__container {
  position: relative;
}
.service__grid {
  transform: translateY(-3rem);
  background: rgba(235, 235, 235, 0.95);
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .service__grid {
    width: 90%;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .service__grid {
    transform: translateY(0);
    width: 100%;
  }
  h2 {
    font-size: 24px;
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .service__grid {
    width: 100%;
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
}
</style>
