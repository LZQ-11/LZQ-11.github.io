<template>
  <div class="Product5-square-box"></div>
  <div class="Product5-image-container">
    <button class="Product5-image-button" @click="productdetail(5)">
      <img src="/src/assets/Product5.png" alt="Logo" />
    </button>
  </div>
  <div class="Product5-text-container">
    {{ text8 }}
  </div>
</template>

<script>
export default {
  name: 'Product5',
  data() {
    return {
      text8: 'T-shirt',
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

.Product5-square-box {
  position: absolute;
  top: 103.5%;
  left: 37.5%;
  width: 24.5%;
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product5-image-container {
  position: absolute;
  top: 104%;
  left: 37.5%;
  width: 25%;
  height: 29%; 
  overflow: hidden;
}
.Product5-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product5-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product5-image-button:hover {
 
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product5-text-container {
  position: absolute;
  top: 135%;
  left: 47%;
  width: 30%; 
  height: 10%; 
  color: black;
}

</style>





