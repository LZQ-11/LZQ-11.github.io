<template>
  <div class="Product7-square-box"></div>
  <div class="Product7-image-container">
    <button class="Product7-image-button" @click="productdetail(7)">
      <img src="/src/assets/Product7.png" alt="Logo" />
    </button>
  </div>
  <div class="Product7-text-container">
    {{ text10 }}
  </div>
</template>

<script>
export default {
  name: 'Product7',
  data() {
    return {
      text10: 'Women bracelet'
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

.Product7-square-box {
  position: absolute;
  top: 140%;
  left: 2%;
  width: 24.5%;
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px;
}
.Product7-image-container {
  position: absolute;
  top: 140.5%;
  left: 2%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product7-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product7-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.Product7-image-button:hover {
  transform: scale(1.1);
  filter: brightness(80%);
}
.Product7-text-container {
  position: absolute;
  top: 171.5%;
  left: 8%;
  width: 30%; 
  height: 10%; 
  color: black;
}
</style>





