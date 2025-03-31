// const passport = require("passport");
module.exports = function (express, db) {
  const router = express.Router({ mergeParams: true });
  const income = require("../db/income")(db);
  const expenses = require("../db/expenses")(db);
  const pots = require("../db/pots")(db);
  const pot_detail = require("../db/pot_detail")(db);
  const transactions = require("../db/transactions")(db);
  const budgets = require("../db/budgets")(db);
  const recurringBills = require("../db/recurringBills")(db);
  router.get("/income", income.retrieve);
  router.get("/expenses", expenses.retrieve);
  router.get("/pots", pots.retrieve);
  router.get("/pot_detail", pot_detail.retrieve);
  router.post("/pots", pots.insert);
  router.get("/transactions", transactions.retrieve);
  router.post("/transactions", transactions.insert);
  router.get("/budgets", budgets.retrieve);
  router.get("/recurringbills", recurringBills.retrieve);
  return router;
};
