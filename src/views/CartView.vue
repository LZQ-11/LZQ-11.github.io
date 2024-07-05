<template>
  <div class="Background">
    <div class="footer"></div>
  </div>
  <div class="shadw"></div>
  <div><Logo /></div>
  <button @click="payment" class="button4">GO FOR PAYMENT!</button>

  <div v-if="QR" class="QR-container">
    <img src="/src/assets/QRcode.png" alt="Logo" />
    <button class="close" @click="close">COMPLETED</button>
  </div>

  <div><Xshopping /></div>
  <div class="text-container2">
    Your cart is empty! Fill your shopping cart!
  </div>
  <div><Navigation /></div>
  <div class="Background-Container1">
    <div class="footer1"></div>
  </div>
  <div class="Background-Container2">
    <div class="footer2"></div>
  </div>
  <div class="green-container">
    <div class="footer3"></div>
  </div>
  <div v-if="goodsTotal !== 0" class="totalInfo">
    Total: <span style="color: #f40">{{ goodsTotal }}RM</span>
  </div>
  <div class="users-container">
    <div class="cartWrapper">
      <div
        v-if="cartList.length !== 0"
        class="cartItem"
        :key="item.id"
        v-for="item in cartList"
      >
        <div class="cartInfo">
          <div>
            <div>username: {{ item.username }}</div>
            <div>product: {{ item.productName }}</div>
          </div>
          <div>
            <div>color: {{ item.color }}</div>
            <div>amount: {{ item.amount }}</div>
          </div>
          <div>
            <div>price: {{ item.price }}</div>
            <div>total: {{ item.total }}RM</div>
          </div>
        </div>
        <div class="delete">
          <div class="delBtn" @click="handleDelete(item.id)">Delete</div>
          <input type="checkbox" v-model="item.checked" name="" id="" />
        </div>
      </div>
      <div v-else class="naData">
        <img src="/src/assets/noData.png" alt="" />
        <span>There is currently no data available</span>
      </div>
    </div>
  </div>

  <button class="front" @click="front">Back</button>
  <button class="next" @click="next">Next</button>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import Xshopping from '@/components/Xshopping.vue';
import axios from 'axios';

export default {
  name: 'CartView',
  components: {
    Navigation,
    Xshopping,
    Logo,
  },
  data() {
    return {
      cartList: [],
      goodsTotal: 0,
      QR: false,
    };
  },
  created() {
    this.getList();
  },
  watch: {
    cartList: {
      handler(newVal, oldVal) {
        this.goodsTotal = newVal
          .filter((item) => item.checked)
          .reduce((preVal, curVal) => {
            return preVal + parseInt(curVal.total);
          }, 0);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getList() {
      axios.get('http://localhost/getAllProduct').then((res1) => {
        axios.get('http://localhost/getCarts').then((res2) => {
          this.cartList = res2.data.map((item) => {
            return {
              ...item,
              checked: false,
              productName: res1.data.find(
                (product) => product.id == item.product
              ).product_name,
            };
          });
        });
      });
    },
    handleDelete(id) {
      this.deleteCarts([id]);
    },

    deleteCarts(ids) {
      axios
        .post('http://localhost/deleteCart', {
          ids,
        })
        .then((res) => {
          if (res.data.code === 0) {
            alert('Delete Successful!');
            this.getList();
          }
        });
    },
    payment() {
      if (this.goodsTotal === 0) {
        alert(`Please select the goods!`);
      } else {
        this.QR = true;
      }
    },
    front() {
      this.$router.push({ path: '/productdetail', query: { a: 1 } });
    },
    next() {
      this.$router.push('/history');
    },
    close() {
      alert(`Thank you for trusting our shopping website!`);
      this.QR = false;
      let ids = this.cartList
        .filter((item) => item.checked)
        .map((item) => item.id);
      axios
        .post('http://localhost/deleteCartAndRecord', {
          ids,
        })
        .then((res) => {
          if (res.data.code === 0) {
            this.getList();
          }
        });
    },
  },
};
</script>

<style scoped>
.QR-container {
  z-index: 2;
  position: fixed;
  top: 40%;
  left: 44%;
  width: 20%;
  height: 20%;
}
.QR-container img {
  max-width: 100%;
  height: 100%;
}
.close {
  position: fixed;
  top: 48%;
  left: 35%;
  width: 8%;
  height: 5%;
  color: red;
}
.close:hover {
  transform: scale(1.2);
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
  left: 23%;
  width: 58%;
  height: 8%;
  background-color: black;
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
::-webkit-scrollbar-corner {
  background: #179a16;
}
.color1 {
  position: absolute;
  top: 40%;
}
.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 124%;
}
.footer {
  height: 100%;
  background-color: white;
  width: 100%;
  position: absolute;
}
.text-container2 {
  position: absolute;
  top: 15%;
  left: 25%;
  width: 60%;
  height: 10%;
  color: rgb(45, 182, 236);
  font-family: cursive;
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
  top: 120%;
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
  background-color: rgb(71, 228, 62);
  width: 100%;
}

.button4 {
  position: absolute;
  top: 30%;
  left: 55%;
  font-size: 20px;
  color: black;
  z-index: 999999;
}
.button4:hover {
  transform: scale(1.2);
  color: red;
}
.users-container {
  position: absolute;
  z-index: 1;
  height: 550px;
  width: 100%;
  top: 300px;
  box-sizing: border-box;
  overflow: hidden;
}
.cartWrapper {
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  width: 80%;
  padding-right: 10px;
}
.cartItem {
  height: 100px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  margin-bottom: 20px;
  border-radius: 60px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);
}
.cartInfo {
  display: flex;
  flex: 1 1 auto;
  max-width: calc(100% - 200px);
}
.cartInfo > div {
  flex: 0 0 30%;
  overflow: hidden;
  margin-left: 20px;
}
.cartInfo > div:nth-child(1) {
  flex: 0 0 40%;
  margin-left: 50px;
}
.cartInfo > div > div {
  height: 50%;
  line-height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 25px;
  font-family: cursive;
}
.delete {
  flex: 0 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.delBtn {
  height: 40px;
  width: 100px;
  border-radius: 5px;
  background-color: #ff4400;
  color: #fff;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.naData {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #999;
  flex-direction: column;
}
input[type='checkbox'] {
  height: 20px;
  width: 20px;
  margin-left: 20px;
}
.totalInfo {
  position: absolute;
  z-index: 999;
  top: 30%;
  left: 30%;
  font-size: 30px;
  font-family: monospace;
}
</style>
