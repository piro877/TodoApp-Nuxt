<template>
  <div class="list-template background-color--white">
    <slot />
  </div>
</template>

<style scoped>
.list-template {
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  margin: 3px;
  border-radius: 5px;
}
</style>
