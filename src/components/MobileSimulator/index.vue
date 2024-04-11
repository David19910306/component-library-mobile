<template>
  <iframe class="mobile-simulator" :src="props.url"></iframe>
</template>

<script setup lang="ts">
import "./index.less";

const props = defineProps<{
  url: string | undefined,
}>();
</script>