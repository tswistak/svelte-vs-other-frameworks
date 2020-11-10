<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  name: "App",
  setup() {
    return {
      name: "world",
    };
  },
};
</script>

<style>
</style>
