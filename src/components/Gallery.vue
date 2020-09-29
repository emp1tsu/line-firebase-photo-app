<template>
  <div>
    <pre>{{ cloudinary }}</pre>
    <!-- <vue-picture-swipe :items="images"></vue-picture-swipe> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRTDB } from "@vueuse/firebase";
import { db } from "@/utils/db";
import VuePictureSwipe from "vue-picture-swipe";

export default defineComponent({
  name: "Gallery",
  setup() {
    const cloudinary = useRTDB(db.ref("/cloudinary"));
    console.log(cloudinary.value);
    // console.log(Object.entries(cloudinary._value));

    return {
      cloudinary,
    };
  },
});
</script>

<style></style>
