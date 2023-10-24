<template>
  <div class="container">
 
    <nav class="bg-dark p-4 flex items-center justify-center">
        <RouterLink class="text-white font-bold" to="/">Vue3 - PocketBase</RouterLink>
        <button class="navbar-toggler">
            <span class="block h-6 w-6"></span> <!-- Placeholder for the toggler icon -->
        </button>
  
        <div class="space-x-4">
    
            <ul class="flex space-x-4">
                <li>
                  <RouterLink class="text-black" to="/">Configurateur</RouterLink>
                </li>
                <li>
                  <RouterLink class="text-black" to="/">Lunettes</RouterLink>
                </li>
                <li>
                  <RouterLink class="text-black" to="/">Notre histoire</RouterLink>
                </li>
            </ul>

            
        </div>

    </nav>
    
    <RouterView />

  </div>
</template>  