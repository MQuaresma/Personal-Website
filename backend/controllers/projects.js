const projects = require('../models/projects')

var projectsController = module.exports

projectsController.getProjects = async () => {
    procProjects = projects.find().exec().then( rawProjects => {
        procProjects = []

        rawProjects.forEach(project => {
            procProjects.push({ title: project.name, description: project.description });
        });
                
        return procProjects;
    }).catch(error => console.log("projects.getProjects error: ", error));
    

    return procProjects;
}
