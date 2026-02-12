const router = require("express").Router();
const mongoose = require("mongoose");
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  const projects = await Project.find().lean();

  // Sort newest first, falling back to ObjectId timestamp if createdAt is missing
  projects.sort((a, b) => {
    const aId = new mongoose.Types.ObjectId(a._id);
    const bId = new mongoose.Types.ObjectId(b._id);

    const aDate = a.createdAt
      ? new Date(a.createdAt).getTime()
      : aId.getTimestamp().getTime();
    const bDate = b.createdAt
      ? new Date(b.createdAt).getTime()
      : bId.getTimestamp().getTime();
    return bDate - aDate;
  });

  res.json(projects);
});

router.post("/", async (req, res) => {
  const { title, description, technologies, technology, tech, techStack, link } = req.body;

  // Normalize technologies: allow common field aliases and comma-separated strings
  const rawTech = technologies ?? technology ?? tech ?? techStack;
  const techArray = Array.isArray(rawTech)
    ? rawTech
    : typeof rawTech === "string"
      ? rawTech.split(",").map(t => t.trim()).filter(Boolean)
      : [];

  const project = new Project({ title, description, technologies: techArray, link });
  await project.save();
  res.json(project);
});

module.exports = router;
