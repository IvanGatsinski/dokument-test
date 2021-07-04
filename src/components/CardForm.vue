<template>
  <div class="form__container">
    <div>
      <label for="file">Upload file</label>
      <input @change="handleFile" type="file" name="file" id="file" />
    </div>
    <div v-for="(value, lang) in staff.langs" :key="lang">
      <div class="lang__container" :class="lang">
        <h2>{{ lang }} FORM</h2>
        <div class="paragraph__container">
          <label for="heading">Heading</label>
          <input
            v-model="value.heading"
            type="text"
            name="heading"
            id="heading"
          />
        </div>
        <button @click="add_paragraph">Add Paragraph</button>
        <div
          v-for="(p, index) in value.paragraphs"
          :key="p.id"
          class="paragraph__container"
        >
          <label :for="p.id">Paragraph {{ ++index }}</label>
          <textarea v-model="p.text" type="text" :name="p.id" :id="p.id" />
          <button @click="remove_paragraph(p.id)">
            Remove Paragraph {{ index }}
          </button>
        </div>
        <div class="paragraph__container">
          <label :for="lang">Conclusion</label>
          <input
            v-model="value.conclusion"
            type="text"
            :name="lang"
            :id="lang"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staff: {
        langs: {
          bg: {
            heading: "",
            paragraphs: [{ id: Date.now(), text: "" }],
            conclusion: "",
          },
          en: {
            heading: "",
            paragraphs: [{ id: Date.now(), text: "" }],
            conclusion: "",
          },
          pl: {
            heading: "",
            paragraphs: [{ id: Date.now(), text: "" }],
            conclusion: "",
          },
        },
      },
    };
  },
  methods: {
    add_paragraph() {
      for (const lang in { ...this.staff.langs }) {
        this.staff.langs[lang].paragraphs.push({ id: Date.now(), text: "" });
      }
    },
    remove_paragraph(id) {
      for (const lang in { ...this.staff.langs }) {
        this.staff.langs[lang].paragraphs = { ...this.staff.langs }[
          lang
        ].paragraphs.filter((p) => p.id !== id);
      }
    },
    async handleFile(e) {
      const file = e.target.files[0];
      this.SET_FILE(file);
    },
  },
};
</script>

<style>
</style>