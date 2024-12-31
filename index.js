const projects = [
    { 
        name: "ASCII Art Generator", 
        path: "ASCII Art Generator", 
        description: "Transform text or images into creative ASCII art."
    },
    { 
        name: "Age Calculator", 
        path: "Age Calculator", 
        description: "Quickly calculate your exact age in years, months, and days."
    },
    { 
        name: "Age and Zodiac Sign Calculator", 
        path: "Age and Zodiac Sign Calculator", 
        description: "Find your age and zodiac sign in a single step."
    },
    { 
        name: "Animated Rainbow", 
        path: "Animated Rainbow", 
        description: "A vibrant animation simulating a rainbow effect."
    },
    { 
        name: "BMI Calculator 01", 
        path: "BMI Calculator 01", 
        description: "Calculate your Body Mass Index and assess your health."
    },
    { 
        name: "BMI Calculator", 
        path: "BMI Calculator", 
        description: "A sleek tool to compute and track your BMI."
    },
    { 
        name: "Basic Background Generator", 
        path: "Basic Background Generator", 
        description: "Generate custom backgrounds with gradient effects."
    },
    { 
        name: "Blur and Size Adjustment", 
        path: "Blur and Size Adjustment", 
        description: "Interactively adjust blur and size for images."
    },
    { 
        name: "Browser Camera", 
        path: "Browser Camera", 
        description: "Access your webcam and take snapshots directly in the browser."
    },
    { 
        name: "CAT and DOG GENERATOR APP", 
        path: "CAT and DOG GENERATOR APP", 
        description: "Generate random images of cats and dogs for fun."
    },
    { 
        name: "Chess Game", 
        path: "Chess Game", 
        description: "Play a classic game of chess with a friend or against AI."
    },
    { 
        name: "Classroom Scheduler Website", 
        path: "Classsroom Scheduler Website", 
        description: "Manage classroom schedules and allocate resources efficiently."
    },
    { 
        name: "Clock", 
        path: "Clock", 
        description: "A modern digital clock displaying current time dynamically."
    },
    { 
        name: "Color Guessor Game", 
        path: "Color Guessor Game", 
        description: "Test your skills in guessing the correct color codes."
    },
    { 
        name: "Compound Interest Calculator", 
        path: "Compound Interest Calculator", 
        description: "Calculate compound interest for investments or loans."
    },
    { 
        name: "Connect Four Game", 
        path: "Connect Four Game", 
        description: "A two-player game to connect four discs in a row."
    },
    { 
        name: "Exchange Rate Calculator", 
        path: "Exchange Rate Calculator", 
        description: "Convert currencies with real-time exchange rates."
    },
    { 
        name: "GitHub Profile Finder", 
        path: "GitHub Profile Finder", 
        description: "Search for GitHub profiles and explore user repositories."
    },
    { 
        name: "Height Converter", 
        path: "Height Converter", 
        description: "Convert heights between centimeters, inches, and feet."
    },
    { 
        name: "Image Filter App", 
        path: "Image Filter App", 
        description: "Apply filters to images and edit them seamlessly."
    },
    { 
        name: "Memory Card Game", 
        path: "Memory Card Game", 
        description: "A fun and challenging game to test your memory skills."
    }
];

function loadProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <button onclick="viewWebsite('${project.path}')">Website Link</button>
            <button onclick="viewReadme('${project.path}')">Project Details</button>
        `;
        projectList.appendChild(listItem);
    });
}

function viewWebsite(path) {
    window.open(`${path}/index.html`, "_blank");
}

function viewReadme(path) {
    window.open(`${path}/readme.md`, "_blank");
}

function searchProjects() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    );
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    filteredProjects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <button onclick="viewWebsite('${project.path}')">Website Link</button>
            <button onclick="viewReadme('${project.path}')">Project Details</button>
        `;
        projectList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
