<template>
  <div class="testimonial-card bg-gray-50 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
    <img :src="image" :alt="name" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
    <h3 class="text-lg font-semibold mb-2">{{ name }}</h3>
    <p class="text-gray-600 italic">"{{ feedback }}"</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  feedback: String,
  image: String
});
</script>

<style scoped>
.testimonial-card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.testimonial-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
