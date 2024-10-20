<template>
  <div class="property-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <p class="text-indigo-600 font-bold text-lg">{{ price }} €</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  price: Number
});
</script>

<style scoped>
.property-card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.property-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
