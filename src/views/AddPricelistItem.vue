<template>
  <div v-if="email">
    <h1>{{ $route.params.id }}</h1>
    <PageSpinner v-if="loading" />
    <div v-if="email" class="price-item__container">
      <div class="price-item bg">
        <label for="contentTextbg">Text BG</label>
        <input
          v-model="pricelistItem.langs['bg'].text"
          type="text"
          id="contentTextbg"
        />
      </div>
      <div class="price-item en">
        <label for="contentTexten">Text EN</label>
        <input
          v-model="pricelistItem.langs['en'].text"
          type="text"
          id="contentTexten"
        />
      </div>
      <div class="price-item pl">
        <label for="contentTextpl">Text PL</label>
        <input
          v-model="pricelistItem.langs['pl'].text"
          type="text"
          id="contentTextpl"
        />
      </div>
      <div class="price-item price">
        <label for="price">Price</label>
        <input v-model="pricelistItem.price" type="text" id="price" />
      </div>
      <button @click="handleAdd">Add Item</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PageSpinner from '../components/widgets/PageSpinner'

export default {
  components: {
    PageSpinner
  },
  data () {
    return {
      pricelistItem: {
        created: new Date(),
        price: '',
        langs: {
          bg: {
            text: ''
          },
          en: {
            text: ''
          },
          pl: {
            text: ''
          }
        }
      }
    }
  },
  computed: {
    ...mapState('user', ['email']),
    ...mapState('widgets', ['loading'])
  },
  methods: {
    ...mapActions('pricelist', ['add_pricelist_item']),
    handleAdd () {
      this.add_pricelist_item(this.pricelistItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  background: #444;
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
.price-item {
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  &__container {
    margin-bottom: 4rem;
  }
  label {
    width: 10%;
    margin-right: 1rem;
  }
  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
  }
}
</style>
