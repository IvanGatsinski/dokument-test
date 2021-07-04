<template>
  <div v-if="data">
    <div class="card__container" v-for="(card, i) in data" :key="i">
      <ModalView @close="close_modal" :is_open="ids[i]" :imgSrc="card.data.imgSrc" />
      <div class="card-img__container">
        <img @click="open_image(i)" :src="card.data.imgSrc" alt="dokument-card" />
      </div>
      <div class="card-description__container">
        <p class="card__job-position">{{ card.data.langs[$i18n.locale].heading }}</p>
        <div class="person__info">
          <p v-for="({text, id}) in card.data.langs[$i18n.locale].paragraphs" :key="id" class="text-info">{{ text }}</p>
        </div>
        <div class="card__hobbies">
          <p class="text-hobby">{{ card.data.langs[$i18n.locale].conclusion }}</p>
        </div>
      </div>
      <button v-if="email" @click="delete_staff({id: card.id, fileRef: card.data.fileRef})" class="action-btn--delete">DELETE</button>
      <button v-if="email" @click="$router.push({ name: 'edit-staff', params: { id: card.id } })" class="action-btn--update">EDIT</button>
    </div>
  </div>
</template>

<script>
import ModalView from "@/components/widgets/ModalView";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    ModalView,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      ids: [],
    };
  },
  computed: {
    ...mapState('user', ['email']),
  },
  methods: {
    ...mapActions('staff', ['delete_staff']),
    initialize_img_ids() {
      const arr = [];
      this.data.forEach(x => arr.push(false))
      this.ids = arr;
    },
    open_image(id) {
      let newArr = [...this.ids];
      newArr[id] = true;
      this.ids = newArr;
    },
    close_modal() {
      this.initialize_img_ids();
    },
  },
  watch: {
    data: {
      handler(v) {
        this.initialize_img_ids();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card__container {
  width: 90%;
  height: 100%;
  position: relative;
  display: flex;
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 3px 5px rgb(205, 205, 205);
  -moz-box-shadow: 0px 0px 3px 5px rgb(205, 205, 205);
  box-shadow: 0px 0px 3px 5px rgb(205, 205, 205);
  margin: 3em auto;
  &:first-child {
    margin-top: 0;
  }
  .action-btn--delete,
  .action-btn--update {
    position: absolute;
    right: 0;
    padding: 0.5rem 1rem;
  }
  .action-btn--update {
    top: 0;
    color: #FFF;
    font-weight: bold;
    background: green;
  }
  .action-btn--delete {
    color: #FFF;
    font-weight: bold;
    background: red;
    bottom: 0;
  }
}
.card-img__container {
  width: 20%;
  padding: 1em;
  display: flex;
  align-items: flex-start;
  img {
    width: 100%;
    cursor: pointer;
  }
}
.card__job-position {
  font-family: $secondary-font;
  font-size: 26px;
  margin-bottom: 1em;
  padding-bottom: 0.5em;

  border-bottom: 1px solid rgb(225, 225, 225);
}
.card-description__container {
  width: 80%;

  padding: 1em;
}

.text-info {
  margin-bottom: 0.5em;
}

.text-hobby {
  font-style: italic;
  margin-top: 2em;
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .card__container {
    width: 100%;
    &:first-child {
      margin-top: 3em;
    }
  }
}
</style>
