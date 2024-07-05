<template>
  <div class="Background">
    <div class="footer"></div>
  </div>
  <div class="shadw"></div>
  <div><Logo /></div>
  <div><Navigation /></div>
  <div class="image1"><img src="/src/assets/LoginImage1.png" alt="Logo" /></div>
  <button @click="cart()" class="button4">Cart and Payment</button>
  <div><Xshopping /></div>
  <div class="text-container2">Do you like the product you click?</div>
  <div class="Background-Container1">
    <div class="footer1"></div>
  </div>
  <div class="input-container"></div>
  <div class="amount-text">AMOUNT:</div>
  <div class="Background-Container2">
    <div class="footer2"></div>
  </div>
  <div class="bule-container">
    <div class="footer3"></div>
  </div>
  <div v-if="white" class="Product-square-box1">
    <img :src="productSrc1" alt="Logo" />
  </div>
  <div v-if="black" class="Product-square-box2">
    <img :src="productSrc2" alt="Logo" />
  </div>
  <div v-if="blue" class="Product-square-box3">
    <img :src="productSrc3" alt="Logo" />
  </div>
  <div class="cash">
    {{ displayCash }}
  </div>
  <div class="displaytext-container"></div>
  <div class="Product-text-container">
    {{ displayText }}
  </div>
  <div class="RM">RM</div>
  <div class="button-container"></div>
  <button @click="color1" class="color1">
    <img :src="productSrc1" alt="Logo" />
  </button>
  <button @click="color2" class="color2">
    <img :src="productSrc2" alt="Logo" />
  </button>
  <button @click="color3" class="color3">
    <img :src="productSrc3" alt="Logo" />
  </button>

  <div class="sale">SALE!</div>
  <div class="sale1">-20%</div>

  <input
    v-model="amount"
    @input="validateQuantity"
    name="amount"
    class="input"
    type="number"
    required
  />

  <button class="front" @click="front">Back</button>
  <button class="next" @click="next">Next</button>

</template>

<script>
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import Xshopping from '@/components/Xshopping.vue';
import axios from 'axios';

export default {
  components: {
    Navigation,
    Xshopping,
    Logo,
  },
  name: 'ProductDetail',
  computed: {
    receivedValue() {
      return this.$route.query.a;
    },
    productSrc1() {
      return `/src/assets/Product${this.receivedValue}.png`;
    },
    productSrc2() {
      return `/src/assets/Product${this.receivedValue}-1.png`;
    },
    productSrc3() {
      return `/src/assets/Product${this.receivedValue}-2.png`;
    },
    displayText() {
      switch (this.receivedValue) {
        case '1':
          return this.text1;
        case '2':
          return this.text2;
        case '3':
          return this.text3;
        case '4':
          return this.text4;
        case '5':
          return this.text5;
        case '6':
          return this.text6;
        case '7':
          return this.text7;
        case '8':
          return this.text8;
        case '9':
          return this.text9;
        case '10':
          return this.text10;
        case '11':
          return this.text11;
        case '12':
          return this.text12;
        default:
          return '';
      }
    },
    displayCash() {
      switch (this.receivedValue) {
        case '1':
          return this.cash1;
        case '2':
          return this.cash2;
        case '3':
          return this.cash3;
        case '4':
          return this.cash4;
        case '5':
          return this.cash5;
        case '6':
          return this.cash6;
        case '7':
          return this.cash7;
        case '8':
          return this.cash8;
        case '9':
          return this.cash9;
        case '10':
          return this.cash10;
        case '11':
          return this.cash11;
        case '12':
          return this.cash12;
        default:
          return 0;
      }
    },
  },
  data() {
    return {
      text1:
        'Are you still worried that your Apple computer doesn’t have an HDMI interface? Do you feel anxious when you suddenly find that your computer can’t connect to the big screen during your first speech? Now you don’t have to worry about this kind of problem, because our website provides this product, which can solve your problem perfectly!',
      text2:
        'Don’t you want to have cool wireless headphones? Now we spend more and more time using electronic products at school. We almost never stop using electronic products. Therefore, a wireless headset can help us enjoy the convenience of technology more.',
      text3:
        'Although we all know that the weather in Malaysia is often very hot, we are not well prepared for it. We can use umbrellas to keep out the sun, but we can’t stop the sun’s light from reflecting to our eyes. Therefore, a pair of sunglasses is very necessary for us.',
      text4:
        'Although we all know that the weather in Malaysia is often very hot, we are not well prepared for it. We can use umbrellas to keep out the sun, but we can’t always carry an umbrella. Therefore, a hat is very necessary for us.',
      text5:
        'We specially launched T-shirt as one of the products of our website. This is because we know that many people are unfamiliar with Malaysia or they can’t speak Malay. Therefore, they generally don’t buy clothes in Malaysia. But everyone may encounter unexpected events, and then they can buy T-shirts directly on our website.',
      text6:
        'Nail polish is what most girls need. In response to the needs of our classmates, we found this nail polish suitable for most girls on the Internet. If you are satisfied with this style of nail polish, don’t hesitate to place an order directly!',
      text7:
        'We offer you many characteristic bracelets. Believe us, every bracelet is exquisite. It will definitely satisfy you! The most important thing is that the price of the bracelet is very favorable!',
      text8:
        'Of course, you may not be interested in some cheap bracelets, but we can also provide you with some perfect silver bracelets! As you can see, this kind of silver bracelet is very extensible, and it can fit your wrist perfectly.',
      text9:
        'We can also provide some wearable nails if you find it troublesome to apply nail polish. Wearable nails can be attached directly to your nails without damaging them. And it has a certain protective effect on your nails, so don’t worry!',
      text10:
        'The plug in the dormitory is never enough! So you must not miss the multifunctional socket on our website! Our multifunctional socket not only has multiple sockets, but also can directly charge your electronic equipment! Of course, its safety is very high, so you don’t have to worry about leakage when charging with this multifunctional socket!',
      text11:
        'A wallet looks unremarkable, but its function can’t be ignored. If our important items are put directly in the pocket of clothes, then we may accidentally lose these important items because they may be inconspicuous, such as a piece of paper with important information. But if we put them in our wallets, it will be different.',
      text12:
        'Now we all carry mobile phones with us and can check the time at any time. It seems that it doesn’t matter whether we have a watch or not. But the function of a watch is not only to check the time without a mobile phone, but also to play a decorative role. A suitable watch can amplify the charm of both men and women!',
      cash1: 25,
      cash2: 30,
      cash3: 5,
      cash4: 8,
      cash5: 21,
      cash6: 7,
      cash7: 10,
      cash8: 35,
      cash9: 6,
      cash10: 14,
      cash11: 4,
      cash12: 27,
      white: true,
      black: false,
      blue: false,
      amount: 1,
    };
  },
  methods: {
    color1() {
      this.white = true;
      this.black = false;
      this.blue = false;
    },
    color2() {
      this.white = false;
      this.black = true;
      this.blue = false;
    },
    color3() {
      this.white = false;
      this.black = false;
      this.blue = true;
    },
    validateQuantity() {
      if (this.amount < 1) {
        this.amount = 1;
      } else if (this.amount > 100) {
        this.amount = 100;
      }
    },
    front(){
      this.$router.push('/home');
    },
    next(){
      this.$router.push('/cart');
    },
    async cart() {
      let color = '';
      if (this.white === true) {
        color = 'white';
      } else if (this.black === true) {
        color = 'black';
      } else if (this.blue === true) {
        color = 'blue';
      }
      try {
        const response1 = await axios.get('http://localhost/finduser');
        console.log('User info response1:', response1.data);

        if (response1.data) {
          const response2 = await axios.post('http://localhost/products', {
            id: this.$route.query.a,
          });

          console.log('Product info response2:', response2.data);

          if (response2.data) {
            const response = await axios.post('http://localhost/cart', {
              name: response1.data[0].username,
              product: this.$route.query.a,
              color: color,
              amount: this.amount,
              price: response2.data.price,
            });
            console.log('Add to cart response3:', response.data);
            if (response.data) {
              alert('Successfully added to the shopping cart!');
              this.$router.push('/cart');
            }
          }
        }
      } catch (error) {
        console.error('Error :', error.response.data);
        alert(error.response.data);
      }
    },
  },
};
</script>

<style scoped>
.front {
  position: fixed;
  bottom: 17%; 
  left: 5%; 
  transform: translate(-50%, -50%); 
  padding: 10px 20px; 
  background-color: #007bff; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  font-size: 10px; 
}
.next {
  position: fixed;
  bottom: 17%; 
  left: 94.5%; 
  transform: translate(-50%, -50%); 
  padding: 10px 20px; 
  background-color: #007bff; 
  color: white; 
  border: none; 
  border-radius: 5px;
  font-size: 10px; 
}
.next:hover{
  background-color: black; 
}
.front:hover{
  background-color: black;
}


.shadw {
  position: absolute;
  top: 15%;
  left: 30%;
  width: 45%; 
  height: 8%; 
  background-color: rgb(15, 219, 238); 
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6); 
}
.sale {
  position: absolute;
  top: 82%;
  left: 5%;
  width: 15%; 
  height: 10%;
  font-size: 30px;
  color: #e915a6;
  border-radius: 20px; 
  font-weight: bold;
  font-style: italic;
}
.sale1 {
  position: absolute;
  top: 80%;
  left: 15%;
  width: 11%; 
  height: 8%;
  font-size: 50px;
  color: red;
  border-radius: 30px; 
  font-weight: bold;
  font-style: italic;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);  
}
.image1 {
  position: absolute;
  top: 82%;
  left: 53.5%;
  width: 10%; 
  height: 10%;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);  
}
.image1 img {
  max-width: 100%;
  height: 100%; 
  border-radius: 10px;
}
.image1:hover {
  transform: scale(1.2);
}

.input {
  position: absolute;
  top: 65.5%;
  left: 61%;
  width: 10%;
  font-size: 20px;
  border-radius: 10px;
}
.input-container{
  position: absolute;
  top: 65%;
  left: 60%;
  height: 5%; 
  background-color:lightblue; 
  width: 12.5%;
  font-size: 25px;
  border-radius: 10px;
}
.amount-text{
  position: absolute;
  top: 65%;
  left: 45%;
  height: 5%; 
  background-color: lightblue; 
  width: 14%;
  font-size: 25px;
  font-family:cursive;
  border-radius: 10px; 
}
.button-container {
  position: absolute;
  top: 63%;
  left: 3%;
  height: 8%; 
  background-color: orange; 
  width: 24%;
  border-radius: 10px; 
}
.color1 {
  position: absolute;
  top: 64%;
  left: 5%;
  width: 6%; 
  height: 6%; 
  background-color: white;
  border-radius: 10px; 
}
.color1 img {
  width: 100%;
  height: 100%; 
  border-radius: 10px;
}
.color2 {
  position: absolute;
  top: 64%;
  left: 12%;
  width: 6%; 
  height: 6%; 
  background-color: white;
  border-radius: 10px; 
}
.color2:hover {
  transform: scale(1.2);
  background-color: bisque;
  color: brown;
}
.color1:hover {
  transform: scale(1.2);
  background-color: bisque;
  color: brown;
}
.color3 {
  position: absolute;
  top: 64%;
  left: 19%;
  width: 6%; 
  height: 6%; 
  font-size: 17px;
  background-color: white;
  border-radius: 10px; 
}
.color3:hover {
  transform: scale(1.2);
  background-color: bisque;
  color: brown;
}
.color3 img {
  width: 100%;
  height: 100%; 
  border-radius: 10px;
}
.color2 img {
  width: 100%;
  height: 100%; 
  border-radius: 10px;
}
.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}
.footer {
  height: 100%; 
  background-color:white; 
  width: 100%; 
  position: absolute; 
}
.text-container2 {
  position: absolute;
  top: 15%;
  left: 32%;
  width: 60%;
  height: 10%;
  color: rgb(181, 14, 237);
  font-family:cursive;
  font-size: 30px;
}
.footer1 {
  position: absolute; 
  top: 0;
  left: 0;
  height: 4%; 
  background-color: black;
  width: 100%; 
  position: absolute; 
}
.footer2 {
  position: absolute;
  top: 96%;
  left: 0;
  height: 4%; 
  background-color: black; 
  width: 100%; 
}
.footer3 {
  position: absolute;
  top: 25%;
  left: 0;
  height: 2%; 
  background-color: rgb(77, 100, 218); 
  width: 100%; 
}
.Product-square-box1 {
  position: absolute;
  top: 30%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px;
}
.Product-square-box1 img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product-square-box3 {
  position: absolute;
  top: 30%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px;
}
.Product-square-box3 img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.Product-square-box2 {
  position: absolute;
  top: 30%;
  left: 2%;
  width: 24.5%; 
  height: 30%; 
  background-color: white; 
  border: 2px solid black;
  display: flex;
  border-radius: 10px;
}
.Product-square-box2 img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
.displaytext-container {
  position: absolute;
  top: 30%;
  left: 32%;
  width: 55%; 
  height: 30%; 
  color: black;
  font-family:monospace;
  font-size: 15px;
  background-color: rgb(15, 167, 238); 
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6); 
}
.Product-text-container {
  position: absolute;
  top: 35%;
  left: 35%;
  width: 50%; 
  height: 30%; 
  color: black;
  font-family:monospace;
  font-size: 15px;
}

.button4 {
  position: absolute;
  top: 75%;
  left: 50%;
  font-size: 20px;
  color: red;
  border-radius: 10px;
}
.button4:hover {
  transform: scale(1.2);
  background-color: bisque;
  color: brown;
}
.cash {
  position: absolute;
  top: 72%;
  left: 15%;
  width: 5%; 
  height: 5%; 
  color: black;
  font-family:monospace;
  font-size: 40px;
}
.RM {
  position: absolute;
  top: 73.5%;
  left: 10%;
  width: 5%;
  height: 5%;
  color: black;
  font-family:monospace;
  font-size: 30px; 
}
</style>
