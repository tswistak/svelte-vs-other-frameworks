<template>
  <h1>Clicked {{ clicks }} times!</h1>
  <button @click="clicks++">Add click</button>
  <button @click="clicks--">Remove click</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clicks: 0,
    };
  },
};
</script>

<style>
</style>
