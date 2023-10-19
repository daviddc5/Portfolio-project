<template>
  <div class="mccs-page">
    <h1><i class="pi pi-radar"></i> MCCS (Drone Radar Simulation)</h1>

    <h2><i class="pi pi-info-circle"></i> About</h2>
    <h3>
      This program is inspired by the Micromonde combat control system developed by University of Laval. 
      It simulates three different drone radar systems with dynamic accuracies and two test scenarios to help the user acclimate to the system.
      The program periodically links to external Qualtrics questionnaires that the user must answer to proceed.
    </h3>

    <!-- Add margin to the "Live Version" button -->
    <div style="margin-bottom: 20px">
      <Button
        label="Live Version"
        class="p-button-raised p-button-primary"
        @click="redirectToLiveVersion"
      />
    </div>

    <div class="feature-grid">
      <section
        v-for="feature in features"
        :key="feature.title"
        class="feature-section"
      >
        <div class="feature-icon">
          <i :class="feature.iconClass"></i>
        </div>
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>

        <!-- Make the images one fourth of their original size -->
        <img
          :src="feature.screenshot"
          :alt="feature.title"
          style="width: 50%"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "MCCSDroneRadarSimulationPage",
  components: {
    Button,
  },
  methods: {
    redirectToLiveVersion() {
      window.open("https://example.com", "_blank"); // Replace with the live version URL
    },
  },
  data() {
    return {
      features: [
        {
          title: "Three drone radar systems with dynamic accuracy levels",
          description: "Simulates radar systems with varying accuracies.",
          screenshot: "../Images/DroneRadarSimulation/scenario1GroupA.png",
          iconClass: "pi pi-radar", // PrimeVue icon class
        },
        {
          title: "Two test scenarios for training",
          description: "Provides test scenarios for training purposes.",
          screenshot: "../Images/DroneRadarSimulation/SupervisedTests.png",
          iconClass: "pi pi-list", // PrimeVue icon class
        },
        {
          title: "Qualtrics questionnaire integration",
          description: "Links to external Qualtrics questionnaires.",
          screenshot: "../Images/DroneRadarSimulation//QualtricsQuestionaire.png",
          iconClass: "pi pi-question", // PrimeVue icon class
        },
      ],
    };
  },
};
</script>

<style scoped>
.mccs-page {
  font-family: Arial, sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-section {
  margin: 1rem;
  width: 50%; /* Display two features side by side */
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-section img {
  max-width: 100%;
  display: block;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
