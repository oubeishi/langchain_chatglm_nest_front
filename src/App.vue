<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ElConfigProvider } from 'element-plus'
</script>
<style lang="scss">
// @import url(ddkjonduty/src/assets/style/global.scss);
</style>
