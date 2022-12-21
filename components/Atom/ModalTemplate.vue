<template>
  <div>
    <div class="bg" @click="$emit('closeModal')"></div>
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-main">
          <div class="close-icon">
            <span class="material-icons" @click="$emit('closeModal')">
              close
            </span>
          </div>
          <div class="modal-content"><slot /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.modal-main {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
}
.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.close-icon {
  width: 100%;
  height: fit-content;
  position: relative;
}
.close-icon > span {
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
