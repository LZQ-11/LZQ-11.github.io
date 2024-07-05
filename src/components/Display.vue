<template>
  <div class="Display-image-container1">
     <button class="arrow left-arrow" @click="prevImage">&lt;</button>
         <img :src="images[currentImageIndex]" alt="Logo" />
     <button class="arrow right-arrow" @click="nextImage">&gt;</button>
  </div>
</template>

<script>
export default {
    name: 'Display',
    data() {
        return {
            currentImageIndex: 0,
            images: [
                '/src/assets/Display.png',
                '/src/assets/Display1.png',
                '/src/assets/Display2.png',
            ],
            intervalId: null,
        }
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        },
        startAutoSlide() {
            this.intervalId = setInterval(() => {
                this.nextImage();
            }, 5000); 
         },
        stopAutoSlide() {
            clearInterval(this.intervalId);
        }
    },
    beforeDestroy() {
        this.stopAutoSlide();
  }
}
</script>

<style scoped>
.Display-image-container1 {
  position: absolute;
  top: 26.5%;
  left: 2%;
  width: 95%; 
  height: 37%; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px; 
  z-index: 1;
}
.Display-image-container1 img {
  width: 100%; 
  height: auto; 
  object-fit: cover; 
}
.arrow {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s, background-color 0.3s; 
  border-radius: 10px; 
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
.arrow:hover {
  transform: scale(1.2); 
  background-color: rgb(34, 0, 255);
}
</style>