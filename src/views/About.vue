<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test">测试</button>
    <button @click="jumpToPage1">跳转page1</button>
    <button @click="ipc">测试通信</button>
  </div>
</template>
<script>
// const { ipcRenderer } = window.require('electron');
import { ipcRenderer } from 'electron';
export default {
  methods: {
    test() {
      window.open('https://www.kdocs.cn/', '_blank');
    },
    jumpToPage1() {
      this.$router.push('page1');
    },
    ipc() {
      ipcRenderer.send('open-window', 'http://localhost:8080/#/page1');
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
