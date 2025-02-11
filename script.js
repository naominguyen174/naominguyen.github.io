document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "Portfolio Website (this one!)", link: "https://naominguyen.github.io" }
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
        projectList.appendChild(li);
    });
});

