
exports.seed = async knex => {
  await knex('quotes').del()
  await knex('quotes').insert([{
    description: "Life is like riding a bicycle. To keep your balance, you must keep moving",
    author: "Albert Einstein",
    category_id: 1
  },{
    description: "The way to get started is to quit talking and doing.",
    author: "Walt Disney",
    category_id: 2
  },{
    description: "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up...",
    author: "Thomas Edison",
    category_id: 3
  },{
    description: "There are only teo ways to live yout life. One is as though nothing is a miracle. The other is as though everything is a miracle...",
    author: "Albert Einstein",
    category_id: 3
  },{
    description: "People will forget what you said. People will forget what you did. But, people will never forget how you made them feel.",
    author: "Maya Angelou",
    category_id: 3
  },{
    description: "To steal ideas from one person is plagiarism. To steal from many is research.",
    author: "Wilson Mizner",
    category_id: 4
  },{
    description: "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    author: "Abraham Lincoln",
    category_id: 4
  },{
    description: "The only way to have a friend is to be one.",
    author: "Ralph Waldo Emerson",
    category_id: 5
  },{
    description: "Truly great friends are hard to find, difficult to leave, and impossible to forget.",
    author: "G. Randolf",
    category_id: 5
  },{
    description: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category_id: 6
  },{
    description: "To the world you may be just one person, but to one person you may be the world.",
    author: "Brandi Snyder",
    category_id: 6
  },{
    description: "We cannot do great things on this earth, only small things with great love.",
    author: "Mother Teresa",
    category_id: 6
  },{
    description: "Love is absense of judgement.",
    author: "Dalai Lama",
    category_id: 6
  },{
    description: "Never leave that till tomorrow which you can do today.",
    author: "Bejamin Franklin",
    category_id: 7
  },{
    description: "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt",
    category_id: 7
  }])
};
