<template>
  <div class="wrapper">
    <div class="list-template background-color--white">
      <slot />
    </div>
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
  width: fit-content;
  position: absolute;
  top: 25%;
  left: 25%;
}
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
