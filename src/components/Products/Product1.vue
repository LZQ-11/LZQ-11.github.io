<template>
  <div class="Product1-square-box"></div>
  <div class=" Product1-image-container">
    <button class="Product1-image-button" @click="productdetail(1)">
      <img src="/src/assets/Product1.png" alt="Logo" />
    </button>
  </div>
  <div class="Product1-text-container">
     {{ text4 }}
  </div>
</template>

<script>
export default {
  name: 'Product1',
  data() {
    return {
      text4: 'HDMI to Type C'
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

.Product1-square-box {
  position: absolute;
  top: 66.5%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px;
}
.Product1-image-container {
  position: absolute;
  top: 67%;
  left: 2%;
  width: 25%;
  height: 29%; 
  overflow: hidden;
}
.Product1-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product1-image-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.Product1-image-button:hover {
  transform: scale(1.1); 
  filter: brightness(80%); 
}
.Product1-text-container {
  position: absolute;
  top: 98%;
  left: 8%;
  width: 30%; 
  height: 10%; 
  color: black;
}

</style>





