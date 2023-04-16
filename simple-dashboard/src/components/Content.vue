<template>
  <div class="content-page container d-flex justify-content-center">
    <div style="width: 1500px">
      <!-- <button class="add-button btn btn-success mb-3">Add User</button> -->
      <table class="table">
        <thead class="thead-dark">
          <tr class="horizontal-middle">
            <th scope="col">#ID</th>
            <th scope="col">Image</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col" style="width: 170px">Phone Number</th>
            <th scope="col" style="width: 270px">University</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(el, index) in allUser"
            :key="index"
            class="vertical-center"
          >
            <td>{{ el.id }}</td>
            <td><img :src="el.image" alt="" class="profile-picture" /></td>
            <td>{{ el.firstName }}</td>
            <td>{{ el.lastName }}</td>
            <td>{{ el.gender }}</td>
            <td>{{ el.age }}</td>
            <td>{{ el.phone }}</td>
            <td>{{ el.university }}</td>
            <td>
              <router-link :to="'/update/' + el.id">
                <button class="btn btn-warning text-light">Edit</button>
              </router-link>
              |
              <a href="#" @click="deleteUser(el.id)"
                ><button class="btn btn-danger">Delete</button></a
              >
            </td>
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

    async deleteUser(userID) {
      const deleteData = await fetch(`https://dummyjson.com/users/${userID}`, {
        method: "DELETE",
      }).then((res) => res.json());

      console.log(deleteData, "<- Ini delete data");

      if (deleteData.isDeleted == true) {
        this.getAllData();
      }
    },
  },

  mounted() {
    this.getAllData();
  },
};
</script>

<style scoped>
.profile-picture {
  height: 70px;
}

.content-page {
  margin-top: 90px;
  margin-bottom: 0px;
}

.add-button {
  float: right;
}

.vertical-center {
  vertical-align: middle;
}

button {
  width: 70px;
}
</style>
