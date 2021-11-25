<template>
  <div class="search">
    <div class="search-body">
      <i class="material-icons">search</i>
      <div class="search-text"><input autofocus type="text" placeholder="Search..." class="search-input"></div>
    </div>
  </div>
</template>

<script>
// import MyIcon from '@/MyIcon'
export default {
  components: {
    // MyIcon
  },
}
</script>

<style scoped>
.search {
  position: fixed;
  width: 100%;
  max-width: 480px;
  height: 60px;
  border-radius: 30px 30px 30px 30px;
  background-color: rgba(255, 255, 255, 0.60);
  box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.10);
  border: solid 1px rgba(0, 0, 0, 0.10);
  top: 100px; 
  left: 0; 
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  z-index: 9999;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: start;
  align-items: center;
}
.search-body {
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  margin: 0 20px;
}
.search-text {
  font-size: 18px;
}

.search-text > input {
  border: 0px;
  font-size: 18px;
  background-color: transparent;
}
.search-text > input:focus{
  outline: none;
}

</style>