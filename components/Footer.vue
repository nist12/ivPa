<template>
  <footer class="bg-gray-800 text-gray-200">
    <div class="container mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Kontaktinformationen -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-bold mb-4">Kontakt</h3>
          <p class="mb-2">Immobilienverwaltungsfirma GmbH</p>
          <p class="mb-2">Musterstraße 123, 12345 Musterstadt</p>
          <p class="mb-2">Telefon: +49 123 456 789</p>
          <p class="mb-2">E-Mail: info@immobilienfirma.de</p>
        </div>

        <!-- Nützliche Links -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-bold mb-4">Nützliche Links</h3>
          <ul class="space-y-2">
            <li>
              <nuxt-link
                to="#"
                class="hover:text-blue-400 transition-colors duration-300"
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-blue-400 transition-colors duration-300"
                >Services</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-blue-400 transition-colors duration-300"
                >Immobilien</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-blue-400 transition-colors duration-300"
                >Über Uns</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="#"
                class="hover:text-blue-400 transition-colors duration-300"
                >Kontakt</nuxt-link
              >
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-bold mb-4">Folgen Sie uns</h3>
          <div class="flex space-x-4">
            <a
              href="#"
              class="hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.03 3.66 9.19 8.44 10v-7.07H8.38V12h2.06V9.93c0-2.07 1.22-3.2 3.09-3.2.9 0 1.84.17 1.84.17v2.02H14.5c-1.15 0-1.51.72-1.51 1.46V12h2.57l-.41 2.99h-2.16V22.07c4.78-.81 8.44-4.97 8.44-10z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4.47s-4 9 5 13.18a11.64 11.64 0 01-7 2c9 5.56 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="hover:text-blue-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.16c3.2 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.315.976.976 1.253 2.243 1.315 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.315 3.608-.976.976-2.243 1.253-3.608 1.315-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.315-.976-.976-1.253-2.243-1.315-3.608-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.315-3.608.976-.976 2.243-1.253 3.608-1.315C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.014 7.05.072 5.766.13 4.5.386 3.43 1.455 2.36 2.524 2.104 3.79 2.046 5.072 1.988 6.354 1.976 6.758 1.976 10.002s.012 3.648.07 4.93c.058 1.282.314 2.548 1.384 3.617 1.07 1.07 2.337 1.326 3.617 1.384 1.282.058 1.686.07 4.93.07s3.648-.012 4.93-.07c1.282-.058 2.548-.314 3.617-1.384 1.07-1.07 1.326-2.337 1.384-3.617.058-1.282.07-1.686.07-4.93s-.012-3.648-.07-4.93c-.058-1.282-.314-2.548-1.384-3.617C19.65.386 18.384.13 17.102.072 15.818.014 15.414 0 12 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; 2024 Immobilienverwaltungsfirma GmbH. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Optional: Zusätzliche Stile für den Footer */
</style>

