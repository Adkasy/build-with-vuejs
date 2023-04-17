<template>
  <Header />
  <h2 class="title-page">Add New User</h2>
  <div class="container">
    <form class="add-form" onsubmit="return false" @submit.prevent="submitForm">
      <input type="text" name="" placeholder="Image" v-model="image" />
      <input type="text" name="" placeholder="First Name" v-model="firstName" />
      <input type="text" name="" placeholder="Last Name" v-model="lastName" />
      <input type="text" name="" placeholder="Gender" v-model="gender" />
      <input type="number" name="" placeholder="Age" v-model="age" />
      <input
        type="text"
        name=""
        placeholder="Phone Number"
        v-model="phoneNumber"
      />
      <input
        type="text"
        name=""
        placeholder="University"
        v-model="university"
      />
      <button
        @click="addNewUser"
        class="btn btn-primary"
        :disabled="isFormIncomplete"
      >
        Submit
      </button>
      <!-- <button class="btn btn-danger text-dark">
        <router-link to="/"> Cancel</router-link>
      </button> -->
      <p v-if="formError" class="error">Please fill in all fields</p>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "add",
  components: {
    Header,
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions(useUserStore, ["submitForm", "addNewUser", "getAllData"]),
  },

  computed: {
    ...mapWritableState(useUserStore, [
      "image",
      "firstName",
      "lastName",
      "gender",
      "age",
      "phoneNumber",
      "university",
      "formError",
    ]),

    isFormIncomplete() {
      return (
        !this.firstName ||
        !this.lastName ||
        !this.gender ||
        !this.age ||
        !this.phoneNumber ||
        !this.university
      );
    },
  },

  created() {
    this.getAllData();

    // Inputmask({
    //   mask: "A{1,20}",
    // }).mask(this.$refs.lastNameInput);
  },
};
</script>

<style scoped>
.add-form input {
  height: 50px;
  width: 450px;
  padding-left: 20px;
  border: 2px solid black;
  border-radius: 10px;
  display: block;
  margin: 0 auto 10px;
}

.container {
  display: flex;
  justify-content: center; /* Mengatur item di tengah secara horizontal */
  /* align-items: center; Mengatur item di tengah secara vertikal */
  height: 100vh; /* Mengatur tinggi container agar mencakup seluruh tinggi halaman */
}

button {
  margin: 20px auto;
  border-radius: 10px;
  height: 50px;
  width: 250px;
  display: block;
  text-decoration: none;
}

.title-page {
  text-align: center;
  margin: 100px auto 40px;
  width: fit-content;
}

.error {
  color: red;
  text-align: center;
}
</style>
