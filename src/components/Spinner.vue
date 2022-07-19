<template>
  <div class="content-loading">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 85px 60px;

  .lds-dual-ring {
    display: inline-block;
    width: 70px;
    height: 70px;

    &:after {
      content: " ";
      display: block;
      width: 54px;
      height: 54px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid $main-color;
      border-color: $main-color transparent $main-color transparent;
      animation: lds-dual-ring 1.2s linear infinite;
      }
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>