function renderContent() {

    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, projects[projects.length - 1]);
    document.getElementById('projects-container').innerHTML = rendered;
}

var projects = [{
        projectname: "Luke",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },
    {
        projectname: "Luke",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },
    {
        projectname: "Malik Harris sein Vadder",
        image: "/images/Aktivitätsmusik.png",
        projectdescription: "Chuck, Chuck, its' your cousin. Your cousin Marvin Berry, you know that new sound you're lookin for, well listen to this. Then how am I supposed to ever meet anybody."
    },

]