<template>
  <div class="home-page">
    <img class="vue-logo" src="../../assets/vue.svg" alt="vue" />
    <h1>移动端组件库</h1>
    <el-button type="primary" size="large" class="el-button" @click="enter">点击进入</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import "./index.less";

const router = useRouter();
const enter = () => {
  // console.log("oo", router);
  router.push({
    name: 'component',
  });
}
</script>