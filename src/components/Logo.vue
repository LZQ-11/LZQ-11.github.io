<template>
    
  <div class="image-container">
    <router-link to="/home"><img src="/src/assets/Logo.png" alt="Logo" /></router-link>
  </div>

</template>

<script>

export default {
    name: 'Logo'

};

</script>

<style scoped>
.image-container {
  position: absolute;
  top: 5%;
  left: 1%;
  width: 8%; 
  height: 8%; 
}
.image-container img {
  max-width: 100%;
  height: 100%; 
  border-radius: 10px;
}
.image-container img:hover {
  transform: scale(1.2);
}
</style>
