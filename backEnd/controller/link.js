import Link from "../model/Link.js";

export const links = async (req, res) => {
  try {
    const links = await Link.find({});
    res.status(200).send({
      success: true,
      data: links,
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

export const createLink = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (err) {
    res.status(400).send({ success: false, data: err.message });
  }
};

export const getLinkById = async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.findById({ shortId: id });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {}
};
