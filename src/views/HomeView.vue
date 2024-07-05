<template>
  <div class="width">
  <div class="Background">
    <div class="footer"></div>
  </div>
  <div><Logo /></div>
  <button @click="search" class="button">
    <img src="/src/assets/Search.png" alt="Logo" />
  </button>
  <div><Xshopping /></div>
  <div class="text-container2">Do you find that the shopping website is special for XMU international students!</div>
  <div class="Background-Container1">
    <div class="footer1"></div>
  </div>
  <div class="Background-Container2">
    <div class="footer2"></div>
  </div>
  <div class="Background-Container3">
    <div class="footer3"></div>
  </div>
  <div class="footer4"></div>
  <div><Navigation /> </div>
  <div><Display /></div>
  <div><Product1 /></div>
  <div><Product2 /></div>
  <div><Product3 /></div>
  <div><Product4 /></div>
  <div><Product5 /></div>
  <div><Product6 /></div>
  <div><Product7 /></div>
  <div><Product8 /></div>
  <div><Product9 /></div>
  <div><Product10 /></div>
  <div><Product11 /></div>
  <div><Product12 /></div>

  <input v-model="product" id="search" name="search" class="input" type="text" required/>
  
  <button class="front" @click="front">Back</button>
  <button class="next" @click="next">Next</button>
</div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '/src/components/Navigation.vue'
import Display from '@/components/Display.vue'
import Product1 from '@/components/Products/Product1.vue'
import Product2 from '@/components/Products/Product2.vue'
import Product3 from '@/components/Products/Product3.vue'
import Product4 from '@/components/Products/Product4.vue'
import Product5 from '@/components/Products/Product5.vue'
import Product6 from '@/components/Products/Product6.vue'
import Product7 from '@/components/Products/Product7.vue'
import Product8 from '@/components/Products/Product8.vue'
import Product9 from '@/components/Products/Product9.vue'
import Product10 from '@/components/Products/Product10.vue'
import Product11 from '@/components/Products/Product11.vue'
import Product12 from '@/components/Products/Product12.vue'
import Xshopping from '@/components/Xshopping.vue'
import axios from 'axios'



export default {
  name: 'HomeView',
  components: {
    Logo,
    Navigation,
    Xshopping,
    Display,
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    Product9,
    Product10,
    Product11,
    Product12
  },
  data(){
    return {
      product: ''
    }
  },
  methods: {
    async search(){
      try {
      if (!this.product){
        alert('Please enter!')
      } else {
        const response = await axios.post('http://localhost/search', {
        product: this.product
      });
      
      if (response.data.error) {
      alert('Sorry, We will add this product in the future!');
      this.product = '';
    }
    else {
      if (response.data ===1){
        this.$router.push({ path: '/productdetail', query: { a: 1 } });
      }
      if (response.data ===2){
        this.$router.push({ path: '/productdetail', query: { a: 2 } });
      }
      if (response.data ===3){
        this.$router.push({ path: '/productdetail', query: { a: 3 } });
      }
      if (response.data ===4){
        this.$router.push({ path: '/productdetail', query: { a: 4 } });
      }
      if (response.data ===5){
        this.$router.push({ path: '/productdetail', query: { a: 5 } });
      }
      if (response.data ===6){
        this.$router.push({ path: '/productdetail', query: { a: 6 } });
      }
      if (response.data ===7){
        this.$router.push({ path: '/productdetail', query: { a: 7 } });
      }
      if (response.data ===8){
        this.$router.push({ path: '/productdetail', query: { a: 8 } });
      }
      if (response.data ===9){
        this.$router.push({ path: '/productdetail', query: { a: 9 } });
      }
      if (response.data ===10){
        this.$router.push({ path: '/productdetail', query: { a: 10 } });
      }
      if (response.data ===11){
        this.$router.push({ path: '/productdetail', query: { a: 11 } });
      }
      if (response.data ===12){
        this.$router.push({ path: '/productdetail', query: { a: 12 } });
      }
    }
    }
    } catch (error) {
          alert('Server error!');
        }
    },
    async front(){
      localStorage.removeItem('auth');
      this.$router.push('/login');
      await axios.post('http://localhost/statedelete', {
        data: 1
      });
    },
    next(){
      this.$router.push({ path: '/productdetail', query: { a: 1 } });
    }
  }
  
}
</script>

<style scoped>
.front {
  position: fixed;
  bottom: 17%; /* 调整按钮垂直位置 */
  left: 5%; /* 调整按钮水平位置 */
  transform: translate(-50%, -50%); /* 将按钮自身的宽度和高度的一半作为偏移量 */
  padding: 10px 20px; /* 自定义按钮的填充 */
  background-color: #007bff; /* 自定义背景颜色 */
  color: white; /* 自定义文字颜色 */
  border: none; /* 去除按钮边框 */
  border-radius: 5px; /* 圆角边框 */
  font-size: 10px; /* 自定义文字大小 */
  overflow: hidden;
}
.next {
  position: fixed;
  bottom: 17%; /* 调整按钮垂直位置 */
  left: 94.5%; /* 调整按钮水平位置 */
  transform: translate(-50%, -50%); /* 将按钮自身的宽度和高度的一半作为偏移量 */
  padding: 10px 20px; /* 自定义按钮的填充 */
  background-color: #007bff; /* 自定义背景颜色 */
  color: white; /* 自定义文字颜色 */
  border: none; /* 去除按钮边框 */
  border-radius: 5px; /* 圆角边框 */
  font-size: 10px; /* 自定义文字大小 */
  overflow: hidden;
}
.next:hover{
  background-color: black; 
}
.front:hover{
  background-color: black;
}


.width {
  position: relative; /* 确保屏幕容器是已定位的 */
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}
.button {
  position: absolute;
  top: 6.5%;
  left: 29%;
  width: 6%; 
  height: 6%; 
  background-color: brown;
  border-radius: 10px;
  overflow: hidden;
}
.button img {
  width: 100%;
  height: 100%; 
  border-radius: 10px;
  overflow: hidden;
}
.input {
  position: absolute;
  top: 7.5%;
  left: 37%;
  width: 20%;
  height: 3%; 
  overflow: hidden;
}

.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 216%;
  overflow: hidden;
}
.footer {
  height: 100%; 
  background-color:white; 
  width: 100%; 
  position: absolute; 
  overflow: hidden;
}
.footer3 {
  position: absolute;
  z-index: 1;
  top: 14%;
  left: 0;
  height: 11%; 
  background-color: orange; 
  width: 100%;
  overflow: hidden; 
}
.footer4 {
  position: absolute;
  top: 6.5%;
  left: 36.5%;
  height: 6%; 
  background-color: black; 
  width: 21.5%;
  border-radius: 10px;
  overflow: hidden; 
}
.text-container2 {
  position: absolute;
  z-index: 2;
  top: 14%;
  left: 20%;
  width: 60%;
  height: 10%;
  color: red;
  font-family:cursive;
  font-size: 25px;
  font-weight: bold;
  overflow: hidden;
}
.footer1 {
  position: absolute; 
  top: 0;
  left: 0;
  height: 4%; 
  background-color: black;
  width: 100%; 
  position: absolute;
  overflow: hidden; 
}
.footer2 {
  position: absolute;
  top: 212%;
  left: 0;
  height: 4%; 
  background-color: black; 
  width: 100%;
  overflow: hidden; 
}
</style>