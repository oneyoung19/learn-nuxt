<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- TODO: 如果pages下创建index.vue，已经默认创建了路由。那么此处的NuxtPage的作用是什么呢？为什么下面的NuxtLink不展示呢? -->
    <!-- <NuxtLink to="/about">About</NuxtLink> -->
    <NuxtPage />
    <!-- <AppAlert></AppAlert> -->
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
