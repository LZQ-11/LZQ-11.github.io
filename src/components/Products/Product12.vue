<template>
  <div class="Product12-square-box"></div>
  <div class="Product12-image-container">
    <button class="Product12-image-button" @click="productdetail(12)">
      <img src="/src/assets/Product12.png" alt="Logo" />
    </button>
  </div>
  <div class="Product12-text-container">
    {{ text15 }}
  </div>
</template>

<script>
export default {
  name: 'Product12',
  data() {
    return {
      text15: 'Watch'
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

.Product12-square-box {
  position: absolute;
  top: 176.5%;
  right: 2.5%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black; 
  display: flex;
  border-radius: 10px; 
}
.Product12-image-container {
  position: absolute;
  top: 177%;
  right: 2.5%;
  width: 25%; 
  height: 29%; 
  overflow: hidden;
}
.Product12-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product12-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product12-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%);
}
.Product12-text-container {
  position: absolute;
  top: 208%;
  left: 83%;
  width: 30%; 
  height: 10%;
  color: black;
}

</style>





