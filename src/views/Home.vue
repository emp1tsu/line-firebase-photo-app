<template>
  <div class="home">
    <Gallery />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Gallery from "@/components/Gallery.vue";

export default defineComponent({
  name: "Home",
  components: {
    Gallery,
  },
});
</script>
