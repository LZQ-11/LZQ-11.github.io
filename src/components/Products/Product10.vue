<template>
  <div class="Product10-square-box"></div>
  <div class="Product10-image-container">
    <button class="Product10-image-button" @click="productdetail(10)">
      <img src="/src/assets/Product10.png" alt="Logo" />
    </button>
  </div>
  <div class="Product10-text-container">
    {{ text13 }}
  </div>
</template>

<script>
export default {
  name: 'Product10',
  data() {
    return {
      text13: 'Multifunctional plug-in'
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

.Product10-square-box {
  position: absolute;
  top: 176.5%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px; 
}
.Product10-image-container {
  position: absolute;
  top: 177%;
  left: 2%;
  width: 25%;
  height: 29%; 
  overflow: hidden;
}
.Product10-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product10-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.Product10-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product10-text-container {
  position: absolute;
  top: 208%;
  left: 7%;
  width: 30%; 
  height: 10%; 
  color: black;
}

</style>





