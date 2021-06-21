const { User } = require("../models");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    try {
      await User.create({ firstName, lastName, email, password });
      return res.status(201).json();
    } catch (error) {
      console.warn(error);
      return res.status(500).json();
    }
  },

  async read(req, res) {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (error) {
      console.warn(error);
      return res.status(500).json();
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;

    try {
      const user = await User.update(
        { firstName, lastName, password },
        { where: { id } }
      );

      if (!user) return req.status(404);

      return res.status(204).json();
    } catch (error) {
      console.warn(error);
      return res.status(500).json();
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await User.destroy({ where: { id } });
      return res.status(204).json();
    } catch (error) {
      console.warn(error);
      return res.status(500).josn();
    }
  },
};
