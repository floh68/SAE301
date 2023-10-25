<template>
  <div class="flex absolute z-10  w-full">
    <img src="../../public/logo_Base.svg" alt="logo"/>

    <nav class="flex items-center mx-auto">
        <div class="p-4 font-roboto font-semibold text-blanc">
            <ul class="flex space-x-4 text-">
                <li>
                  <RouterLink class=" px-8" to="/Inscription">Configurateur</RouterLink>
                </li>
                <li>
                  <RouterLink class=" px-8" to="/">Lunettes</RouterLink>
                </li>
                <li>
                  <RouterLink class=" px-8" to="/">Notre histoire</RouterLink>
                </li>
            </ul>
        </div>
    </nav>

    <div class="flex items-center px-6 text-blanc font-semibold">
      <div class="w-auto h-10 rounded-lg border border-var(--Fond-Text, #FFF)">
        <RouterLink to="/inscription">Inscription</RouterLink>
      </div>
    </div>

  </div>
</template>