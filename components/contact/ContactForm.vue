<script>
import Button from "../reusable/Button.vue";
// import { notify } from 
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    };
  },
  methods: {
    submit: function (e) {
      e.preventDefault();
      const ref = this.$fire.firestore.collection("contact");
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        time: new Date(),
      };
      ref.add(data).then(() => {
        this.$notify(
          {
            group: "top",
            title: "Success",
            text: "我們收到訊息了，會盡快與您回復！",
          },
          4000
        );
        e.target.reset();
      });
    },
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <notificationGroup group="top">
      <div
        class="
          fixed
          inset-0
          flex
          px-4
          py-6
          pointer-events-none
          p-6
          items-start
          justify-end
        "
      >
        <div class="max-w-sm w-full">
          <notification v-slot="{ notifications }">
            <div
              class="
                flex
                max-w-sm
                w-full
                mx-auto
                bg-white
                shadow-md
                rounded-lg
                overflow-hidden
                mt-4
              "
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex justify-center items-center w-12 bg-green-500">
                <svg
                  class="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="text-green-500 font-semibold">{{
                    notification.title
                  }}</span>
                  <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        聯絡我們
      </p>
      <form @submit="(e) => submit(e)" class="font-general-regular space-y-7">
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >名字</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            placeholder=""
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="text"
            required=""
            placeholder=""
            aria-label="Email"
          />
        </div>
        <!-- <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >主旨</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required=""
            placeholder="Subject"
            aria-label="Subject"
          />
        </div> -->

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >訊息</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="寄送訊息"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="寄送訊息"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
