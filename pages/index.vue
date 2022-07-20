<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button, ProjectsGrid },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid :projectLimit="6"/>

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="更多專案"
      >
        <Button title="更多專案" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
