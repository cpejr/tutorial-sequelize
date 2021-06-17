const { Note } = require("../models");

module.exports = {
  async create(req, res) {
    const { title, content, userId } = req.body;

    try {
      await Note.create({ title, content, userId });
      return res.status(201).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  },

  async read(req, res) {
    try {
      const notes = user.findAll();

      return req.status(200).json({ notes });
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  },

  async update(req, res) {
    const id = req.params;
    const { title, content } = req.body;

    try {
      const note = await None.findOne(id);

      if (!note) return req.status(404).json();

      note.title = title;
      note.content = content;

      await note.save();

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json();
    }
  },

  async delete(req, res) {
    const id = req.params;

    try {
      await Note.delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json();
    }
  },
};
