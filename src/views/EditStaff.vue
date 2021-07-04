<template v-if="email">
  <div>
    <PageSpinner v-if="loading" />
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
      <div class="upload-data__container">
        <button @click="handleEdit">EDIT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import PageSpinner from "../components/widgets/PageSpinner";

export default {
  components: {
    PageSpinner,
  },
  data() {
    return {
      fileRef: "",
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
    ...mapMutations("staff", ["SET_FILE"]),
    ...mapActions("staff", ["get_staff_member", "edit_staff"]),
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
    handleEdit() {
      this.edit_staff({id: this.$route.params.id, updatedStaff: this.staff });
    },
    async handleFile(e) {
      const file = e.target.files[0];
      this.SET_FILE(file);
    },
  },
  computed: {
    ...mapState("staff", ["staff_member"]),
    ...mapState("user", ["email"]),
    ...mapState("widgets", ["loading"]),
  },
  watch: {
    staff_member: {
      handler(v) {
        this.staff = { created: v.created ,langs: v.langs };
        this.staff.fileRef = v.fileRef;
      },
      deep: true,
    },
  },
  created() {
    this.get_staff_member(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  font-size: 2rem;
}
.lang__container {
  display: flex;
  flex-direction: column;
  border: 2px solid #444;

  padding: 1rem;
  margin: 1rem 0;
}
.bg {
  background: rgb(4, 158, 63);
}
.en {
  background: rgb(85, 158, 255);
}
.pl {
  background: rgb(255, 72, 72);
}
.input-fields__container {
  margin: 0 auto;
  // width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input[type="file"] {
  border: 2px solid rgb(61, 61, 61);
  background: rgb(190, 190, 190);
  padding: 0.5rem 3rem;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
}
textarea,
input {
  color: #111;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 1rem;
  width: 100%;
}
.form__container {
  margin: 2rem auto;
  margin-bottom: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
}
button {
  background: #444;
  color: #fff;
  margin: 1rem 0;
  padding: 1rem;
  outline: none;
  border: 1px solid #333;
  width: 200px;
}
.paragraph__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(61, 61, 61);
  background: rgb(190, 190, 190);
  padding: 0.5rem 3rem;
  margin: 0.5rem;
  label {
    font-size: 1.5rem;
    color: #000;
  }
}
.upload-data__container {
  padding: 0.5rem;
  background: #fff;
  margin-bottom: 1rem;
}
</style>