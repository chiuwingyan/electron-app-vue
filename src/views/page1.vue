<template>
  <div class="page1">
    <h1>page1</h1>
    <button @click="dialog">alert</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    dialog() {
      alert(123);
    },
  },
};
</script>

<style scoped lang="less"></style>
