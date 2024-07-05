<template>
  <div class="Product8-square-box"></div>
  <div class="Product8-image-container">
    <button class="Product8-image-button" @click="productdetail(8)">
      <img src="/src/assets/Product8.png" alt="Logo" />
    </button>
  </div>
  <div class="Product8-text-container">
    {{ text11 }}
  </div>
</template>

<script>
export default {
  name: 'Product8',
  data() {
    return {
      text11: 'Silver bracelet'
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

.Product8-square-box {
  position: absolute;
  top: 140%;
  left: 37.5%;
  width: 24.5%; 
  height: 30%;
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px;
}
.Product8-image-container {
  position: absolute;
  top: 140.5%;
  left: 37.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product8-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product8-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product8-image-button:hover {
  transform: scale(1.1);
  filter: brightness(80%); 
}
.Product8-text-container {
  position: absolute;
  top: 171.5%;
  left: 45%;
  width: 30%;
  height: 10%; 
  color: black;
}

</style>





