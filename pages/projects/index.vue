<script>
export default {
  scrollToTop: true,
  data: () => {
    return {
      // @todo
    };
  },
  components: {
    ProjectsGrid: () => import("~/components/projects/ProjectsGrid"),
  },
  computed: {
    // @todo
  },
};
</script>

<template>
  <div class="container mx-auto">
    <ProjectsGrid :projectLimit="36"/>
  </div>
</template>

<style lang="scss" scoped></style>
