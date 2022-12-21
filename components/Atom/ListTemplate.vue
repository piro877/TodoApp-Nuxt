<template>
  <div class="list-template background-color--white">
    <slot />
  </div>
</template>

<style scoped>
.list-template {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 3px;
  border-radius: 5px;
  background-color: #dfdede;
}
</style>
