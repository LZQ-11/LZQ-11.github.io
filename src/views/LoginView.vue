<template>
  <div class="login-page">
    <div class="background-container">
      <img src="/src/assets/Display2.png" alt="Background Image" />
    </div>
    <div class="image-container1">
      <img src="/src/assets/Logo.png" alt="Logo" />
    </div>
    <div class="image-container2">
      <img src="/src/assets/LoginImage.png" alt="Logo" />
    </div>
    <div class="text1">Xshopping</div>
    
    <button @click="customer" class="customer">Customer</button>
    <button @click="admin" class="admin">Admin</button>
 
    <div v-if="showForm1" class="form-container1" >
      <label for="name" class="Input1-1">Name: </label>
      <input v-model="name" id="name" name="name" class="input1-1" type="text" required/>
      <label for="passwprd" class="Input1-2">Password: </label>
      <input v-model="password" id="password" name="password" class="input1-2" type="password" required/>
      <button @click="login1" class="login">Login</button>
      <button @click="register1" class="register">Go to Register</button>
    </div>

    <div v-if="showForm2" class="form-container2">
      <label for="name" class="Input2-1">Name: </label>
      <input v-model="name" id="name" name="name" class="input2-1" type="text" required/>
      <label for="passwprd" class="Input2-2">Password: </label>
      <input v-model="password" id="password" name="password" class="input2-2" type="text" required/>
      <label for="address" class="Input2-3">Address: </label>
      <input v-model="address" id="address" name="address" class="input2-3" type="text" required/>
      <label for="emailaddress" class="Input2-4">E-mail: </label>
      <input v-model="email" id="emailaddress" name="emailaddress" class="input2-4" type="text" required/>
      <label for="phonenumber" class="Input2-5">Phone: </label>
      <input v-model="phone" id="phonenumber" name="phonenumber" class="input2-5" type="text" required/>
      <button @click="login2" class="login">Back to Login</button>
      <button @click="register2" class="register">Register</button>
    </div>

    <div v-if="showForm3" class="form-container3">
      <label for="name" class="Input3-1">Name: </label>
      <input v-model="name" id="name" name="name" class="input3-1" type="text" required/>
      <label for="passwprd" class="Input3-2">Password: </label>
      <input v-model="password" id="password" name="password" class="input3-2" type="password" required/>
      <button @click="login3" class="login3">Login</button>
    </div>
     
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      showForm1: true, 
      showForm2: false, 
      showForm3: false, 
      name: '',
      password: '',
      address: '',
      email: '',
      phone: ''
    };
  },
  methods: {
    validateEmail(emailaddress) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(emailaddress);
    },
    validatePhoneNumber(phonenumber) {
      const phonePattern = /^\d{11}$/;
      return phonePattern.test(phonenumber);
    },
    login2() {
      this.clearInputs();
      this.showForm1 = true;
      this.showForm2 = false;
      this.showForm3 = false;
    },
    login3(){
      if (this.name === 'SWE1809355' && this.password === 'Victory1234') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/admin');
      }  
      if (this.name !== 'SWE1809355' || this.password !== 'Victory1234') {
        alert('You are not the administrator!');
      }
    },
    register1(){
      this.showForm1 = false;
      this.showForm2 = true;
      this.showForm3 = false; 
      this.clearInputs();
    },
    customer(){
      this.clearInputs();
      this.showForm1 = true;
      this.showForm2 = false;
      this.showForm3 = false; 
    },
    admin(){
      this.clearInputs();
      this.showForm1 = false;
      this.showForm2 = false;
      this.showForm3 = true; 
    },
    clearInputs() {
      // 清空所有输入值
      this.name = '';
      this.password = '';
      this.email = '';
      this.address = '';
      this.phone = '';
    },
    async login1() { 
        try {
          const response = await axios.get('http://localhost/user');
          const userData = response.data;

          const user = userData.find(u => u.username === this.name);
          if (user) {
            if (this.password === user.password) {
              localStorage.setItem('auth', 'true'); 
              this.$router.push('/home');
              await axios.post('http://localhost/state', {
                name: this.name
              });
            } else {
              alert('Password Error!');
            }
          } else {
            alert('Username Error!');
          }
        } catch (error) {
          alert('Server error!');
        }
    },
    async register2() {
      if (!this.name){
        alert('Please Enter Your Name!')
      } else {
        if (!this.password){
          alert('Please Enter Your Password!') 
        } else {
          if (!this.address){
            alert('Please Enter Your Address!')  
          } else {
            if (!this.email){
              alert('Please Enter Your E-mail Address!') 
            } else {
              if (!this.phone){
                alert('Please Enter Your Phone Number!') 
              } else {
                if (!/^[a-zA-Z0-9]{8,20}$/.test(this.password)) {
                  alert('Password must be 8-20 alphanumeric characters');
                  return;
                } else { 
                  if (!this.validateEmail(this.email)) {
                    alert('Please enter a valid email address');
                  } else {
                    if (!this.validatePhoneNumber(this.phone)) {
                      alert('Please enter a valid 11-digit phone number');
                    } else {
                      try {
                        const response = await axios.post('http://localhost/register', {
                          name: this.name,
                          password: this.password,
                          address: this.address,
                          email: this.email,
                          phone: this.phone
                        });
                        if (response.data === 0){
                          alert('Server Error!');
                        }
                        if (response.data === 1){
                          alert('This name is already used!');
                        }
                        if (response.data === 2){
                          alert('This password is already used!');
                        }
                        if (response.data === 3){
                          alert('This Address is already used!');
                        }
                        if (response.data === 4){
                          alert('This E-mail Address is already used!');
                        }
                        if (response.data === 5){
                          alert('This Phone Number is already used!');
                        }
                        if (response.data === 6){
                          alert('Congratulations on your successful registration!');
                          localStorage.setItem('auth', 'true');
                          this.$router.push('/home');
                          await axios.post('http://localhost/state', {
                            name: this.name
                          });
                        }
                      } catch (error) {
                          console.error('Error registering user:', error.response.data);
                          alert(error.response.data);
                        }
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    }
  }
};
</script>

<style scoped>
.customer {
  position: absolute;
  top: 40%;
  left: 70%;
  font-size: 20px; 
}
.admin {
  position: absolute;
  top: 50%;
  left: 71.2%;
  font-size: 20px; 
}
.customer:hover {
  transform: scale(1.2);
  color: red;
}
.admin:hover {
  transform: scale(1.2);
  color: red;
}
.login3 {
  position: absolute;
  top: 105%;
  left: 40%;
  font-size: 20px; 
}
.login {
  position: absolute;
  top: 105%;
  left: 10%;
  font-size: 20px;
}
.login:hover {
  transform: scale(1.2);
  color: red;
}
.login3:hover {
  transform: scale(1.2);
  color: red;
}
.register {
  position: absolute;
  top: 105%;
  right: 10%;
  font-size: 20px;
}
.register:hover {
  transform: scale(1.2);
  color: red;
}

.text1 {
  position: absolute;
  top: 1%;
  justify-content: center;
  font-size: 35px;
  font-family: monospace;
  color: coral;
}
.image-container1 {
  position: absolute;
  top: 0;
  left: 2%;
  width: 10%;
  height: 7%;
}
.image-container1 img {
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
}
.image-container2 {
  position: absolute;
  top: 89%;
  left: 0;
  width: 100%;
  height: 10%;
}
.image-container2 img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.login-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.background-container {
  position: absolute;
  width: 100%;
  height: 80%;
  top: 8%;
  left: 0;
}
.background-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  opacity: 1;
  transition: opacity 2s, filter 2s;
  filter: blur(0);
}
.form-container1 {
  position: absolute;
  top: 30%;
  left:20%;
  width: 35%;
  height: 30%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-container2 {
  position: absolute;
  top: 30%;
  left:20%;
  width: 35%;
  height: 30%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-container3 {
  position: absolute;
  top: 30%;
  left:20%;
  width: 35%;
  height: 30%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Input2-1 {
  position: absolute;
  top: 7%;
  left: 10%;
  font-size: 20px;
}
.Input2-2 {
  position: absolute;
  top: 27%;
  left: 10%;
  font-size: 20px;
}
.Input1-1 {
  position: absolute;
  top: 25%;
  left: 10%;
  font-size: 20px;
}
.Input1-2 {
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 20px;
}
.Input3-1 {
  position: absolute;
  top: 25%;
  left: 10%;
  font-size: 20px;
}
.Input3-2 {
  position: absolute;
  top: 60%;
  left: 10%;
  font-size: 20px;
}
.Input2-3 {
  position: absolute;
  top: 47%;
  left: 10%;
  font-size: 20px;
}
.Input2-4 {
  position: absolute;
  top: 67%;
  left: 10%;
  font-size: 20px;
}
.Input2-5 {
  position: absolute;
  top: 87%;
  left: 10%;
  font-size: 20px;
}
.input2-1 {
  position: absolute;
  top: 7%;
  left: 32%;
  font-size: 20px;
}
.input2-2 {
  position: absolute;
  top: 27%;
  left: 32%;
  font-size: 20px;
}
.input3-1 {
  position: absolute;
  top: 25%;
  left: 32%;
  font-size: 20px;
}
.input3-2 {
  position: absolute;
  top: 60%;
  left: 32%;
  font-size: 20px;
}
.input1-1 {
  position: absolute;
  top: 25%;
  left: 32%;
  font-size: 20px;
}
.input1-2 {
  position: absolute;
  top: 60%;
  left: 32%;
  font-size: 20px;
}
.input2-3 {
  position: absolute;
  top: 47%;
  left: 32%;
  font-size: 20px;
}
.input2-4 {
  position: absolute;
  top: 67%;
  left: 32%;
  font-size: 20px;
}
.input2-5 {
  position: absolute;
  top: 87%;
  left: 32%;
  font-size: 20px;
}
</style>


