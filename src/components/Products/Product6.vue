<template>
  <div class="Product6-square-box"></div>
  <div class="Product6-image-container">
    <button class="Product6-image-button" @click="productdetail(6)">
      <img src="/src/assets/Product6.png" alt="Logo" />
    </button>
  </div>
  <div class="Product6-text-container">
    {{ text9 }}
  </div>
</template>

<script>
export default {
  name: 'Product6',
  data() {
    return {
      text9: 'Nail polish',
    };
  },
  methods: {
    productdetail(value){
        this.$router.push({ path: '/productdetail', query: { a: value } });
    }
  },
};
</script>

<style scoped>

.Product6-square-box {
  position: absolute;
  top: 103.5%;
  right: 2.5%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product6-image-container {
  position: absolute;
  top: 104%;
  right: 2.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product6-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product6-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product6-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product6-text-container {
  position: absolute;
  top: 135%;
  left: 81%;
  width: 30%; 
  height: 10%; 
  color: black;
}
</style>





