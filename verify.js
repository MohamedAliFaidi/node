const verify = function (req, res, next) {
  console.log(req.headers)
  console.log(req.ips)
  console.log(req.ip)
  next();
};

module.exports = verify;
