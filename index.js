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
        name: "Background Image Changer", 
        path: "Background Image Changer", 
        description: "Dynamically change the background image of a webpage."
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
        name: "Blog with Comments", 
        path: "Blog with Comments", 
        description: "Create and interact with blogs that allow user comments."
    },
    { 
        name: "Bookstore Website", 
        path: "Bookstore Website", 
        description: "Browse and purchase books with an engaging user interface."
    },
    { 
        name: "Clock with Time Zones", 
        path: "Clock with Time Zones", 
        description: "View time across multiple time zones simultaneously."
    },
    { 
        name: "Code Snippet Highlighter", 
        path: "Code Snippet Highlighter", 
        description: "Highlight and format code snippets with syntax coloring."
    },
    { 
        name: "Code Snippet Repository", 
        path: "Code Snippet Repository", 
        description: "Store and organize reusable code snippets."
    },
    { 
        name: "Currency Converter", 
        path: "Currency Converter", 
        description: "Convert currencies with real-time exchange rates."
    },
    { 
        name: "Currency Rate Tracker", 
        path: "Currency Rate Tracker", 
        description: "Track exchange rate trends over time."
    },
    { 
        name: "CV or Resume Builder", 
        path: "CV or Resume Builder", 
        description: "Easily create professional resumes and CVs."
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
        name: "Dictionary App", 
        path: "Dictionary App", 
        description: "Look up word definitions, synonyms, and more."
    },
    { 
        name: "Digital Clock with Alarms", 
        path: "Digital Clock with Alarms", 
        description: "A clock with customizable alarm functionality."
    },
    { 
        name: "Digital Resume", 
        path: "Digital Resume", 
        description: "Showcase your resume in an interactive, digital format."
    },
    
    { 
        name: "E-commerce Product Page", 
        path: "E-commerce Product Page", 
        description: "A sleek product page for showcasing and selling items."
    },
    { 
        name: "Emoji Picker Tool", 
        path: "Emoji Picker Tool", 
        description: "Quickly search and select emojis for your messages."
    },
    { 
        name: "Event Invitation Maker", 
        path: "Event Invitation Maker", 
        description: "Design and share custom invitations for events."
    },
    { 
        name: "Expense Splitter", 
        path: "Expense Splitter", 
        description: "Split expenses evenly among friends and family."
    },
    { 
        name: "Expense Tracker", 
        path: "Expense Tracker", 
        description: "Track your expenses and manage your budget effectively."
    },
    { 
        name: "Exchange Rate Calculator", 
        path: "Exchange Rate Calculator", 
        description: "Convert currencies with real-time exchange rates."
    },
    { 
        name: "Favicon Generator", 
        path: "Favicon Generator", 
        description: "Create and customize favicons for websites."
    },
    { 
        name: "File Manager", 
        path: "File Manager", 
        description: "Organize and manage your files with ease."
    },
    { 
        name: "Fitness Goal Planner", 
        path: "Fitness Goal Planner", 
        description: "Set and track your fitness goals over time."
    },
    { 
        name: "Fitness Tracker", 
        path: "Fitness Tracker", 
        description: "Monitor your workouts, calories, and progress."
    },
    { 
        name: "Flashcard App for Learning Languages", 
        path: "Flashcard App for Learning Languages", 
        description: "Learn new languages using interactive flashcards."
    },
    { 
        name: "Flashcards for Learning", 
        path: "Flashcards for Learning", 
        description: "Create and review flashcards for any topic."
    },
    { 
        name: "GitHub Profile Viewer", 
        path: "GitHub Profile Viewer", 
        description: "View and explore GitHub user profiles effortlessly."
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
        name: "Habit Tracker", 
        path: "Habit Tracker", 
        description: "Track and maintain your daily habits and routines."
    },
    { 
        name: "Image Filter App", 
        path: "Image Filter App", 
        description: "Apply filters to images and edit them seamlessly."
    },
    { 
        name: "Interactive Bar Chart", 
        path: "Interactive Bar Chart", 
        description: "Create dynamic and interactive bar charts with animations."
    },
    { 
        name: "Interactive Budget Calculator", 
        path: "Interactive Budget Calculator", 
        description: "Plan and calculate budgets with real-time adjustments."
    },
    { 
        name: "Interactive Calendar", 
        path: "Interactive Calendar", 
        description: "Manage your schedule with a fully interactive calendar."
    },
    { 
        name: "Interactive Food Ordering System", 
        path: "Interactive Food Ordering System", 
        description: "Order food with an intuitive and interactive UI."
    },
    { 
        name: "Interactive Graph with D3.js", 
        path: "Interactive Graph with D3.js", 
        description: "Visualize complex data using dynamic graphs built with D3.js."
    },
    { 
        name: "Interactive Mind Map", 
        path: "Interactive Mind Map", 
        description: "Organize thoughts and ideas visually with an interactive mind map."
    },
    { 
        name: "Interactive Org Chart", 
        path: "Interactive Org Chart", 
        description: "Visualize organizational structures with collapsible charts."
    },
    { 
        name: "Interactive Poll Results", 
        path: "Interactive Poll Results", 
        description: "Display poll results in an engaging and interactive way."
    },
    { 
        name: "Interactive Story (Choose Your Own Adventure)", 
        path: "Interactive Story", 
        description: "Write and experience interactive 'Choose Your Own Adventure' stories."
    },

    { 
        name: "Image Carousel with Autoplay", 
        path: "Image Carousel with Autoplay", 
        description: "Showcase images with a smooth, auto-playing carousel."
    },
    { 
        name: "Image Resizer", 
        path: "Image Resizer", 
        description: "Resize and optimize images for various use cases."
    },
    { 
        name: "Image Slider", 
        path: "Image Slider", 
        description: "Navigate through images with a responsive slider."
    },
    { 
        name: "Interactive Audio Visualizer", 
        path: "Interactive Audio Visualizer", 
        description: "Create visuals that respond dynamically to audio."
    },
    { 
        name: "Interactive Color Palette Generator", 
        path: "Interactive Color Palette Generator", 
        description: "Generate and customize beautiful color palettes."
    },
    { 
        name: "Interactive Data Table", 
        path: "Interactive Data Table", 
        description: "Explore and filter data with a dynamic table interface."
    },
    { 
        name: "Interactive Story Generator", 
        path: "Interactive Story Generator", 
        description: "Generate engaging, personalized stories interactively."
    },
    { 
        name: "Interactive Storybook", 
        path: "Interactive Storybook", 
        description: "Create and read stories with interactive elements."
    },
    { 
        name: "Interactive Survey Builder", 
        path: "Interactive Survey Builder", 
        description: "Build and share interactive surveys with ease."
    },
    { 
        name: "Interactive Timeline", 
        path: "Interactive Timeline", 
        description: "Visualize events on a dynamic, interactive timeline."
    },
    { 
        name: "Interactive To-Do List with Categories", 
        path: "Interactive To-Do List with Categories", 
        description: "Organize tasks with categories and dynamic features."
    },
    { 
        name: "Light-Dark Mode Switch", 
        path: "Light-Dark Mode Switch", 
        description: "Toggle between light and dark themes for a website."
    },
    { 
        name: "Loan Calculator", 
        path: "Loan Calculator", 
        description: "Calculate loan payments and interest over time."
    },
    { 
        name: "Live Chat Application", 
        path: "Live Chat Application", 
        description: "Chat in real time with friends and colleagues."
    },
    { 
        name: "Markdown Previewer", 
        path: "Markdown Previewer", 
        description: "Write and preview Markdown text in real time."
    },
    { 
        name: "Music Player with Playlist", 
        path: "Music Player with Playlist", 
        description: "Play music and organize songs into custom playlists."
    },
    { 
        name: "Memory Card Game", 
        path: "Memory Card Game", 
        description: "A fun and challenging game to test your memory skills."
    },
    { 
        name: "My 2048 Game", 
        path: "My 2048 Game", 
        description: "Play the classic 2048 puzzle game with smooth animations and responsive design."
    },
    { 
        name: "My Maths Game", 
        path: "My Maths Game", 
        description: "A fun and interactive game to practice math skills."
    },
    { 
        name: "My Calculator", 
        path: "My Calculator", 
        description: "A simple and user-friendly calculator for everyday use."
    },
    { 
        name: "My Countdown Timer", 
        path: "My Countdown Timer", 
        description: "Track time effectively with this customizable countdown timer."
    },
    { 
        name: "Markdown Syntax Highlighter", 
        path: "Markdown Syntax Highlighter", 
        description: "Highlight markdown syntax for better readability."
    },
    { 
        name: "Markdown to HTML Converter", 
        path: "Markdown to HTML Converter", 
        description: "Convert markdown files to HTML quickly and easily."
    },
    { 
        name: "Math Quiz", 
        path: "Math Quiz", 
        description: "Test your math skills with customizable quizzes."
    },
    { 
        name: "Number Guessing Game", 
        path: "Number Guessing Game", 
        description: "Guess a random number within a range with hints."
    },
    { 
        name: "Online Calculator with History", 
        path: "Online Calculator with History", 
        description: "Perform calculations and keep a history of your inputs."
    },
    { 
        name: "Online Polling System", 
        path: "Online Polling System", 
        description: "Create and participate in online polls."
    },
    { 
        name: "Online Text Editor", 
        path: "Online Text Editor", 
        description: "Write, edit, and save text files directly in the browser."
    },
    { 
        name: "Photo Gallery", 
        path: "Photo Gallery", 
        description: "Create a beautiful gallery to showcase your photos."
    },
    { 
        name: "Pokedex", 
        path: "Pokedex", 
        description: "Explore a collection of Pokémon with their stats."
    },
    { 
        name: "Progress Bar", 
        path: "Progress Bar", 
        description: "Visualize task progress with customizable bars."
    },
    { 
        name: "Password Generator", 
        path: "Password Generator", 
        description: "Generate secure and random passwords instantly."
    },
    { 
        name: "Password Strength Meter", 
        path: "Password Strength Meter", 
        description: "Evaluate the strength of passwords in real time."
    },
    { 
        name: "Photo Editor", 
        path: "Photo Editor", 
        description: "Edit images with a variety of tools and effects."
    },
    { 
        name: "Pomodoro Task Manager", 
        path: "Pomodoro Task Manager", 
        description: "Boost productivity using the Pomodoro time management method."
    },
    { 
        name: "Progressive Web App", 
        path: "Progressive Web App", 
        description: "Build a web app that works offline and can be installed on devices."
    },
    { 
        name: "Quiz App", 
        path: "Quiz App", 
        description: "Take quizzes on various topics with instant feedback."
    },
    { 
        name: "QR Code Generator", 
        path: "QR Code Generator", 
        description: "Create custom QR codes for your URLs, texts, and more."
    },
    { 
        name: "Random Color Generator", 
        path: "Random Color Generator", 
        description: "Generate random colors and get their HEX and RGB codes."
    },
    { 
        name: "Random Password Generator", 
        path: "Random Password Generator", 
        description: "Create random passwords to enhance your online security."
    },
    { 
        name: "Rock Paper Scissor Game", 
        path: "Rock Paper Scissor Game", 
        description: "Play the classic game of Rock, Paper, Scissors with a computer opponent."
    },
    { 
        name: "Recipe Book", 
        path: "Recipe Book", 
        description: "Save, organize, and share your favorite recipes."
    },
    { 
        name: "Random Joke Generator", 
        path: "Random Joke Generator", 
        description: "Generate random jokes to keep users entertained."
    },
    { 
        name: "Random Meal Generator", 
        path: "Random Meal Generator", 
        description: "Suggest random meals with recipes and ingredients."
    },
    { 
        name: "Real-Time Stock Price Tracker", 
        path: "Real-Time Stock Price Tracker", 
        description: "Track live stock prices and market trends in real time."
    },
    { 
        name: "Recipe Ingredient Calculator", 
        path: "Recipe Ingredient Calculator", 
        description: "Calculate ingredient quantities for different serving sizes."
    },
    { 
        name: "Recipe Rating System", 
        path: "Recipe Rating System", 
        description: "Allow users to rate and review recipes on your platform."
    },
    { 
        name: "Rivia Quiz Game", 
        path: "Rivia Quiz Game", 
        description: "Challenge yourself with quizzes on various topics in a fun way."
    },
    { 
        name: "Simple Blackjack Game", 
        path: "Simple Blackjack Game", 
        description: "Play the popular casino card game Blackjack."
    },
    { 
        name: "Simple Blog with CRUD Operations", 
        path: "Simple Blog with CRUD Operations", 
        description: "Create a blog platform with features to create, read, update, and delete posts."
    },
    { 
        name: "Simple CMS (Content Management System)", 
        path: "Simple CMS", 
        description: "Develop a basic CMS to manage website content easily."
    },
    { 
        name: "Simple Inventory Management System", 
        path: "Simple Inventory Management System", 
        description: "Keep track of stock and inventory with this lightweight system."
    },
    { 
        name: "Social Media Feed (Mockup)", 
        path: "Social Media Feed", 
        description: "Simulate a social media feed with posts and interactions."
    },
    { 
        name: "Stock Portfolio Tracker", 
        path: "Stock Portfolio Tracker", 
        description: "Monitor and manage your stock portfolio in one place."
    },
    { 
        name: "SVG Animations", 
        path: "SVG Animations", 
        description: "Create and animate scalable vector graphics for web projects."
    },
    { 
        name: "Shopping Cart with Checkout", 
        path: "Shopping Cart with Checkout", 
        description: "Build a shopping cart system with an integrated checkout process."
    },
    { 
        name: "Score Keeper Game", 
        path: "Score Keeper Game", 
        description: "Keep track of scores in various games with ease."
    },
    { 
        name: "Snake Game", 
        path: "Snake Game", 
        description: "Play the nostalgic snake game with a modern twist."
    },
    { 
        name: "String Palindrome Checker", 
        path: "String Palindrome Checker", 
        description: "Check whether a given string is a palindrome."
    },
    { 
        name: "Styled Calculator", 
        path: "Styled Calculator", 
        description: "A visually appealing calculator with custom themes."
    },
    { 
        name: "Text Analyzer", 
        path: "Text Analyzer", 
        description: "Analyze text for word count, readability, and more."
    },
    { 
        name: "Text to Speech", 
        path: "Text to Speech", 
        description: "Convert text into natural-sounding speech."
    },
    { 
        name: "Tic Tac Toe Game", 
        path: "Tic Tac Toe Game", 
        description: "Play the classic Tic Tac Toe game against a friend or AI."
    },
    { 
        name: "Task Progress Tracker", 
        path: "Task Progress Tracker", 
        description: "Track the progress of tasks with visual indicators."
    },
    { 
        name: "Tip Calculator", 
        path: "Tip Calculator", 
        description: "Easily calculate tips for your bill, split among friends."
    },
    { 
        name: "Travel Destination Finder", 
        path: "Travel Destination Finder", 
        description: "Discover travel destinations based on your preferences."
    },
    { 
        name: "Task Prioritization App", 
        path: "Task Prioritization App", 
        description: "Organize and prioritize tasks using categories and urgency levels."
    },
    { 
        name: "Task Timer", 
        path: "Task Timer", 
        description: "Track the time spent on tasks to boost productivity."
    },
    { 
        name: "Team Collaboration Board", 
        path: "Team Collaboration Board", 
        description: "Collaborate on projects and tasks with a visual board for teams."
    },
    { 
        name: "Text Adventure Game", 
        path: "Text Adventure Game", 
        description: "Engage in a text-based adventure game with multiple storylines."
    },
    { 
        name: "Text Adventure Game with JSON", 
        path: "Text Adventure Game with JSON", 
        description: "Create a text adventure game powered by JSON data for dynamic content."
    },
    { 
        name: "Virtual Pet", 
        path: "Virtual Pet", 
        description: "Take care of a virtual pet with feeding, grooming, and playtime features."
    },
    { 
        name: "Virtual Plant Care Simulator", 
        path: "Virtual Plant Care Simulator", 
        description: "Learn to care for plants virtually with realistic growth simulation."
    },
    { 
        name: "Voice Note Recorder", 
        path: "Voice Note Recorder", 
        description: "Record, save, and manage voice notes effortlessly."
    },
    { 
        name: "Voice Recognition Tool", 
        path: "Voice Recognition Tool", 
        description: "Convert speech to text using a voice recognition system."
    },
    { 
        name: "Virtual Whiteboard", 
        path: "Virtual Whiteboard", 
        description: "Collaborate with others using an online whiteboard."
    },
    { 
        name: "Word Counter Tool", 
        path: "Word Counter Tool", 
        description: "Count words, characters, and paragraphs in your text."
    },
    { 
        name: "Website Speed Tester", 
        path: "Website Speed Tester", 
        description: "Analyze the load speed of websites with recommendations for optimization."
    },
    { 
        name: "Wordle Clone", 
        path: "Wordle Clone", 
        description: "Play a word-guessing game inspired by the popular Wordle."
    },
];

function loadProjects() {
    // Sort projects alphabetically by name
    const sortedProjects = projects.sort((a, b) => a.name.localeCompare(b.name));

    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    sortedProjects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <button onclick="viewWebsite('${project.path}')">Website Link</button>
            <button onclick="viewReadme('${project.path}')">Project Details</button>
        `;
        projectList.appendChild(listItem);
    });

    // Display the total number of projects
    const totalProjects = projects.length;
    const totalProjectsDisplay = document.getElementById("total-projects");
    totalProjectsDisplay.textContent = `Total Projects: ${totalProjects}`;
}

// Call loadProjects when the page loads
window.onload = loadProjects;


function viewWebsite(path) {
    window.open(`${path}/index.html`, "_blank");
}

function viewReadme(path) {
    window.open(`${path}/README.md`, "_blank");
}

function searchProjects() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    );

    const projectList = document.getElementById("project-list");
    const totalProjects = document.getElementById("total-projects"); // Reference for search result count
    projectList.innerHTML = "";
    filteredProjects.forEach((project, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${index + 1}. ${project.name}</h2>
            <p>${project.description}</p>
            <button onclick="viewWebsite('${project.path}')">Website Link</button>
            <button onclick="viewReadme('${project.path}')">Project Details</button>
        `;
        projectList.appendChild(listItem);
    });

    // Update the total project count for filtered results
    totalProjects.textContent = `Projects Found: ${filteredProjects.length}`;
}
