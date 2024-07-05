<template>
  <div class="Product2-square-box"></div>
  <div class="Product2-image-container">
    <button class="Product2-image-button" @click="productdetail(2)">
      <img src="/src/assets/Product2.png" alt="Logo" />
    </button>
  </div>
  <div class="Product2-text-container">
    {{ text5 }}
  </div>
</template>

<script>
export default {
  name: 'Product2',
  data() {
    return {
      text5: 'Wireless headphones',
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

.Product2-square-box {
  position: absolute;
  top: 66.5%;
  left: 37.5%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px; 
}
.Product2-image-container {
  position: absolute;
  top: 67%;
  left: 37.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product2-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product2-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product2-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product2-text-container {
  position: absolute;
  top: 98%;
  left: 42.5%;
  width: 30%; 
  height: 10%; 
  color: black;
}

</style>





