<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/ip-logo.png"
        width="40"
        height="40"
        class="d-inline-block align-top"
        alt=""
        style="margin-left: 60px"
      />
    </a>

    <button type="button" class="btn btn-danger float-end" style="">
      Sign Out
    </button>
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
</style>
