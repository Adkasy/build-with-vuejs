<template>
  <div class="content-page container d-flex justify-content-center">
    <div style="width: 1500px">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Phone Number</th>
            <th scope="col" style="width: 250px">University</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(el, index) in allUser" :key="index">
            <td>{{ el.id }}</td>
            <td><img :src="el.image" alt="" class="profile-picture" /></td>
            <td>{{ el.firstName }}</td>
            <td>{{ el.lastName }}</td>
            <td>{{ el.gender }}</td>
            <td>{{ el.age }}</td>
            <td>{{ el.phone }}</td>
            <td>{{ el.university }}</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      allUser: [],
    };
  },
  methods: {
    async getAllData() {
      await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => {
          this.allUser = data.users; // Menyimpan hasil respon ke variabel allData
        });

      console.log(this.allUser, "<-- Ini hasil lognya");
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<style scoped>
.profile-picture {
  display: flex; /* Menggunakan display: flex untuk menggunakan Flexbox */
  align-items: center; /* Menggunakan align-items: center untuk membuat item berada di tengah secara vertikal */
  justify-content: center; /* Menggunakan justify-content: center untuk membuat item berada di tengah secara horizontal */
  height: 70px;
}

.content-page{
  margin-top: 100px;
  margin-bottom: 180px;
}
</style>
