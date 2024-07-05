<template>
  <div class="nav-container">
    <div class="buttons-container">
      <transition-group name="book-page" tag="div" class="buttons-wrapper">
        <button
          v-for="(button, index) in navButtons"
          :key="index"
          class="nav-button"
          :style="button.style"
          @click="handleButtonClick(index)"
        >
          {{ button.text }}
        </button>
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navigation',
  data() {
    return {
      navButtons: [
        { text: "Home", style: { fontSize: "20px" } }, 
        { text: "Cart", style: { fontSize: "20px" } }, 
        { text: "Feedback", style: { fontSize: "20px" } }, 
        { text: "Logout", style: { fontSize: "20px" } }, 
      ]
    };
  },
  methods: {
     async handleButtonClick(index) {
      if (index === 0) {
        this.$router.push('/home');
      } 
      if (index === 1) {
        this.$router.push('/cart');
      } 
      if (index === 2) {
        this.$router.push('/more');
      } 
      if (index === 3) {
        localStorage.removeItem('auth');
        this.$router.push('/login');
        await axios.post('http://localhost/statedelete', {
          data: 1
        });
      } 
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: absolute;
  top: 6%;
  left: 60%;
  display: flex;
  align-items: center;
}
.nav-button {
  margin: 0 5px;
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.nav-button:hover {
  transform: scale(1.2);
}
.nav-button img {
  width: 5vw;
  height: auto;
  transition: transform 0.3s, filter 0.3s;
}

.nav-button:hover img {
  filter: brightness(80%);
}

.buttons-container {
  display: flex;
}

.buttons-wrapper {
  display: flex;
}

.book-page-enter-active,
.book-page-leave-active {
  transition: all 0.5s;
}

.book-page-enter-from,
.book-page-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.book-page-enter-to,
.book-page-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.book-page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>





