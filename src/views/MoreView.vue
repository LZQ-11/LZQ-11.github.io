<template>
  <div class="Background">
    <div class="footer"></div>

    <Logo />
    <Navigation />
    <div class="shadw"></div>

    <!-- 将子组件包裹在一个容器中 -->
    <div class="xshopping-container">
      <Xshopping />
    </div>

    <div class="text-container2">Your Feedback Will Make Us A Great Progress!!! </div>
    <div class="footer4"></div>
    <div class="text-container3">
      Due to the limitation of funds and technology, our shopping website has many parts to be improved.
      However, our focus on development is limited, and we can't find all the problems, so if you have
      any strong ideas, please take the initiative to give us feedback. Only your support can promote our progress! ! !
    </div>
    
    <div class="Background-Container1">
      <div class="footer1"></div>
    </div>
    <div class="Background-Container2">
      <div class="footer2"></div>
    </div>
    <div class="green-container">
      <div class="footer3"></div>
    </div>

    <div class="form-container">
      <label for="message" class="Input">YOUR FEEDBACK: </label>
      <textarea v-model="message" id="message" name="message" rows="3" maxlength="300" class="input"></textarea>
    </div>
    <button type="button" class="submit" @click="submit">SUBMIT</button>

    <button class="front" @click="front">Back</button>
    <button class="next" @click="next">Next</button>
  </div>
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
    Logo
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    async submit() {
      if (!this.message) {
        alert('Please give us your feedback!');
      } else {
        try {
          console.log('Sending message to database:', this.message);
          const response = await axios.post('http://localhost/feedback', {
            message: this.message
          });
          if (response.status === 200) {
            alert('The feedback is already received!')
          }
          if (response.status === 500) {
            alert('Feedback Error!')
          }
        } catch (error) {
          alert('Server error!');
        }
      }
    },
    front(){
      this.$router.push('/history');
    },
    async next(){
      localStorage.removeItem('auth');
      this.$router.push('/login');
      await axios.post('http://localhost/statedelete', {
        data: 1
      });
    }
  }
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
  left: 23%;
  width: 62%; 
  height: 8%; 
  background-color: rgb(86, 88, 83); 
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6); 
}

.footer4 {
  position: absolute;
  top: 33%;
  left: 58%;
  height: 43%; 
  background-color: rgb(234, 193, 232); 
  width: 33%;
  border-radius: 20px;
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.6); 
}
.Background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  color: rgb(45, 236, 128);
  font-family: cursive;
  font-size: 30px;
}

.text-container3 {
  position: absolute;
  top: 35%;
  left: 60%;
  width: 30%;
  height: 10%;
  color: rgba(10, 55, 234, 0.355);
  font-family: cursive;
  font-size: 20px;
}

.footer1 {
  position: absolute; 
  top: 0;
  left: 0;
  height: 4%; 
  background-color: black;
  width: 100%; 
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

.form-container {
  position: absolute;
  z-index: 1;
  top: 35%;
  left: 15%;
  width: 35%;
  height: 25%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Input {
  margin-bottom: 10px;
}

.input {
  width: 100%;
  height: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

.submit {
  position: absolute;
  top: 80%;
  left: 30%;
  font-size: 20px;
}

.submit:hover {
  transform: scale(1.2);
  color: red;
}

/* 确保子组件中的文字颜色变化生效 */
.xshopping-container .text-container1 {
  color: red !important;
}
</style>

