<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
    selectOptions: {
      type: Array,
      default: () => {
        return [
          "Web Application",
          "Mobile Application",
          "Desktop Application",
          // "UI/UX Design",
          // "Branding & Anim",
        ];
      }
    },
  },
  data: () => {
    return {
      selectOptions: [],
    }
  },
  methods: {
    async getCategoryFromFireStore() {
      const ref = this.$fire.firestore
        .collection("projects").doc("category");
      
      let doc = await ref.get();
      this.selectOptions = doc.data().value;      
    },
  },
  created() {
    this.getCategoryFromFireStore();
  }
};
</script>

<template>
  <select
    @change="$emit('change', $event.target.value)"
    :name="select"
    :id="select"
    class="
      font-general-medium
      w-48
      px-4
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-secondary-light
      dark:bg-ternary-dark
      text-primary-dark
      dark:text-ternary-light
    "
  >
    <option value class="text-sm sm:text-md">All Projects</option>
    <option
      v-for="option in selectOptions"
      :key="option.id"
      :value="option.title"
      class="sm:text-md"
    >
      {{ option.title }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
