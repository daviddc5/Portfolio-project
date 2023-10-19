<template>
  <div class="mindful-tasks-page">
    <h1>About</h1>
    <h3>
      This is a comprehensive DSCTs (Digital Self-Control Technologies)
      Management System designed to empower users in achieving their goals
      effectively.
      <br />
      The platform offers an integrated solution that marries research-backed
      strategies with real-world application. Features range from task
      management to social engagement and statistical analysis, all aimed to
      provide a personalized and adaptive user experience.
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
  name: "MindfulTasksPage",
  components: {
    Button,
  },
  methods: {
    redirectToLiveVersion() {
      window.open("https://boisterous-basbousa-d66359.netlify.app/", "_blank");
    },
  },
  data() {
    return {
      features: [
        {
          title: "Task Management",
          description:
            "Users can create, visualize, edit, filter, and delete tasks.",
          screenshot: "../Images/MindfulTasks/TaskCreation.png",
          iconClass: "pi pi-pencil", // PrimeVue icon class
        },
        {
          title: "Social Interaction",
          description: "Tag-based Discussion Boards for user interactions.",
          screenshot: "../Images/MindfulTasks/Discussions.png",
          iconClass: "pi pi-comments", // PrimeVue icon class
        },
        {
          title: "Notifications and Settings",
          description:
            "Notification management and personalized settings for user tasks and experiences.",
          screenshot: "../Images/MindfulTasks/TaskCreation2.png",
          iconClass: "pi pi-cog", // PrimeVue icon class
        },
        {
          title: "Statistical Insights",
          description:
            "Displays progress tracking and general statistics for user accomplishments.",
          screenshot: "../Images/MindfulTasks/Statistics.png",
          iconClass: "pi pi-chart-bar", // PrimeVue icon class
        },
      ],
    };
  },
};
</script>

<style scoped>
.mindful-tasks-page {
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
