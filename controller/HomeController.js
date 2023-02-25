const getHomePage = (req, res) => {
  res.render("index", { title: "Express" });
};
const getCVPage = (req, res) => {
  res.render("cv");
};
const getUserPage = (req, res) => {
  res.send("respond with a resource");
};
module.exports = { getHomePage, getCVPage, getUserPage };
