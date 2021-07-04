<template>
  <div>
    <PageSpinner v-if="loading" />
    <template v-if="email">
      <div class="btn-add-staff">
        <router-link :to="{ name: 'add-staff' }">Add Staff</router-link>
      </div>
    </template>
    <Card :data="staff_members" />
  </div>
</template>

<script>
import Card from "@/components/CardUser";
import { mapState, mapActions } from "vuex";
import PageSpinner from '../components/widgets/PageSpinner';

export default {
  components: {
    Card,
    PageSpinner
  },
  methods: {
    ...mapActions("staff", ["get_all_staff"]),
  },
  created() {
    if (!this.staff_members.length) {
      this.get_all_staff();
    }
  },
  computed: {
    ...mapState("staff", ["staff_members"]),
    ...mapState("user", ["email"]),
    ...mapState("widgets", ["loading"]),
  },
};
</script>

<style scoped lang="scss">
.btn-add-staff {
  background: #FFF;
  padding: 1rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    background: chocolate;
    margin: 1rem auto;
    padding: 1rem;
    color: #FFF;
    font-size: 1.5rem;
    display: inline-block;
  }
}
</style>
