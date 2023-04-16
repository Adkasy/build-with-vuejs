<template>
  <h1>Hello User, this is update page</h1>
  <div class="container">
    <form class="add-form" onsubmit="return false">
      <input type="text" name="" placeholder="First Name" v-model="firstName" />
      <input
        type="text"
        name=""
        placeholder="Last Name"
        v-model="maskedLastName"
      />
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
      <button @click="updateDataUser" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdatePage",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      phoneNumber: "",
      university: "",
    };
  },

  methods: {
    async updateDataUser() {
      const updateData = await fetch(
        "https://dummyjson.com/users/" + this.$route.params.userID,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            age: this.age,
            phoneNumber: this.phoneNumber,
            university: this.university,
          }),
        }
      ).then((res) => res.json());

      console.log(updateData);

      this.$router.push({ path: "/" });
    },
  },

  computed: {
    maskedLastName: function () {
      return this.lastName.replace(/./g, "*");
    },
  },

  async mounted() {
    const result = await fetch(
      "https://dummyjson.com/users/" + this.$route.params.userID
    ).then((res) => res.json());

    console.log(result);

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
  width: 330px;
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
}
</style>
