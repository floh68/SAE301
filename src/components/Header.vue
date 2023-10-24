<template>
    <div class="flex bg-gris">
      <img src="../../public/logo_Base.svg" alt="logo"/>
      
      <nav class="flex items-center mx-auto">
          <div class="bg-dark p-4 font-roboto font-semibold">
              <ul class="flex space-x-4">
                  <li>
                    <RouterLink class="text-black px-8" to="/inscription">Configurateur</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="text-black px-8" to="/">Lunettes</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="text-black px-8" to="/">Notre histoire</RouterLink>
                  </li>
              </ul>
          </div>
      </nav>
      
      <RouterView />
    </div>
  </template>
  