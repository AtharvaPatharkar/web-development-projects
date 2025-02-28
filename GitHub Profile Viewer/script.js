// JavaScript file
const username = "AtharvaPatharkar"; // Change to any GitHub username

// Fetch GitHub user data
fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        // Populate profile info
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'Name not available';
        document.getElementById('bio').textContent = data.bio || 'Bio not available';
        document.getElementById('location').textContent = data.location || 'Location not available';
        document.getElementById('githubLink').href = data.html_url;

        // Fetch user repositories
        fetch(data.repos_url)
            .then(response => response.json())
            .then(repos => {
                const reposList = document.getElementById('repos-list');
                repos.forEach(repo => {
                    const repoCard = document.createElement('div');
                    repoCard.classList.add('repo-card');
                    repoCard.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available'}</p>
                        <a href="${repo.html_url}" target="_blank">View Repository</a>
                    `;
                    reposList.appendChild(repoCard);
                });
            });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
