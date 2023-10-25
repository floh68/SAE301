<script setup>
  import maps from '../components/Map.vue';
</script>
<template>
  <section>
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center flex-col">
        <h1 class=" text-blanc text-5xl font-light font-lato">Quelle est votre prochaine monture ?</h1>
        <p1 class="text-base font-roboto font-semibold font-base text-blanc p-7">Gardez toujours une bonne vue avec TaVue
        </p1>
        <button
          class="bg-bleuFonce font-roboto text-white px-8 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
          Configurez vos <br /> lunettes
        </button>
      </div>
      <img class="inset-0 z-0" src="/public/imageDeFond.webp" alt="imageFond" />

    </div>
  </section>

  <section>
    <div class="flex p-5 justify-center">
      <div class="w-2/5">
        <img class="object-cover w-full h-full" src="/public/lunettesDeco.webp" alt="lunettesDeco" />
      </div>
      <div class="w-1/2 flex flex-col justify-center pl-10 items-center ">
        <h1 class="text-3xl font-light mb-4 text-noir text-center font-lato">Créez votre propre paire de lunettes,
          adaptez-la en fonctions de vos envies !</h1>
        <p class="mb-4 text-noir font-roboto">Vous avez à disposition différentes possibilités de personnalisation...</p>
        <button
          class="bg-bleuFonce font-roboto text-white px-8 w-1/3 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
          Configurez vos <br /> lunettes
        </button>
      </div>
    </div>
  </section>
  <section class="p-10 text-center">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-light mb-4 text-noir text-center font-lato ">Notre histoire</h1>

      <div class="grid grid-cols-2 gap-8 mb-8 items-center font-roboto">
        <img src="/public/atelier.webp" alt="Description de l'image 1" class="w-full h-auto">
        <p class="text-lg">
          Au cœur de Paris, dans un atelier discret situé dans une ruelle pavée, la marque "TaVue" a vu le jour. Inspiré
          par l'élégance intemporelle de la mode française et la passion pour l'artisanat, "TaVue" a été créée avec l'idée
          de fusionner le design traditionnel avec une vision moderne.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 mb-8 items-center font-roboto">
        <p class="text-lg">
          Pour "TaVue", chaque paire de lunettes n'est pas qu'un simple accessoire, mais une extension de l'identité de
          celui qui la porte. Chaque monture est conçue pour refléter la singularité et l'individualité, tout en restant
          fidèle à l'essence du chic parisien.
        </p>
        <img src="/public/lunetteDecor.webp" alt="Description de l'image 2" class="w-full h-auto">
      </div>


      <div class="grid grid-cols-2 gap-8 mb-8 items-center font-roboto">
        <img src="/public/bricoleur.webp" alt="Description de l'image 3" class="w-full h-auto">
        <p class="text-lg">
          Bien que profondément enracinée dans la tradition, "TaVue" a toujours été tournée vers l'avenir. En adoptant les
          dernières technologies et matériaux, tout en respectant l'artisanat, la marque a su se démarquer en offrant des
          lunettes à la fois durables et tendance.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 mb-8 items-center font-roboto">
        <p class="text-lg">
          Pour "TaVue", chaque paire de lunettes n'est pas qu'un simple accessoire, mais une extension de l'identité de
          celui qui la porte. Chaque monture est conçue pour refléter la singularité et l'individualité, tout en restant
          fidèle à l'essence du chic parisien.
        </p>
        <img src="/public/paysage.webp" alt="Description de l'image 2" class="w-full h-auto">
      </div>
    </div>
  </section>
  <section class="p-5">
    <h1 class="text-3xl font-light mb-4 text-noir text-center font-lato">L'avis de nos utilisateurs</h1>
    <div class="container mx-auto px-4 py-8 bg-gris rounded-lg">


      <div class="grid grid-cols-3 gap-8">

        <div class="text-center">
          <img src="/public/userTest1.webp" alt="Utilisateur 1" class="w-48 h-48 mx-auto rounded-full mb-4">
          <div class="flex justify-center items-center mb-4">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
          </div>
          <p class="text-lg mb-4 font-roboto">Je recommande !<br /> De la qualité au rendez-vous</p>
        </div>


        <div class="text-center">
          <img src="/public/userTest2.webp" alt="Utilisateur 2" class="w-48 h-48 mx-auto rounded-full mb-4">
          <div class="flex justify-center items-center mb-4">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
          </div>
          <p class="text-lg mb-4 font-roboto">Je met le site direct dans mes favoris.</p>
        </div>
        <div class="text-center">
          <img src="/public/userTest3.webp" alt="Utilisateur 3" class="w-48 h-48 mx-auto rounded-full mb-4">
          <div class="flex justify-center items-center mb-4">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
            <img src="/public/star.svg" alt="Étoile" class="w-6 h-6">
          </div>
          <p class="text-lg mb-4 font-roboto">Je suis satisfait de la qualité de mes lunettes !</p>
        </div>
      </div>
    </div>
  </section>
  <section class="p-10">
    <maps />
  </section>
  <section class="p-5">
    <div class="flex flex-col justify-center items-center">
      <a href="#"><img class="h-8" src="/public/arrow.svg" alt="arrow"/></a>
      <p class="font-roboto font-extralight text-sm">Remontez vers le haut</p>
    </div>
  </section>
</template>
