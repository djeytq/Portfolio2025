const sec = document.querySelectorAll(".sec");
const navLis = document.querySelectorAll("nav ul li");

function showSection(sectionId, li) {
    sec.forEach((section) => {
        section.style.display = "none";
        section.classList.remove("active");
    });
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = "block";
        sectionToShow.classList.add("active");
    }
    navLis.forEach((l) => l.classList.remove("active-link"));
    if (li) li.classList.add("active-link");
}

function init() {
    // Exibe a seção de redes sociais por padrão
    showSection("redes", document.querySelector("nav ul li:nth-child(4)"));

    navLis.forEach((li, idx) => {
        li.addEventListener("click", function (e) {
            e.preventDefault();
            let sectionId = "";
            switch (idx) {
                case 0:
                    sectionId = "about";
                    break;
                case 1:
                    sectionId = "skill";
                    break;
                case 2:
                    sectionId = "projects";
                    break;
                case 3:
                    sectionId = "redes";
                    break;
                default:
                    sectionId = "redes";
            }
            showSection(sectionId, li);
        });
    });
}

init();