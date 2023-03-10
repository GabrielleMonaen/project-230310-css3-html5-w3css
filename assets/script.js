const container = document.querySelector('#projects');

// Fetch the data from the GitHub API
fetch('https://api.github.com/users/GabrielleMonaen/repos')
    .then(response => response.json())
    .then(data => {
        // Loop through the data and create a card for each project
        data.forEach(project => {
            // Generate a random color for each card
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);

            // Get the date and technologies used for the project
            fetch(`https://api.github.com/repos/GabrielleMonaen/${project.name}`)
                .then(response => response.json())
                .then(projectData => {
                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                    const date = new Date(projectData.updated_at).toLocaleDateString('en-US', options).replace(/\//g, '-');
                    const techList = projectData.topics ? `<span class="technologies"><i>Technologies: ${projectData.topics.join(', ')}</i></span>` : '';
                    const description = projectData.description ? `<span class="description">Description: ${projectData.description.slice(0, 100)}${projectData.description.length > 100 ? '...' : ''}</span>` : '';

                    // Create the card HTML with the project name, date, technologies, and description
                    const card = `
                        <div class="w3-col s12 m6 l4 xl3">
                            <a href="${project.html_url}" target="_blank">
                            <div class="w3-card w3-padding w3-hover-shadow" style="background-color: #${randomColor}; height: 200px;">
                                <div class="w3-container">
                                <h3 class="project-date">Project ${date}</h3>
                                <p>${techList}</p>
                                <p>${description}</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    `;

                    container.insertAdjacentHTML('beforeend', card);
                })
                .catch(error => console.log(error));
        });
    })
    .catch(error => console.log(error));
