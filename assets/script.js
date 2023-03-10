const container = document.querySelector('#projects');

// Fetch the data from the GitHub API
fetch('https://api.github.com/users/GabrielleMonaen/repos')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create a card for each project
    data.forEach(project => {
      // Generate a random color for each card
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      
      // Get the date and technologies used for the project
      fetch(`https://api.github.com/repos/GabrielleMonaen/${project.name}`)
        .then(response => response.json())
        .then(projectData => {
          const date = new Date(projectData.updated_at).toLocaleDateString();
          //const techList = projectData.language ? `<br><small><i>Technologies: ${projectData.language}</i></small>` : '';
          const techList = projectData.topics ? `<br><i>Technologies: ${projectData.topics.join(', ')}</i>` : '';
          
          // Create the card HTML with the project name, date, and technologies
          const card = `
            <div class="w3-col s12 m6 l4 xl3">
              <div class="w3-card w3-padding w3-hover-shadow" style="background-color: #${randomColor}; height: 200px;">
                <div class="w3-container">
                  <h3 style="margin-top: 0;"><a href="${project.html_url}" target="_blank">Project ${date}</a></h3>
                  <p>${techList}</p>
                </div>
              </div>
            </div>
          `;
          
          container.insertAdjacentHTML('beforeend', card);
        })
        .catch(error => console.log(error));
    });
  })
  .catch(error => console.log(error));
