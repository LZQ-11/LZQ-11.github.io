<template>
  <div class="Product4-square-box"></div>
  <div class="Product4-image-container">
    <button class="Product4-image-button" @click="productdetail(4)">
      <img src="/src/assets/Product4.png" alt="Logo" />
    </button>
  </div>
  <div class="Product4-text-container">
    {{ text7 }}
  </div>
</template>

<script>
export default {
  name: 'Product4',
  data() {
    return {
      text7: 'A sunshade hat',
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

.Product4-square-box {
  position: absolute;
  top: 103.5%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white;
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product4-image-container {
  position: absolute;
  top: 104%;
  left: 2%;
  width: 25%;
  height: 29%; 
  overflow: hidden;
}
.Product4-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product4-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product4-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product4-text-container {
  position: absolute;
  top: 135%;
  left: 8%;
  width: 30%; 
  height: 10%; 
  color: black;
}
</style>





