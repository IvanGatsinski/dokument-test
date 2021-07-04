<template>
  <div>
    <PageSpinner v-if="loading" />
    <div class="fake-body"></div>
    <div class="input-fields__container" v-if="!email">
      <label for="email">Email:</label>
      <input v-model="form_data.email" id="email" type="text" />
      <label for="pass">Password:</label>
      <input v-model="form_data.password" id="pass" type="password" />
      <button @click="signIn">Login</button>
    </div>

    <!-- <template v-if="email">
      <div class="form__container">
        <div>
          <label for="file">Upload file</label>
          <input @change="handleFile" type="file" name="file" id="file" />
        </div>
        <div>
          <label for="heading">Heading</label>
          <input
            v-model="staff.heading"
            type="text"
            name="heading"
            id="heading"
          />
        </div>
        <div>
          <label for="content">Content</label>
          <input
            v-model="staff.content"
            type="text"
            name="content"
            id="content"
          />
        </div>
        <button @click="handleUpload">Upload data</button>
      </div> -->

      <!-- <h2>Преглед на живо BG</h2>
        <BlogPost explicit_lang="bg" :data="post_data" :show-if-admin="''" /> -->
    <!-- </template> -->

    <!-- <div v-if="email" class="form__container">
      <div class="input__section">
        <h2>Заглавие на поста - BG</h2>
        <label for="heading">Име на заглавие</label>
        <input v-model="post_data.bg.heading" type="text" id="heading" />
      </div>
      <div class="input__section">
        <h2>Съдържание на поста</h2>
        <vue-editor v-model="post_data.bg.content" />
      </div>
    </div>

    <div v-if="email" class="form__container">
      <div class="input__section">
        <h2>Заглавие на поста - EN</h2>
        <label for="heading">Име на заглавие</label>
        <input v-model="post_data.en.heading" type="text" id="heading" />
      </div>
      <div class="input__section">
        <h2>Съдържание на поста</h2>
        <vue-editor v-model="post_data.en.content" />
      </div>
    </div>

    <div v-if="email" class="form__container">
      <div class="input__section">
        <h2>Заглавие на поста - PL</h2>
        <label for="heading">Име на заглавие</label>
        <input v-model="post_data.pl.heading" type="text" id="heading" />
      </div>
      <div class="input__section">
        <h2>Съдържание на поста</h2>
        <vue-editor v-model="post_data.pl.content" />
      </div>
    </div>
    <br />
    <div class="btns__container">
      <button
        v-if="$route.params.post_id"
        @click="handle_edit_post"
        :disabled="check_if_all_fields_are_empty"
      >Запази промените</button>
      <button v-else-if="email && !$route.params.post_id" @click="handle_create_post" :disabled="check_if_all_fields_are_empty">Добави</button>
    </div> -->
    <br />
  </div>
</template>

<script>
import PageSpinner from "@/components/widgets/PageSpinner";
import { VueEditor } from "vue2-editor";
import { mapActions, mapState, mapMutations } from "vuex";
import BlogPost from "@/components/blog/Post";

export default {
  components: {
    PageSpinner,
    VueEditor,
    BlogPost,
  },
  data() {
    return {
      // post_data: {
      //   date_published: Date.now(),
      //   bg: {
      //     heading: "",
      //     content: "",
      //   },
      //   en: {
      //     heading: "",
      //     content: "",
      //   },
      //   pl: {
      //     heading: "",
      //     content: "",
      //   },
      // },
      form_data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // handleUpload() {
    //   this.add_staff(this.staff);
    // },
    // async handleFile(e) {
    //   const file = e.target.files[0];
    //   this.SET_FILE(file);
    // },
    // ...mapMutations("staff", ["SET_FILE"]), // TODO
    // ...mapActions("staff", ["add_staff", "delete_staff"]),
    ...mapActions("user", ["sign_in"]),
    ...mapActions("blog_posts", ["create_post", "fetch_post", "update_post"]),
    async signIn() {
      this.sign_in({
        email: this.form_data.email,
        password: this.form_data.password,
      });
    },
    async signOut() {
      this.sign_out();
    },
    handle_edit_post() {
      this.update_post({
        id: this.$route.params.post_id,
        date_published: this.post_data.date_published,
        bg: {
          heading: this.post_data.bg.heading,
          content: this.post_data.bg.content,
        },
        en: {
          heading: this.post_data.en.heading,
          content: this.post_data.en.content,
        },
        pl: {
          heading: this.post_data.pl.heading,
          content: this.post_data.pl.content,
        },
      });

      this.$router.push("/blog");
    },
    handle_create_post() {
      this.create_post({
        date_published: this.post_data.date_published,
        bg: {
          heading: this.post_data.bg.heading,
          content: this.post_data.bg.content,
        },
        en: {
          heading: this.post_data.en.heading,
          content: this.post_data.en.content,
        },
        pl: {
          heading: this.post_data.pl.heading,
          content: this.post_data.pl.content,
        },
      });

      this.$router.push("/blog");
    },
  },
  computed: {
    ...mapState("user", ["email"]),
    ...mapState("blog_posts", ["post", "loading"]),
    post_id() {
      return this.$route.params.post_id;
    },
    check_if_all_fields_are_empty() {
      if (
        this.post_data.bg.heading === "" &&
        this.post_data.bg.content === "" &&
        this.post_data.en.heading === "" &&
        this.post_data.en.content === "" &&
        this.post_data.pl.heading === "" &&
        this.post_data.pl.content === ""
      ) {
        return true;
      }
    },
  },
  watch: {
    post(v) {
      if (v) {
        this.post_data = v;
      }
    },
  },
  created() {
    if (this.post_id) {
      this.fetch_post(this.post_id);
    }
  },
};
</script>

<style lang="scss" scoped>
.fake-body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #fff;
}
input {
  font-size: 2rem;
  width: 30%;
}
h2 {
  text-align: center;
  border-bottom: 1px solid rgb(223, 223, 223);
  margin: 1rem auto;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  width: 30%;
  display: block;
}
.btns__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background: rgb(0, 175, 67);
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 40px;
  &:focus {
    border: none;
    outline: none;
  }
  &:disabled {
    background-color: #ccc;
  }
}
// .input-fields__container {
//   margin: 0 auto;
//   // width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   input,
//   button {
//     margin: 0.5rem;
//   }
// }
// .form__container {
//   margin: 2rem auto;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   background: rgb(238, 238, 238);
// }

label {
  padding: 0.25em;
  color: #333;
  font-size: 1.5rem;
}
li {
  display: block;
  font-size: 5rem;
}
.input__section {
  margin: 3rem;
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  input {
    width: 60%;
  }
}
</style>
