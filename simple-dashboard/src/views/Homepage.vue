<template>
  <!-- HEADER -->
  <Header />

  <!-- SIDEBAR -->
  <div class="container-fluid">
    <div class="row">
      <!-- <Sidebar /> -->
    </div>
  </div>

  <!-- CONTENT -->
  <Content />

  <!-- Footer -->
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import Content from "../components/Content.vue";

export default {
  name: "Homepage",
  components: {
    Header,
    Sidebar,
    Footer,
    Content,
  },
};
</script>
