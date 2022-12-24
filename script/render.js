var project_data;
var about_me_data;
var project_data_length;
var button;


fetch('/script/data.json')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json)
        // console.log(json.about_me)
        // console.log(json.projects)
        // console.log(json.projects.length)

        about_me_data = json.about_me;
        project_data = json.projects;
        project_data_length = json.projects.length
            // set_data(json.about_me, json.projects, json.projects.length)
    });


function renderHome() {

    var template_project = document.getElementById('template-project').innerHTML;
    var template_about_me = document.getElementById('template-about_me').innerHTML;

    var rendered_project = Mustache.render(template_project, project_data[project_data_length - 1]);
    var rendered_about_me = Mustache.render(template_about_me, about_me_data);

    document.getElementById('projects-container').innerHTML = rendered_project;
    document.getElementById('about_me-container').innerHTML = rendered_about_me;
}

function renderWork() {

    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, project_data);
    document.getElementById('projects-container').innerHTML = rendered;
}

function renderDetailPage() {
    var target_project_name = getUrlParameter();
    var target_index;

    for (let i = 0; i < project_data_length; i++) {
        if (project_data[i].target_id == target_project_name) {
            target_index = i;
        }
    }

    var template_project = document.getElementById('template-project').innerHTML;
    var rendered_project = Mustache.render(template_project, project_data[target_index]);
    document.getElementById('project-container').innerHTML = rendered_project;

}

function getUrlParameter() {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == "project") {
            return sParameterName[1];
        }
    }
}


document.addEventListener("click", function(evnt) {
    var menu = document.getElementById("menu");
    try {
        button = document.getElementById(evnt.target.id);
        console.log(button.id);
        if (button.id == "burger-menu-toggle") {
            if (menu.classList.contains("is_active")) {
                button.setAttribute('aria-expanded', 'false');
                menu.classList.remove('is_active');
            } else {
                menu.classList.add('is_active');
                button.setAttribute('aria-expanded', 'true');
                console.log("expand");
            }
        }

    } catch (e) {
        console.log("no id found");
    }
})