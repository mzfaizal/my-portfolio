// Projects stored as reusable objects

const projectList = [
    {
        title: "Project One",
        description: "A dynamic project built using HTML, CSS, JS.",
        image: "assets/images/project1.png",
        link: "https://yourprojectlink.com"
    },
    {
        title: "Project Two",
        description: "Full-stack MERN application with user authentication.",
        image: "assets/images/project2.png",
        link: "https://yourprojectlink.com"
    },
    {
        title: "Project Three",
        description: "AI assistant project similar to ChatGPT.",
        image: "assets/images/project3.png",
        link: "https://yourprojectlink.com"
    }
];

// Inject projects into HTML
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".projects-container");

    if (container) {
        projectList.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    <img src="${project.image}" alt="">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            `;
        });
    }
});