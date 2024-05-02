document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    const jobDetails = document.getElementById('job-details');

    jobTitles.forEach(title => {
        title.addEventListener('click', function(event) {
            event.preventDefault();
            const jobId = this.getAttribute('data-jobid');
            fetch(`jobs/${jobId}.json`)
                .then(response => response.json())
                .then(data => {
                    const jobDetail = `
                        <h3>${data.title}</h3>
                        <p><strong>Location:</strong> ${data.location}</p>
                        <p><strong>Salary:</strong> ${data.salary}</p>
                        <p><strong>Description:</strong> ${data.description}</p>
                    `;
                    jobDetails.innerHTML = jobDetail;
                })
                .catch(error => console.error('Error:', error));
        });
    });
});
fetch(`data/jobs/${jobId}.json`)
