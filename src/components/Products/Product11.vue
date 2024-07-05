<template>
  <div class="Product11-square-box"></div>
  <div class="Product11-image-container">
    <button class="Product11-image-button" @click="productdetail(11)">
      <img src="/src/assets/Product11.png" alt="Logo" />
    </button>
  </div>
  <div class="Product11-text-container">
    {{ text14 }}
  </div>
</template>

<script>
export default {
  name: 'Product11',
  data() {
    return {
      text14: 'Wallet'
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

.Product11-square-box {
  position: absolute;
  top: 176.5%;
  left: 37.5%;
  width: 24.5%;
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product11-image-container {
  position: absolute;
  top: 177%;
  left: 37.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product11-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.Product11-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product11-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product11-text-container {
  position: absolute;
  top: 208%;
  left: 47.5%;
  width: 30%; 
  height: 10%; 
  color: black;
}
</style>





