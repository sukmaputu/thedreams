<template>
  <div class="min-h-screen bg-hitamAbu text-putih">
    <NavbarApp />

    <main class="pt-20">
      <slot />
    </main>

    <FooterApp />
  </div>
</template>

<script setup>
import NavbarApp from "../components/NavbarApp.vue";
import FooterApp from "../components/FooterApp.vue";
</script>
