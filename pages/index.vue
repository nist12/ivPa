<template>
    <div>
      <!-- Navbar -->
      <Navbar />
  
      <!-- Hero Section -->
      <section id="hero" class="relative h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center">
        <div class="container mx-auto text-center">
          <h1 class="text-6xl font-extrabold mb-6">Immobilienverwaltung neu definiert</h1>
          <p class="text-xl mb-10">Verwaltung, Vermietung und Verkauf mit Vertrauen und Expertise.</p>
          <button @click="scrollTo('#leistungen')" class="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
            Unsere Dienstleistungen
          </button>
        </div>
      </section>
  
      <!-- Dienstleistungen Section -->
      <section id="leistungen" class="py-24 bg-gray-50">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-extrabold mb-12 text-indigo-600">Unsere Dienstleistungen</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ServiceCard 
              title="Immobilienverwaltung"
              description="Verlässliche Verwaltung Ihrer Immobilien mit transparenten Prozessen."
              image="/images/immobilienverwaltung.jpg"
            />
            <ServiceCard 
              title="Vermietung"
              description="Effiziente Vermietung und Marktanalyse, um den passenden Mieter zu finden."
              image="/images/vermietung.jpg"
            />
            <ServiceCard 
              title="Immobilienverkauf"
              description="Maximieren Sie den Verkaufswert Ihrer Immobilie mit unserer Expertise."
              image="/images/immobilienverkauf.jpg"
            />
          </div>
        </div>
      </section>
  
      <!-- Eigenschaften-Portfolio Section -->
      <section id="eigenschaften" class="py-24 bg-white">
        <div class="container mx-auto">
          <h2 class="text-4xl font-extrabold mb-12 text-purple-600 text-center">Unsere Immobilien</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Dynamisches Rendering der Immobilien -->
            <div v-for="house in houses" :key="house.id" class="property-card">
              <PropertyCard 
               :title="house.Titel"
                :description="house.Beschreibung"
                :image="`http://localhost:1337${house.Bild?.url}`"
                :price="house.Preis"
              />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Weitere Abschnitte bleiben unverändert... -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import ServiceCard from '~/components/ServiceCard.vue'
  import PropertyCard from '~/components/PropertyCard.vue'
  
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  
  // Zustand für die Häuser
  const houses = ref([])
  
  // API-Token
  const apiToken = 'dd82f7996031201d21a56d1e489fa65ebc261c0524886af951a0789d9a1efa155140fd30b3e1cf4d35d9342dd3df2ff943dbbbf02ec9588e43ebfecd1240ecde952c594526682bf51e2ff24025d983ed3f28093023f75bb0cb86a9c416fbdf6f3acdf3e8add5da685c9eaab82edeaec6861fb6c1e5f71a7920521ef742e8875c'
  
  // Funktion zum Abrufen der Häuser
  const fetchHouses = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/haeuser?populate=*', {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    console.log('Daten von Strapi:', response.data.data); // Prüfe die Struktur hier
    houses.value = response.data.data;
    console.log('Daten von Strapi:', response.data.data); // Existierende Log-Zeile
console.log('Häuser:', houses.value); // Neue Log-Zeile

  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
};

  
  // Abrufen der Häuser beim Mounten des Komponentes
  onMounted(() => {
    fetchHouses()
  })
  
  // Scroll-Funktion
  const scrollTo = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' })
  }
  </script>
  
  <style scoped>
  /* Optional: custom styles */
  </style>
  