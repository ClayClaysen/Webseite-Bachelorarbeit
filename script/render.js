let project_data;
let about_me_data;
let project_data_length;


fetch('/script/data.json')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json)
        // console.log(json.about_me)
        // console.log(json.projects)
        // console.log(json.projects.length)

        set_data(json.about_me, json.projects, json.projects.length)
    });


function set_data(about_me, projects, project_amount) {
    about_me_data = about_me;
    project_data = projects;
    project_data_length = project_amount;

    console.log(about_me_data);
    console.log(project_data);
    console.log(project_data_length);

}


function renderHome() {


    var template_project = document.getElementById('template-project').innerHTML;
    var template_about_me = document.getElementById('template-about_me').innerHTML;

    var rendered_project = Mustache.render(template_project, project_data[0]);
    var rendered_about_me = Mustache.render(template_about_me, about_me_data);

    document.getElementById('projects-container').innerHTML = rendered_project;
    document.getElementById('about_me-container').innerHTML = rendered_about_me;
}


function renderWork() {

    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, project_data);
    document.getElementById('projects-container').innerHTML = rendered;
}

var projects_old = [{
        projectname: "Luke",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },
    {
        projectname: "Jaggl",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },
    {
        projectname: "Malik Harris sein  VAdder vadder Vadder",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },

]

var about_me_old = {
    name: "Simon Klostermaier",
    image: "/images/Aktivitätsmusik.png",
    about_me_description: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
}