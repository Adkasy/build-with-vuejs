<template>
  <Header />
  <h2 class="title-page">Update Data</h2>
  <div class="container">
    <form class="add-form" onsubmit="return false">
      <input type="text" name="" placeholder="Image" v-model="image" />
      <input type="text" name="" placeholder="First Name" v-model="firstName" />
      <input type="text" name="" placeholder="Last Name" v-model="lastName" />
      <input type="text" name="" placeholder="Gender" v-model="gender" />
      <input type="text" name="" placeholder="Age" v-model="age" />
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
        @click="updateDataUser(this.$route.params.userID)"
        class="btn btn-primary"
        :disabled="isFormIncomplete"
      >
        Submit
      </button>
      <p v-if="formError" class="error">Please fill in all fields</p>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "UpdatePage",
  data() {
    return {};
  },

  components: {
    Header,
  },

  methods: {
    ...mapActions(useUserStore, ["updateDataUser"]),
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

    maskedLastName: function () {
      return this.lastName.replace(/./g, "*");
    },

    isFormIncomplete() {
      return (
        !this.image ||
        !this.firstName ||
        !this.lastName ||
        !this.gender ||
        !this.age ||
        !this.phoneNumber ||
        !this.university
      );
    },
  },

  async mounted() {
    const result = await fetch(
      "https://dummyjson.com/users/" + this.$route.params.userID
    ).then((res) => res.json());

    console.log(result);

    this.image = result.image;
    this.firstName = result.firstName;
    this.lastName = result.lastName;
    this.gender = result.gender;
    this.age = result.age;
    this.phoneNumber = result.phone;
    this.university = result.university;
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
  justify-content: center; /* Ngatur item di tengah secara horizontal */
  /* align-items: center; Ngatur item di tengah secara vertikal */
  height: 100vh; /* Ngatur tinggi container agar mencakup seluruh tinggi halaman */
}

button {
  margin: 20px auto;
  border-radius: 10px;
  height: 50px;
  width: 250px;
  display: block;
}

.title-page {
  text-align: center;
  margin: 100px auto 40px;
  width: fit-content;
}
</style>
