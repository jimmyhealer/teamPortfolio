<script>
import AboutMe from "../components/about/AboutMe.vue";
import AboutCounter from "../components/about/AboutCounter.vue";
import AboutClients from "../components/about/AboutClients.vue";
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutCounter,
    AboutClients,
  },
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div>
    <AboutMe class="container mx-auto" />

    <AboutCounter />

    <!-- <AboutClients class="container mx-auto" /> -->
  </div>
</template>

<style scoped></style>
