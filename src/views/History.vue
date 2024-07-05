<template>
  <div class="Background">
    <div class="footer"></div>
  </div>
  <div class="image-container1">
    <img src="/src/assets/Logo.png" alt="Logo" />
  </div>
  <div><Xshopping /></div>
  <div class="shadw"></div>
  <div class="text-container2">Continuously improve the service level of shopping websites!</div>
  <div class="Background-Container1">
    <div class="footer1"></div>
  </div>
  <div class="Background-Container2">
    <div class="footer2"></div>
  </div>
  <div class="green-container">
    <div class="footer3"></div>
  </div>
  <Navigation />

  <div class="buttons-container">
    <button @click="showTable('purchases')" class="button">Show Purchases</button>
    
  </div>

  <div class="purchases-container">
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Product</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchase in userPurchases" :key="purchase.id">
          <td>{{ purchase.username }}</td>
          <td>{{ purchase.product }}</td>
          <td>{{ purchase.color }}</td>
          <td>{{ purchase.amount }}</td>
          <td>{{ purchase.price }}</td>
          <td>{{ purchase.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button class="front" @click="front">Back</button>
  <button class="next" @click="next">Next</button>

</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Xshopping from '@/components/Xshopping.vue';
import axios from 'axios'

export default {
  components: {
    Xshopping,
    Navigation
  },
  data() {
    return {
      userPurchases: [], 
    };
  },
  created() {
    this.fetchPurchases();
  },
  methods: {
    front() {
      this.$router.push('/cart');
    },
    next() {
      this.$router.push('/more');
    },
    async fetchPurchases() {
      try {
        const response = await axios.get('http://localhost/purchasesuser');
        this.userPurchases = response.data;
        console.log('User info:', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    }
  }
};
</script>

<style scoped>
.purchases-container,
.userInfo-container,
.feedback-container,
.users-container {
  position: absolute;
  top: 35%;
  left: 12%;
  padding: 20px;
  width: 70%;
  height: 400px; /* 设置最大高度 */
  overflow-y: auto; /* 使用垂直滚动条 */
}
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
.front {
  z-index: 2;
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
  z-index: 2;
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
.next:hover {
  background-color: black;
}
.front:hover {
  background-color: black;
}
.shadw {
  position: absolute;
  top: 15%;
  left: 18%;
  width: 73%; 
  height: 8%; 
  background-color: rgb(15, 167, 238); 
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6); 
}
.buttons-container {
  position: absolute;
  top: 30%;
  left: 40%;
  text-align: center;
}

.buttons-container button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}
.button:hover {
  transform: scale(1.2);
  background-color: rgb(89, 0, 255);
  color: white;
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
  .image-container1 {
    position: absolute;
    top: 5%;
    left: 1%;
    width: 10%; 
    height: 10%; 
  }
  .image-container1 img {
    max-width: 100%;
    height: 100%; 
    border-radius: 10px;
  }
  .text-container2 {
    position: absolute;
    top: 15%;
    left: 20%;
    width: 70%;
    height: 10%;
    color: rgb(125, 236, 45);
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
    background-color: rgb(237, 94, 230); 
    width: 100%; 
  }
</style>