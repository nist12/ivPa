<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-900">
        <nuxt-link to="/">Immobilienverwaltung</nuxt-link>
      </div>

      <!-- Menu (hidden on mobile) -->
      <div class="hidden md:flex space-x-8">
        <nuxt-link
          to="#"
          class="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >Home</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >Services</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >Immobilien</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >Über Uns</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >Kontakt</nuxt-link
        >
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu (hidden on desktop) -->
    <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2">
      <nuxt-link
        to="#"
        class="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >Home</nuxt-link
      >
      <nuxt-link
        to="#"
        class="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >Services</nuxt-link
      >
      <nuxt-link
        to="#"
        class="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >Immobilien</nuxt-link
      >
      <nuxt-link
        to="#"
        class="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >Über Uns</nuxt-link
      >
      <nuxt-link
        to="#"
        class="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >Kontakt</nuxt-link
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
/* Optional: Customize the Navbar styles */
</style>

