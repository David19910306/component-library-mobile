<template>
  <el-container class="common-layout">
    <el-header class="el-header">
      <img class="image-logo" src="../../assets/vue.svg" alt="vue" />
      <div class="title-logo">移动端组件</div>
    </el-header>
    <el-container>
      <el-aside width="15%">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="1"
          active-text-color="#ffd04b"
        >
          <el-menu-item 
            :class="{'el-menu-item': true, 'el-menu-item-active': state.currentMenuId === menu.id}"
            v-for="menu in menus" 
            :key="menu.id" 
            :index="menu.id"
            @click="jumpToMenu(menu.url, menu.id)"
          >
            {{ menu.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import "./index.less";

const router = useRouter();
const state = reactive({currentMenuId: '2'});

const menus = [
  // {
  //   id: '1',
  //   url: '/component/buttons',
  //   name: '按钮',
  // },
  {
    id: '2',
    url: '/component/formCard',
    name: '表单卡片',
  },
  {
    id: '3',
    url: '/component/customTitle',
    name: '自定义标题',
  },
  {
    id: '4',
    url: '/component/vehicleNumber',
    name: '车牌号输入组件',
  },
  {id: '5',
    url: '/component/customNoticeBar',
    name: '多个轮播栏',
  },
  {
    id: '6',
    url: '/component/starEvaluate',
    name: '星级评价',
  },
];

const jumpToMenu = (jumpPath: string, id: string) => {
  state.currentMenuId = id;
  router.push({ path: jumpPath });
}
</script>