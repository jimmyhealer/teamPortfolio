<script>
import feather from "feather-icons";
import ContactDetails from "~/components/contact/ContactDetails.vue";
import ContactForm from "~/components/contact/ContactForm.vue";

export default {
  scrollToTop: true,
  components: {
    ContactDetails,
    ContactForm,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "ycystudio1@gmai.com",
          icon: "mail",
          href: "mailto:ycystudio1@gmail.com",
        },
        {
          id: 2,
          name: "歪西歪工作室",
          icon: "facebook",
          href: "https://www.facebook.com/YCY.web.studio",
        }
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-10
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
