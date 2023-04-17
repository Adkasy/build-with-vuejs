<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">
      <img
        src="../assets/ip-logo.png"
        width="40"
        height="40"
        class="d-inline-block"
        alt=""
        style="margin: 0 15px 0 60px"
      />
      <div class="navbar-text mx-auto">
        <h4 class="m-0">Admin Dashboard</h4>
      </div>
    </router-link>

    <form class="form-inline mx-auto">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style="width: 700px"
      />
    </form>

    <router-link to="/add">
      <button
        type="button"
        class="add-button btn btn-success ml-5"
        style="margin-right: 80px; width: 150px"
      >
        Add User
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  height: 65px;
  position: fixed; /* Menggunakan position: fixed untuk mengatur posisi tetap pada bagian atas halaman */
  top: 0; /* Menggunakan top: 0 untuk memastikan navbar berada di bagian atas halaman */
  left: 0; /* Menggunakan left: 0 untuk memastikan navbar berada di sisi kiri halaman */
  right: 0; /* Menggunakan right: 0 untuk memastikan navbar berada di sisi kanan halaman */
  z-index: 9999; /* Menggunakan z-index untuk mengatur urutan tumpukan, sehingga navbar berada di atas konten lainnya */
}

.add-button {
  margin-left: auto; /* Menggunakan margin-left: auto untuk membuat tombol berada di pojok kanan navbar */
}

.navbar-text {
  flex: 1; /* Menggunakan flex: 1 untuk mengatur agar tulisan berada di tengah vertikal */
  float: right; /* Menggunakan display: flex untuk membuat konten navbar menjadi flexbox */
  align-items: center; /* Menggunakan align-items: center untuk mengatur konten menjadi berada di tengah vertikal */
  color: white;
}
</style>
