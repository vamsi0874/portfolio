import styles from './ProjectsStyles.module.css';
import review from '../../assets/review.png';
import ai from '../../assets/ai.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={fitLift}
          link="https://health-tracker-rho.vercel.app/"
          h3="HEALTH TRACKER CHALLENGER"
          p="Developed a React.js single-page application for tracking 
          health challenges, enabling users to log and manage 
          workout activities with features like workout logging, filtering, and interactive charts. 
          The project utilized React Router for navigation and local storage for data persistence, 
          ensuring a smooth user experience. Key functionalities included 
          filtering by workout type, pagination for efficient data handling, and visualizing progress through charts.
"
        />
        <ProjectCard
          src={review}
          link="https://brewery-frontend-jukp.onrender.com/login"
          h3="Brewery Review System"
          p = "The Brewery Review Application is a comprehensive platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to allow users to explore, review, and rate breweries. The application offers a user-friendly interface where users can securely register and log in to manage their profiles and submit reviews. Key features include detailed brewery listings with essential information such as name, type, location, and contact details. Users can rate breweries and provide detailed descriptions of their experiences, with each review attributed to the respective user. The application ensures secure user interactions through JWT-based authentication and handles data efficiently with a RESTful API architecture. The frontend is fully responsive, styled with CSS and styled components, and navigable via React Router. Backend operations, including data storage and API handling, are seamlessly managed with Node.js and Express.js, interfacing with a MongoDB database. The project showcases a modern, visually appealing design and is deployed on Vercel (frontend) and Render (backend), highlighting my proficiency in full-stack development. This project demonstrates my ability to create robust, scalable web applications and effectively integrate various technologies to deliver a complete user experience."
        />
        <ProjectCard
          src={ai}
          link="https://ai-six-self.vercel.app/"
          h3="Gemini Clone"
          p = "I developed a functional and visually appealing clone of the Gemini application using ReactJS. The project involved implementing AI functionalities such as predictive analytics and natural language processing (NLP). I employed state management techniques to handle the application state efficiently and utilized React's component-based architecture to ensure modularity and reusability of the code."
        />
      </div>
    </section>
  );
}

export default Projects;
