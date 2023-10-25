<template>
    <div class="flex flex-col justify-between items-center p-6 bg-gris text-white font-roboto">
      <!-- Gauche : Logos -->
      <div class="flex space-x-4 ">
        <img src="/public/logo_Base.svg" alt="Logo 1" class=" w-auto">
        <img src="path/to/logo2.png" alt="Logo 2" class="h-8 w-auto">
      </div>
  
      <!-- Centre : Navigation -->
      <div class="flex space-x-6">
        <a href="#" class="hover:underline">Configurateur</a>
        <a href="#" class="hover:underline">Notre Histoire</a>
        <a href="#" class="hover:underline">Lunettes</a>
        <a href="#" class="hover:underline">Compte</a>
      </div>
  
      <!-- Droite : Contact et Réseaux sociaux -->
      <div class="flex justify-between items-center w-full mt-4">
        <div>
          <h4 class="mb-2">Contact</h4>
          <a href="#" class="hover:underline">F.A.Q</a>
          <a href="#" class="hover:underline ml-4">Contactez-nous</a>
        </div>
        <div class="flex space-x-4">
          <a href="#"><img src="/public/instagram.svg" alt="Instagram" class="h-6 w-auto"></a>
          <a href="#"><img src="/public/facebook.svg" alt="Facebook" class="h-6 w-auto"></a>
          <a href="#"><img src="/public/youtube.svg" alt="YouTube" class="h-6 w-auto"></a>
        </div>
      </div>
      
      <!-- Mentions en bas -->
      <div class="w-full mt-4 border-t  pt-4 text-center">
        © copyright 2023 - Mentions légales - Politiques de confidentialité
      </div>
    </div>
  </template>
  
  <script setup>
  // Utilisez 'script setup' pour la Composition API dans Vue 3
  </script>
  
  <style scoped>
  /* Ajoutez ici des styles supplémentaires si nécessaire */
  </style>
  