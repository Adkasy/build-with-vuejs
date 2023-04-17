<template>
  <div
    class="sidebar d-flex flex-column flex-shrink-0 p-3 text-dark bg-light"
    style="width: 250px; height: 100vh"
  >
    <ul class="nav flex-column mb-auto mt-3">
      <li class="mb-3">
        <a href="#" class="nav-link text-dark">
          <span class="material-symbols-outlined"> home </span>
          <span class="menu-text">Sidebar Menu #1</span>
        </a>
      </li>

      <li class="mb-3">
        <a href="#" class="nav-link text-dark">
          <span class="material-symbols-outlined"> menu_book </span>
          <span class="menu-text">Sidebar Menu #2</span>
        </a>
      </li>

      <li class="mb-3">
        <a href="#" class="nav-link text-dark">
          <span class="material-symbols-outlined"> widgets </span>
          <span class="menu-text">Sidebar Menu #3</span>
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>Aditya</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  margin-top: 65px;
}

.menu-text {
  margin-left: 15px; /* Adjust the value as needed for the desired spacing */
}
</style>
