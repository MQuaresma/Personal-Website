const projects = require('../models/projects')

var ProjectsController = module.exports

ProjectsController.getProjects = async () => {
    procProjects = projects.find().exec().then( rawProjects => {
        procProjects = []

        rawProjects.forEach(project => {
            procProjects.push(project.toObject()); //{ title: project.name, description: project.description });
        });
                
        return procProjects;
    }).catch(error => console.log("projects.getProjects error: ", error));
    
    return procProjects;
}

ProjectsController.getByName = async (proj_name) => {
    project = projects.findOne({ name : proj_name }).exec().then( project => {
        return project.toObject();
    }).catch(error => console.log("projects.getByName error: ", error));

    return project;
}
