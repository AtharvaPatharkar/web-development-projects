let input_user = document.querySelector("#input");
const profileCard = document.querySelector("#profile-card");

const userImg = document.querySelector(".main-info");
const name = document.querySelector("#name");
const userName = document.querySelector("#username");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");

const fetchUser = (user_name) => {
  fetch(`https://api.github.com/users/${user_name}`)
    .then((data) => data.json())
    .then((jsonData) => {
      if (jsonData.message === "Not Found") {
        alert("User Not Found");
        profileCard.style.display = "none";
        return;
      } else {
        profileCard.style.display = "block";
        
        userImg.innerHTML = `
          <img src="${jsonData.avatar_url}" alt="avatar" id="prof-img">
          <span class="name" id="name">${jsonData.name || ''}</span>
          <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a>
        `;
        bio.textContent = jsonData.bio || '';
        repos.textContent = jsonData.public_repos || '';
        followers.textContent = jsonData.followers || '';
        following.textContent = jsonData.following || '';

        if (!jsonData.bio) document.getElementById("bio-container").style.display = "none";
        else document.getElementById("bio-container").style.display = "block";
      }
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
};

const getUser = () => {
  let user_name = input_user.value.trim();

  if (user_name.length === 0) {
    alert("Please enter a valid GitHub username");
  } else {
    fetchUser(user_name);
  }
  input_user.value = "";
};
