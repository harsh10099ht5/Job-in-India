document.addEventListener('DOMContentLoaded', function () {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Bangalore",
      salary: "₹12 LPA",
      img: "https://via.placeholder.com/150"
    },
    {
      title: "Web Developer",
      company: "HCL",
      location: "Noida",
      salary: "₹9 LPA",
      img: "https://via.placeholder.com/150"
    },
    {
      title: "Data Analyst",
      company: "TCS",
      location: "Mumbai",
      salary: "₹10 LPA",
      img: "https://via.placeholder.com/150"
    }
  ];

  const container = document.getElementById("job-listings");
  jobs.forEach(job => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${job.img}" class="card-img-top" alt="Job Image">
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <p class="card-text"><b>Company:</b> ${job.company}<br><b>Location:</b> ${job.location}<br><b>Salary:</b> ${job.salary}</p>
          </div>
        </div>
      </div>
    `;
  });
});
