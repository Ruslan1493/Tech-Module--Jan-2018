const Project = require('../models').Project;

module.exports = {
    index: (req, res) => {
        // TODO
        let projects = Project.findAll().then(projects => {
            res.render("project/index", {"projects": projects})
        });

    },
    createGet: (req, res) => {
        // TODO
        res.render("project/create")
    },
    createPost: (req, res) => {
        // TODO
        let args = req.body.project;
        Project.create(args).then(()=> {
            res.redirect("/");
        })
    },
    editGet: (req, res) => {
        // TODO
        let id = req.params.id;
        Project.findById(id).then(project=>{
            res.render("project/edit", {"project": project})
        })
    },

    editPost: (req, res) => {
        // TODO
        let id = req.params.id;
        let args = req.body.project;

        Project.findById(id).then(project=>{
            project.updateAttributes(args).then(()=>{
                res.redirect("/");
            })
        })
    },

    deleteGet: (req, res) => {
        // TODO
        let id = req.params.id;
        Project.findById(id).then(project=>{
            res.render("project/delete", {"project": project})
        })
    },
    deletePost: (req, res) => {
        // TODO
        let id = req.params.id;

        Project.findById(id).then(project=>{
            project.destroy().then(()=>{
                res.redirect("/");
            })
        })
    }
};