const { User } = require("../models");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email } = req.body;

    try {
      await User.create({ firstName, lastName, email });
      return res.status(201).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  },

  async read(req, res) {
    try {
      const users = user.findAll();

      return req.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return res.status(500).json();
    }
  },

  async update(req, res) {
    const id = req.params;
    const { firstName, lastName } = req.body;

    try {
      const user = await User.findOne(id);

      if (!user) return req.status(404);

      user.firstName = firstName;
      user.lastName = lastName;

      await user.save();

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json();
    }
  },

  async delete(req, res) {
    const id = req.params;

    try {
      await User.delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).josn();
    }
  },
};
