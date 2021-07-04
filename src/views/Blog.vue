<template>
  <div>
    <PageSpinner v-if="loading" />
    <div v-else>
      <router-link class="link-admin" v-if="email" to="/admin">Към Админ Страницата</router-link>
      <p v-if="!posts.length" class="empty-blog">{{ $t('zero_posts') }}</p>
      <ul v-else class="blog-list">
        <BlogPost v-for="post in posts" :key="post.id" :show-if-admin="email" :data="post" />
      </ul>
    </div>
  </div>
</template>

<script>
import PageSpinner from "@/components/widgets/PageSpinner";
import BlogPost from "@/components/blog/Post";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    PageSpinner,
    BlogPost,
  },
  methods: {
    ...mapActions("blog_posts", ["fetch_all_posts"]),
  },
  computed: {
    ...mapState("user", ["email"]),
    ...mapState("blog_posts", ["posts", "loading"]),
  },
  created() {
    if (!this.posts.length) {
      this.fetch_all_posts();
    }
  },
};
</script>

<style lang="scss" scoped>
.empty-blog {
  text-align: center;
  margin: 2em auto 0 auto;
  padding: 0.5em 1em;
  background: #fff;
  font-size: 24px;
}
.link-admin {
  background: rgb(5, 131, 131);
  display: block;
  color: #fff;
  position: fixed;
  top: 12.6rem;
  left: 4rem;
  z-index: 999;
  font-size: 18px;
  padding: 0.5em;
  &:hover {
    background: rgb(6, 165, 165);
  }
}
.form__container {
  margin: 0.75em auto;
  text-align: center;
}
label {
  font-size: 1.5em;
}
.blog-list {
  width: 95%;
  margin: 4em auto 0 auto;
}
li {
  display: block;
  font-size: 5em;
}
@media (max-width: 475.98px) {
  .blog-list {
    width: 100%;
  }
}
</style>
