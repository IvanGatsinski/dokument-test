<template>
  <div v-if="blog_post_is_valid">
    <div class="img__container-post-xs">
      <img src="@/assets/imgs/web2/doKument_logo_1.png" alt="logo" />
    </div>
    <div class="live-example">
      <div v-if="showIfAdmin" class="delete__btn" @click="handle_delete_post(data)">изтрий</div>
      <div v-if="showIfAdmin" class="edit__btn" @click="handle_edit_post(data.id)">редактирай</div>
      <div class="example-author__section">
        <div class="img__container-post">
          <img src="@/assets/imgs/web2/doKument_logo_1.png" alt="logo" />
        </div>

        <div class="date">
          <p class="published">{{ $t('published') }}</p>
          {{ published(new Date(data.date_published)) }}
        </div>
      </div>
      <div class="example-heading__container">
        <h2 class="example-heading">{{ current_lang_data.heading }}</h2>
        <div v-html="current_lang_data.content" class="example-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    data: Object,
    showIfAdmin: String,
    explicit_lang: String,
  },
  computed: {
    current_lang_data() {
      const obj = this.data.date_published;

      if (this.explicit_lang) {
        return this.data[this.explicit_lang];
      }
      return this.data[this.$i18n.locale];
    },
    blog_post_is_valid() {
      for (const key in this.data[this.$i18n.locale]) {
        const value = this.data[this.$i18n.locale][key];

        if (value === "") return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions("blog_posts", ["delete_post"]),
    handle_edit_post(post_id) {
      this.$router.push({ name: "admin", params: { post_id } });
    },
    handle_delete_post(post) {
      this.delete_post(post);
    },
    published(date_in_milliseconds) {
      const monthNames = {
        bg: [
          "Януари",
          "Февруари",
          "Март",
          "Април",
          "Май",
          "Юни",
          "Юли",
          "Август",
          "Септември",
          "Октомври",
          "Ноември",
          "Декември",
        ],
        en: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        pl: [
          "Styczeń",
          "Luty",
          "Marsz",
          "Kwiecień",
          "Może",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień",
        ],
      };
      const locale = this.explicit_lang || this.$i18n.locale;

      let dateObj = new Date(date_in_milliseconds);
      let month = monthNames[locale][dateObj.getMonth()];
      let day = String(dateObj.getDate()).padStart(2, "0");
      let year = dateObj.getFullYear();
      let date = `${day} ${month} ${year}`;

      return date;
    },
  },
};
</script>

<style lang="scss">
.img__container-post,
.img__container-post-xs {
  position: relative;
  display: flex;
  justify-content: center;
  //   width: 20rem;
  img {
    width: 15rem;
    height: 100%;
  }
}
.img__container-post-xs {
  -webkit-box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  -moz-box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  display: none;
  width: 100%;
  background: #fff;
  height: 100%;
}
.example-author__section {
  width: 15%;
  padding: 1em 2em;
  background: rgba(245, 245, 245, 0.5);
  border-right: 2px solid rgb(240, 240, 240);
}

.live-example {
  position: relative;
  border: 2px solid rgb(225, 225, 225);
  border-bottom: none;
  //border-bottom: 2px solid rgb(225, 225, 225);
  -webkit-box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  -moz-box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  box-shadow: 0px 0px 15px 3px rgba(224, 224, 224, 1);
  display: flex;
  //padding: 1rem 0rem 1rem 2rem;
  background: rgb(253, 253, 253);
  margin: 2em auto;
  margin-top: 0;
  width: 100%;
}
.delete__btn,
.edit__btn {
  cursor: pointer;
  position: absolute;
  z-index: 9999;
  font-weight: bolder;
  font-size: 1rem;
  letter-spacing: 1.25px;
  top: 0;
  right: 0;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
  background: rgb(255, 67, 67);
  margin: 0;
  padding: 0.75em;
}
.edit__btn {
  background: rgb(47, 141, 52);
  right: 7rem;
}
.example-heading__container {
  width: 85%;
  margin-top: 2em;
  padding-left: 2em;
}
.published {
  color: rgb(130, 130, 130);
  font-size: 1.2rem;
  margin-bottom: 0.5em;
}
.date {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 1em;
  color: rgb(130, 130, 130);
  letter-spacing: 1.5px;
}
.example-heading {
  position: relative;
  word-wrap: break-word;
  color: #555;
  //font-family: Raleway-Light;
  font-size: 28px;
  //padding-bottom: 1em;
  margin-bottom: 1.2em;
  letter-spacing: 2px;
  //   text-align: center;
  &::before {
    position: absolute;
    content: "";
    bottom: -1rem;
    width: 100%;
    height: 1px;
    background: rgba(128, 0, 0, 0.1);
  }
}
.example-content {
  word-wrap: break-word;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: rgb(130, 130, 130);
}

// Vue Editor classes

.ql-align-right {
  text-align: right;
}
.ql-align-center {
  text-align: center;
}
.ql-align-justify {
  text-align: justify;
}
.ql-indent-1 {
  padding-left: 2em;
}
.ql-indent-2 {
  padding-left: 4em;
}
.ql-indent-3 {
  padding-left: 6em;
}
.ql-indent-4 {
  padding-left: 8em;
}
.ql-indent-5 {
  padding-left: 10em;
}
.ql-indent-6 {
  padding-left: 12em;
}
.ql-indent-7 {
  padding-left: 14em;
}
.ql-indent-8 {
  padding-left: 16em;
}
blockquote {
  font-style: italic;
  background: #f9f9f9;
  border-left: 5px solid #ccc;
  //margin: 1.5em 10px;
  padding: 0.1em 1em;
  //  quotes: '\201C''\201D''\2018''\2019';
}
blockquote:before {
  color: #ccc;
  //   content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.ql-syntax {
  font-size: 2rem;
  background-color: #3b3b3b;
  color: #f8f8f2;
  overflow: visible;
  white-space: pre-wrap;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  padding: 1em 2em;
}

// media queries below

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .example-author__section {
    width: 20%;
  }
  .example-heading__container {
    width: 80%;
    padding: 1.5rem 3rem;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .example-author__section {
    background: transparent;
    border-right: none;
  }
  .live-example {
    flex-direction: column;
  }
  .example-heading__container {
    width: 100%;
    margin: 0;
  }
  .example-author__section {
    width: 100%;
    display: flex;
    padding-right: 2rem;
    background: rgba(240, 240, 240, 0.5);
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .img__container-post {
    justify-content: flex-start;
    width: 50%;
    img {
      width: 12rem;
      height: 100%;
    }
  }
  .date {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2rem;
    .published {
      margin-bottom: 0;
      margin-right: 0.5em;
    }
  }
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .example-author__section {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
  .img__container-post {
    display: none;
  }

  .img__container-post-xs {
    display: flex;
  }
  .date {
    width: 80%;
    margin-right: 0;
    justify-content: center;
    //align-items: flex-start;
  }
  @media (max-width: 575.98px) {
    .example-heading__container {
      padding: 1.5rem 1.2rem;
    }
    .example-heading {
      font-size: 20px;
    }
  }
}
</style>
