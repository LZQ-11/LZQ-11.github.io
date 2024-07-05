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
  <button @click="logout" class="logout">Logout</button>

  <div class="buttons-container">
    <button @click="showTable('purchases')" class="button">Show Purchases</button>
    <button @click="showTable('feedback')" class="button">Show Feedback</button>
    <button @click="showTable('users')" class="button">Show Users</button>
  </div>

  <div v-if="currentTable === 'purchases'" class="purchases-container">
    <table>
      <thead>
        <tr>
          <th>No.</th>
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
          <td>{{ purchase.id }}</td>
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

  <div v-if="currentTable === 'feedback'" class="feedback-container">
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Message</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feedback in feedbackMessages" :key="feedback.id">
          <td>{{ feedback.id }}</td>
          <td>{{ feedback.username }}</td> 
          <td>{{ feedback.message }}</td>
          <td>{{ feedback.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="currentTable === 'users'" class="users-container">
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Password</th>
          <th>Address</th>
          <th>E-mail Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone_number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Xshopping from '@/components/Xshopping.vue';
import axios from 'axios'

export default {
  components: {
    Xshopping
  },
  data() {
    return {
      userPurchases: [],
      feedbackMessages: [],
      users: [],
      currentTable: 'purchases' 
    };
  },
  created() {
    this.fetchUsers();
    this.fetchFeedback();
    this.fetchPurchases();
  },
  methods: {
    logout(){
      localStorage.removeItem('auth');
      this.$router.push('/login');
    },
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost/user');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    },
    async fetchFeedback() {
      try {
        const response = await axios.get('http://localhost/feedbacks');
        this.feedbackMessages = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    },
    async fetchPurchases() {
      try {
        const response = await axios.get('http://localhost/purchases');
        this.userPurchases = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    },
    showTable(tableName) {
      this.currentTable = tableName;
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
  left: 18%;
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
.logout {
  position:absolute;
  top: 8%;
  left: 80%;
  font-size: 20px;
}
.logout:hover {
  transform: scale(1.2);
  background-color: red;
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