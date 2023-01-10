import User from "../model/User.js";

export const users = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).send({ success: false, data: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ shortId: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {}
};
