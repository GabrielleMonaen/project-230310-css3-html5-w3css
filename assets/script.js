const container = document.querySelector('#projects');

// Fetch the data from the GitHub API
fetch('https://api.github.com/users/GabrielleMonaen/repos')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error retrieving data from the GitHub API');
        }
    })
    .then(data => {
        // Loop through the data and create a card for each project
        data.forEach(project => {
            // Generate a random color for each card
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);

            // Get the date and technologies used for the project
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const date = new Date(project.updated_at).toLocaleDateString('en-UK', options).replace(/\//g, '-');
            const techList = project.topics ? `<span class="technologies"><i>Technologies: ${project.topics.join(', ')}</i></span>` : '';
            const description = project.description ? `<span class="description">Description: ${project.description.slice(0, 70)}${project.description.length > 70 ? '...' : ''}</span>` : '';

            // Create the card HTML with the project name, date, technologies, and description
            const card = `
                <div class="w3-col s12 m6 l4 xl3">
                    <a href="${project.html_url}" target="_blank">
                        <div class="w3-card w3-padding w3-hover-shadow" style="background-color: #${randomColor}; height: 200px; position: relative;">
                            <div style="position: absolute; top: 10px; left: 10px; right: 10px; bottom: 10px; background-color: rgba(0, 0, 0, 0.2); z-index: 1;"></div>
                            <div class="w3-container" style="position: relative; z-index: 2;">
                                <h3 class="project-date">Project ${date}</h3>
                                <p>${techList}</p>
                                <p>${description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;

            container.insertAdjacentHTML('beforeend', card);
        });
    })
    .catch(error => console.error(error));

