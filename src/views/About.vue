<template>
  <div class="about">
    <Profile> </Profile>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";

export default {
  name: "About",
  components: {
    Profile
  }
};
</script>
