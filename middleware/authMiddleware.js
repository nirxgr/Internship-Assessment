export default function authMiddleware(req, res, next) {
  const role = req.headers["x-role"];

  // Only teachers can modify student data
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    if (role !== "teacher") {
      return res
        .status(403)
        .json({ message: "Only teachers can modify student data" });
    }
  }

  next();
}
