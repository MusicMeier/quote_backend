
exports.seed = async knex => {
  await knex('quotes').del()
  await knex('quotes').insert([{
    id: 1,
    description: "Life is like riding a bicycle. To keep your balance, you must keep moving",
    author: "Albert Einstein",
    category_id: 1
  },{
    id: 2,
    description: "The way to get started is to quit talking and doing.",
    author: "Walt Disney",
    category_id: 2
  }])
};
