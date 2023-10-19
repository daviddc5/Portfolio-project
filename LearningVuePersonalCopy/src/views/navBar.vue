<!-- navBar.vue -->

<template>
  <!-- Main Container -->
  <div class="card relative z-2">
    <!-- Menubar Component -->
    <Menubar :model="items">
      <!-- Logo Section -->
      <template #start>
        <img
          alt="logo"
          src="https://primefaces.org/cdn/primevue/images/logo.svg"
          height="40"
          class="mr-2"
        />
      </template>

      <!-- Navigation Items Section -->
      <template #item="{ label, item, props, root, hasSubmenu }">
        <!-- Router Link: For Vue Router Navigation -->
        <router-link
          v-if="item.route"
          v-slot="routerProps"
          :to="item.route"
          custom
        >
          <a :href="routerProps.href" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
          </a>
        </router-link>

        <!-- Regular Link: For External Navigation -->
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
          <!-- Submenu Icon (if available) -->
          <span
            :class="[
              hasSubmenu &&
                (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right'),
            ]"
            v-bind="props.submenuicon"
          />
        </a>
      </template>

      <!-- Search Bar Section -->
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
</template>

<script setup>
// Imports
import { ref } from "vue";
import InputText from "primevue/inputtext"; // Input Text Component from PrimeVue
import Menubar from "primevue/menubar"; // Menubar Component from PrimeVue

// Data: Navigation Items
const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    route: "/",
  },
  {
    label: "Projects",
    icon: "pi pi-fw pi-briefcase",
    items: [
      {
        label: "Mindful Tasks",
        icon: "pi pi-fw pi-check-square",
        route: "/project/mindfultasks",
      },
      {
        label: "Drone Radar Simulation",
        icon: "pi pi-fw pi-eye",
        route: "/project/mccs-droneradarsimulation",
      },
      {
        label: "Movie Database Application",
        icon: "pi pi-fw pi-video",
        route: "/project/moviedatabaseapplication",
      },
    ],
  },
  // ... [All your other previous items remain unchanged]
]);
</script>

<style scoped>
/* Styles specific to the navbar */
</style>
