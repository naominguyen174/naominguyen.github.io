document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "Portfolio Website (THIS ONE!)", link: "https://naominguyen174.github.io/naominguyen174.github.io" }
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
        projectList.appendChild(li);
    });
});

// Toggle the menu visibility
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
