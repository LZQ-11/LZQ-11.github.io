<template>
  <div class="Product3-square-box"></div>
 <div class="Product3-image-container">
   <button class="Product3-image-button" @click="productdetail(3)">
     <img src="/src/assets/Product3.png" alt="Logo" />
   </button>
 </div>
 <div class="Product3-text-container">
   {{ text6 }}
 </div>
</template>

<script>
export default {
  name: 'Product3',
  data() {
    return {
      text6: 'Sunshade sunglasses'
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

.Product3-square-box {
 position: absolute;
 top: 66.5%;
 right: 2.5%;
 width: 24.5%; 
 height: 30%; 
 background-color: white; 
 border: 2px solid black;
 display: flex;
 border-radius: 10px;
}
.Product3-image-container {
 position: absolute;
 top: 67%;
 right: 2.5%;;
 width: 25%;
 height: 29%; 
 overflow: hidden;
}
.Product3-image-button img {
 width: 100%;
 height: 100%;
 object-fit: cover; 
}
.Product3-image-button {
 border: none;
 background-color: transparent;
 cursor: pointer;
}
.Product3-image-button:hover {
 transform: scale(1.1); 
 filter: brightness(80%);
}
.Product3-text-container {
 position: absolute;
 top: 98%;
 left: 78%;
 width: 30%; 
 height: 10%; 
 color: black;
}

</style>





