<template>
  <div class="pricelist__wrapper">
    <div v-if="email" class="price-item__container">
      <button @click="$router.push('add-pricelist-item')">
        Go to add item
      </button>
      <div class="main__container">
        <div class="pricelist__container">
          <table class="pricelist">
            <tr v-for="item in pricelist_items" :key="item.id">
              <td>
                <button
                  @click="
                    $router.push({
                      name: 'edit-pricelist-item',
                      params: { id: item.id }
                    })
                  "
                  class="edit"
                >
                  EDIT
                </button>
              </td>
              <td>{{ item.data.langs[$i18n.locale].text }}</td>
              <td>{{ item.data.price }}</td>
              <td>
                <button @click="handleDelete(item.id)" class="delete">DELETE</button>
              </td>
            </tr>
            <!-- <tr class="details" v-for="(value, key) in item.langs" :key="key">
            <td v-for="(data, j) in row" :key="j" :class="`th-${j + 1}`">
              <span>{{ data }}</span>
            </td>
          </tr> -->
          </table>
        </div>
      </div>
      <!-- <div class="price-item bg">
        <label for="contentTextbg">Text BG</label>
        <input
          v-model="pricelist.langs['bg'].text"
          type="text"
          id="contentTextbg"
        />
      </div>
      <div class="price-item en">
        <label for="contentTexten">Text EN</label>
        <input
          v-model="pricelist.langs['en'].text"
          type="text"
          id="contentTexten"
        />
      </div>
      <div class="price-item pl">
        <label for="contentTextpl">Text PL</label>
        <input
          v-model="pricelist.langs['pl'].text"
          type="text"
          id="contentTextpl"
        />
      </div>
      <div class="price-item price">
        <label for="price">Price</label>
        <input v-model="pricelist.price" type="text" id="price" />
      </div> -->
    </div>
    <div class="main__container">
      <div class="pricelist__container">
        <table class="pricelist">
          <tr>
            <th
              v-for="(heading, i) in table.headings"
              :key="i"
              :class="`th-${i + 1}`"
            >
              {{ heading }}
            </th>
          </tr>
          <tr class="details" v-for="(row, i) in table.rows" :key="i">
            <td v-for="(data, j) in row" :key="j" :class="`th-${j + 1}`">
              <span>{{ data }}</span>
            </td>
          </tr>
        </table>
      </div>
      <p class="additional-tax">{{ this.$t('routes.pricelist.extra_tax') }}</p>
      <p class="prices-tax">{{ this.$t('routes.pricelist.price_avarage') }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {},
  name: 'Pricelist',
  computed: {
    ...mapState('user', ['email']),
    ...mapState('pricelist', ['pricelist_items']),
    table () {
      return this.$t('routes.pricelist')
    }
  },
  methods: {
    ...mapActions('pricelist', [
      'get_all_pricelist_items',
      'delete_pricelist_item'
    ]),
    handleDelete (id) {
      console.log(123);
      this.delete_pricelist_item(id)
    }
  },
  created () {
    this.get_all_pricelist_items()
  }
  // methods: {
  //   ...mapActions("pricelist", ["add_pricelist_item"]),
  //   handleAddItem() {
  //     this.pricelist.created = Date.now();
  //     this.add_pricelist_item(this.pricelist)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.price-item__container {
  top: 2rem;
  text-align: center;
  button {
    padding: 2rem;
    background-color: rgb(13, 112, 0);
    border: 2px solid rgb(7, 61, 0);
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
  }
}
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
.pricelist {
  font-size: 1.5rem;
  border-collapse: collapse;
  width: 100%;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 1);
  &__container {
    position: relative;
    color: rgb(100, 100, 100);
  }
  &__wrapper {
    max-width: 70%;
    margin: 2em auto 0 auto;
  }
}

.pricelist td,
.pricelist th {
  border: 1px solid #ddd;
  padding: 8px;
}
.pricelist th {
  text-align: center !important;
}
.pricelist .th-1,
.pricelist .th-2 {
  position: relative;
}
.pricelist .th-1,
.pricelist .th-1 {
  width: 80%;
  display: inline-block;
}

.pricelist .th-2,
.pricelist .th-2 {
  width: 20%;
  display: inline-block;
}

.pricelist tr:nth-child(even) {
  background-color: #f2f2f2;
}
.pricelist tr:nth-child(odd) {
  background-color: #fff;
}
tr {
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(15) {
    td:nth-child(2) {
      color: transparent;
    }
  }
}
tr {
  &:nth-child(15) {
    font-weight: bold;
  }
}
.pricelist th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(100, 100, 100);
  color: white;
}
.additional-tax {
  margin-top: 1.5em;
  color: rgb(228, 0, 0);
}
.prices-tax {
  text-decoration: underline;
  font-style: italic;
}
.additional-tax,
.prices-tax {
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  // margin-top: 1rem;
  text-align: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
}
// XX-Large devices (desktops, less than 1600px)
@media (max-width: 1598.98px) {
  .pricelist__container {
    max-width: 95%;
    //transform: translateY(0);
  }
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .pricelist {
    font-size: 1.3rem;
  }
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  .details {
    .th-1,
    .th-2 {
      position: relative;
      height: 5rem !important;
      display: inline-block;
      span {
        position: absolute;
        top: 50%;
      }
    }
    .th-1 {
      span {
        position: absolute;
        padding: 8px;
        left: 1rem;
        transform: translateY(-50%);
      }
    }
    .th-2 {
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .prices-tax {
    padding-bottom: 3rem;
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .pricelist__container {
    max-width: 100%;
  }
  .details {
    .th-1,
    .th-2 {
      height: 6.5rem !important;
      display: inline-block;
    }
  }
}
</style>
