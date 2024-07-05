<template>
  <div class="Product9-square-box"></div>
  <div class="Product9-image-container">
    <button class="Product9-image-button" @click="productdetail(9)">
      <img src="/src/assets/Product9.png" alt="Logo" />
    </button>
  </div>
  <div class="Product9-text-container">
    {{ text12 }}
  </div>
</template>

<script>
export default {
  name: 'Product9',
  data() {
    return {
      text12: 'Wearable nails'
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

.Product9-square-box {
  position: absolute;
  top: 140%;
  right: 2.5%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product9-image-container {
  position: absolute;
  top: 140.5%;
  right: 2.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product9-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product9-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product9-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product9-text-container {
  position: absolute;
  top: 171.5%;
  left: 80%;
  width: 30%;
  height: 10%; 
  color: black;
}
</style>





