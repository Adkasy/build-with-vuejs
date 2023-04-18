<template>
  <!-- HEADER -->
  <Header />

  <!-- SIDEBAR & CONTENT -->
  <div class="container-fluid">
    <div class="row">
      <!-- SIDEBAR -->
      <div class="col-md-3">
        <Sidebar />
      </div>

      <!-- CONTENT -->
      <div class="col-md-9">
        <Content />
      </div>
    </div>
  </div>

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