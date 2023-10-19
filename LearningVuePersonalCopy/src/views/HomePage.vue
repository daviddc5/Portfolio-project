
<script setup>
// import navbar
import NavBar from "@/views/navBar.vue";

import { useRouter, useRoute } from "vue-router";

import { ref } from "vue";
// import Button from "primevue/button";
import Badge from "primevue/badge";
import Dialog from "primevue/Dialog";


    const projects = ref([
      {
        name: "MindfulTasks",
        description:
          "This is a comprehensive DSCTs (Digital Self-Control Technologies) Management System designed to empower users in achieving their goals effectively.",
        extendedDescription:
          "The DSCTs Management System is a robust platform offering an integrated solution that combines research-backed strategies with practical applications. It provides comprehensive task management, social interaction, notifications, personalized settings, and statistical insights to enhance user productivity and goal achievement. With features like task creation, visualization, editing, filtering, and deletion, it ensures superior task organization. Users can engage in tag-based discussions, manage notifications for non-essential apps, customize their experience, and gain valuable insights from progress tracking and general statistics. The system aims for a personalized and adaptive user experience, helping individuals effectively reach their objectives.",
        link: "https://boisterous-basbousa-d66359.netlify.app/",
        //  image: "/Images/HomePage.png"
      },
      {
        name: "MCCSDroneRadarSimulation",
        description:
          "This program is inspired by the Micromonde combat control system developed by the University of Laval.",
        extendedDescription:
          "MCCS is a sophisticated simulation program that replicates drone radar systems, providing a dynamic and interactive experience. It features three drone radar systems with varying accuracy levels and two test scenarios, offering a comprehensive training tool. The program integrates Qualtrics questionnaires, assessing user trust in different system accuracies. By simulating real-world radar operations, it serves as an invaluable resource for understanding and analyzing drone behaviors, enhancing strategic decision-making, and facilitating psychological research in system trust.",
        link: "https://github.com/daviddc5/DroneRadarSimulatorCopy",
        // image: "./screenshots/scenario1GroupA.png"
      },
      {
        name: "MovieDatabaseApplication",
        description:
          "This application offers a comprehensive movie database built using React.",
        extendedDescription:
          "The Movie Database Application is an extensive platform allowing users to explore a vast array of movies with ease. Built using React, it features a user-friendly interface and responsive design, ensuring a seamless experience across various devices. Users can search for movies, delve into detailed information, manage a list of favorites, and navigate effortlessly using browser navigation. Advanced features like a loading indicator, error handling, and data persistence are implemented, providing a smooth user interaction. The application supports comprehensive testing methods, including unit/integration tests and interactive E2E testing, maintaining high reliability and functionality standards.",
        link: "https://github.com/daviddc5/HatlessTrainingIndividualTask",
      },
    ]);

    const skills = ref([
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "React.js", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "UX/UI Design", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
    ]);

    // false by default
    const dialogVisible = ref(false);
    const selectedProject = ref({});

    const handleClick = () => {
      alert(
        "Contact button clicked!, maybe this will redirect to another page that shows my contact information. ",
      );
    };

    const showDialog = (project) => {
      selectedProject.value = project;
      dialogVisible.value = true;
    };

    const handleClose = () => {
      dialogVisible.value = false;
      console.log("attempting to close");
    };

    // router section
    const router = useRouter();
    const route = useRoute(); // If you need to access route parameters, queries, etc.
    // function to send to project page

    const goToProjectPage = (project) => {
      const routeName = `${project.name}Page`;
      console.log("Redirecting to:", routeName);
      router.push({ name: routeName });
    };
    // return {
    //   projects,
    //   handleClick,
    //   skills,
    //   dialogVisible, // make sure to return this
    //   selectedProject, // and this
    //   showDialog, // also return showDialog method
    //   handleClose,
    //   goToProjectPage,
    // };

</script>
<template>
  <div class="app">
    <!-- Portfolio heading -->
    <div class="column-container heading-container">
      <h1>David Diaz Clifton's Portfolio</h1>
    </div>

    <!-- About Me section -->
    <div class="column-container about-container">
      <h2>About Me</h2>
      <h4>
        I'm a junior developer at Vindico IT and a computer science graduate from Cardiff University. 
        <br>
        I'm passionate about software development and enjoy working on a wide range of projects. 
        Feel free to explore my portfolio to see some of my work!
      </h4>
    </div>

    <!-- Contact buttons -->
    <div class="column-container contact-container">
      <h2> Find me on</h2>
      <div class="contact-links">
        <a
          href="daviddiaz-clifton@vindico.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-envelope"></i> Email
        </a>
        <a
          href="https://www.linkedin.com/in/daviddiazclifton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/daviddc5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-github"></i> GitHub
        </a>
      </div>
    </div>

    <!-- Projects container -->
    <div class="column-container projects-container">
      <h2>Projects</h2>

      <!-- Each project has its section -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-section"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>

        <!-- Button to open dialog -->
        <!-- Button with even more details that will redirect to project -->
        <Button
          class="details-button"
          label="More Details"
          @click="showDialog(project)"
        ></Button>
      </div>
    </div>

    <!-- Newer version -->
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :header="selectedProject.name"
      :style="{ width: '50vw' }"
    >
      <!-- <img :src="selectedProject.image" alt="Project Image" preview/> -->

      <p>{{ selectedProject.extendedDescription }}</p>

      <br />
      <br />
      <Button
        label="Project page"
        @click="goToProjectPage(selectedProject)"
      ></Button>
    </Dialog>

    <!-- Skills -->
    <div class="column-container skills-container">
      <h2>Skills</h2>
      <div class="skills-section">
        <!-- Badges for skills -->
        <div class="skill-badge" v-for="(skill, index) in skills" :key="index">
          <Badge :content="skill.level" class="custom-badge">
            {{ skill.name }}
          </Badge>
        </div>
      </div>
    </div>
  </div>

  <!-- Router view -->
  <router-view></router-view>
</template>


<style scoped>
.app {
  padding: 2rem;
  text-align: center;
}
.column-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  width: 100%;
  margin-bottom: 20px; /* Add more space between sections */
}

.project-section {
  width: 70%; /* Limit the width of project sections */
  padding: 20px;
  margin-bottom: 30px; /* Add more space between projects */
  text-align: left;

  border-radius: 8px;
}

.details-button {
  margin-top: 20px; /* adjust as needed */
}

.custom-badge {
  font-size: 20px; /* Increase the font size */
  padding: 30px 15px; /* Adjust padding as needed */
  color: black;
  border-radius: 100px;
  margin-right: 30px;
  
}

.skills-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center skills horizontally */
}

.contact-links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.contact-links a {
  margin: 0 10px;
  font-size: 20px;
  text-decoration: none;
}

.contact-links a i {
  margin-right: 5px;
  font-size: 24px;
}



/* ... rest of your styles ... */
</style>
