
exports.seed = async knex => {
  await knex('quotes').del()
  await knex('quotes').insert([{
    description: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    category_id: 1
  },{
    description: "The way to get started is to quit talking and start doing.",
    author: "Walt Disney",
    category_id: 2
  },{
    description: "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison",
    category_id: 3
  },{
    description: "There are only two ways to live out your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
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
    description: "A day without a friend is like a pot without a single drop of honey.",
    author: "Winnie The Pooh",
    category_id: 5
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
    description: "Love is the absense of judgement.",
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
  },{
    description: "Be yourself. Everyone else is taken.",
    author: "Oscar Wilde",
    category_id: 2
  },{
    description: "Every accomplishment starts with the decision to try.",
    author: "John F. Kennedy",
    category_id: 1
  },{
    description: "Nothing worth having comes easy.",
    author: "Theodore Roosevelt",
    category_id: 2
  },{
    description: "Dreams do come true, if only we wish hard enough. You can have anything in life if you will sacrifice everything else for it.",
    author: "Peter Pan",
    category_id: 1
  },{
    description: "Look with your heart and not with your eyes.",
    author: "Andrew Lloyd Webber",
    category_id: 6
  },{
    description: "Education is the most powerful weapon we can use to change the world.",
    author: "Nelson Mandela",
    category_id: 7
  },{
    description: "Courage is the most important of all the virtues, because without courage you can't practice any other virtue consistently. You can practice any virtue erratically, but nothing consistently withouth courage.",
    author: "Maya Angelou",
    category_id: 3
  },{
    description: "The world is full of nice people. If you can't find one, be one.",
    author: "Nishan Panwar",
    category_id: 1
  },{
    description: "I'd rather regret the things I've done than regret the things I haven't done.",
    author: "Lucille Ball",
    category_id: 1
  },{
    description: "Nothing lasts forever, but something special can last a lifetime.",
    author: "Bambi",
    category_id: 6
  },{
    description: "If you want something you've never had, you must be willing to do something you've never done.",
    author: "Thomas Jefferson",
    category_id: 1
  },{
    description: "To live a creative life, we must lose our fear of being wrong.",
    author: "Joseph Chilton Pearce",
    category_id: 1
  },{
    description: "To get what you love, you must first be patient with what you hate.",
    author: "Al-Ghazali",
    category_id: 3
  },{
    description: "The privilege of a lifetime is being who you are.",
    author: "Joseph Campbell",
    category_id: 1
  },{
    description: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    category_id: 7
  },{
    description: "Anything is possible when you have the right people there to support you.",
    author: "Misty Copeland",
    category_id: 5
  },{
    description: "Many people will walk in and out of your life, but only true friends will leave footprints in your heart.",
    author: "Eleanor Roosevelt",
    category_id: 5
  },{
    description: "It's an insane world, but in it, there's one sanity, the loyalty of old friends.",
    author: "Ben-Hur",
    category_id: 5
  },{
    description: "Good friends are like stars. You don't always see them, but you know they're always there.",
    author: "Christy Evans",
    category_id: 5
  },{
    description: "Women's friendships are like a renewable source of power.",
    author: "Jane Fonda",
    category_id: 5
  },{
    description: "Friendship isn't a big thing, it's a million little things.",
    author: "Paulo Coelho",
    category_id: 5
  },{
    description: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell",
    category_id: 5
  },{
    description: "Ultimately the bond of all companionship, whether marriage or in friendship, is conversation.",
    author: "Oscar Wilde",
    category_id: 3
  },{
    description: "You always gain by giving love.",
    author: "Reese Witherspoon",
    category_id: 6
  },{
    description: "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
    author: "Winnie the Pooh",
    category_id: 6
  },{
    description: "You can't blame gravity for falling in love.",
    author: "Albert Einstein",
    category_id: 6
  },{
    description: "Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song.",
    author: "Plato",
    category_id: 6
  },{
    description: "Do not take life too seriously. You will never get out alive.",
    author: "Elber Hubbard",
    category_id: 4
  },{
    description: "No matter what people tell you, words and ideas can change the world.",
    author: "Robbin Williams",
    category_id: 2
  },{
    description: "You're only given one spark of madness. You mustn't lose it.",
    author: "Robin Williams",
    category_id: 2
  },{
    description: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
    category_id: 7
  },{
    description: "My mama says that stupid is as stupid does.",
    author: "Forrest Gump",
    category_id: 4
  },{
    description: "Life is like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump",
    category_id: 3
  },{
    description: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    author: "Benjamin Franklin",
    category_id: 7
  },{
    description: "There are no limits to what you can accomplish, except the limits you place on your own thinking.",
    author: "Brian Tracy",
    category_id: 7
  },{
    description: "If you want to fly, give up everything that weighs you down.",
    author: "Buddha",
    category_id: 7
  },{
    description: "It's okay to be a glowstick. Sometimes we have to break before we shine.",
    author: "Jadah Sellner",
    category_id: 1
  },{
    description: "If you can make a girl laugh, you can make her do anything.",
    author: "Marilyn Monroe",
    category_id: 4
  },{
    description: "To find yourself, think for yourself.",
    author: "Socrates",
    category_id: 3
  },{
    description: "What goes up must come down.",
    author: "Issac Newton",
    category_id: 3
  },{
    description: "A goal is a dream with a deadline.",
    author: "Napoleon Hill",
    category_id: 7
  },{
    description: "Winning isn't everything, but wanting to win is.",
    author: "Vince Lombardi",
    category_id: 7
  },{
    description: "Greatness belongs to those who have mastered the ability to focus relentlessly on their ambitions, and act decisively towards them.",
    author: "Brendon Burshard",
    category_id: 7
  },{
    description: "He who aims at excellence will be above mediocrity. He who aims at mediocrity will be far short of it.",
    author: "Burmese Proverb",
    category_id: 7
  },{
    description: "It is not in the stars to hold our destiny, but in ourselves.",
    author: "William Shakespeare",
    category_id: 1
  },{
    description: "Success is going from failure to failure without a loss of enthusiam.",
    author: "Winston Churchill",
    category_id: 7
  },{
    description: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
    category_id: 7
  },{
    description: "If it doesn't add to your life, it doesn't belong in your life.",
    author: "Amara Honeck",
    category_id: 1
  },{
    description: "It's not how good you are, it's how good you want to be.",
    author: "Paul Arden",
    category_id: 2
  },{
    description: "We must find time to stop and thank the people who make a difference in out lives.",
    author: "John F. Kennedy",
    category_id: 3
  },{
    description: "We can't direct the wind, but we can adjust the sails.",
    author: "Thomas S. Monson",
    category_id: 3
  },{
    description: "I've decided to be happy because it is good for my health.",
    author: "Voltaire",
    category_id: 3
  },{
    description: "We have the tendancy to want the other person to be a finished product while we give ourselves the grace to evolve.",
    author: "T.D. Jakes",
    category_id: 3
  },{
    description: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    category_id: 7
  },{
    description: "He who is good for making excuses is seldom good for anything else.",
    author: "Benjamin Franklin",
    category_id: 3
  },{
    description: "I learned that courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category_id: 2
  },{
    description: "You can't build a good reputation on what you are going to do.",
    author: "Henry Ford",
    category_id: 7
  },{
    description: "Be miserable or motivate yourself. Whatever has to be done, it's always your choice.",
    author: "Wayne Dyer",
    category_id: 2
  },{
    description: "The will to succeed is important, but what's more important is the will to prepare.",
    author: "Bobby Knight",
    category_id: 1
  },{
    description: "May the space between where I am where I want to be inspire me and not terrify me.",
    author: "Tracee Ellis Ross",
    category_id: 1
  },{
    description: "When you talk, you are only repeating what you already know. But if you listen, you may learn something new.",
    author: "Dalai Lama",
    category_id: 3
  },{
    description: "Forgive yourself for not knowing what you didn't know before you learned it.",
    author: "Maya Angelou",
    category_id: 3
  },{
    description: "Refuse to settle for anything less than butterflies.",
    author: "Carrie Bradshaw",
    category_id: 6
  },{
    description: "Present opportunities are not to be neglected. They rarely visit us twice.",
    author: "Voltaire",
    category_id: 3
  },{
    description: "Well done is better than well said.",
    author: "Benjamin Franklin",
    category_id: 7
  },{
    description: "Our truest life is when we are in dreams awake.",
    author: "Thoreau",
    category_id: 6
  },{
    description: "Often it isn't the mountains ahead that wear you out, it's the little pebble in your shoe.",
    author: "Muhammad Ali",
    category_id: 2
  },{
    description: "Failure is success in progress",
    author: "Albert Einstein",
    category_id: 7
  },{
    description: "True friendship comes when the silence between two people is comfortable.",
    author: "David Tyson",
    category_id: 5
  },{
    description: "Sweet is the memory of distant friends! Like the mellow rays of the departing sun, it falls tenderly, yet sadly, on the heart.",
    author: "Washington Irving",
    category_id: 5
  },{
    description: "A single rose can be my garden… a single friend, my world.",
    author: "Leo Buscaglia",
    category_id: 5
  },{
    description: "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
    author: "Thomas J. Watson",
    category_id: 5
  },{
    description: "What you do not want done to yourself, do not do to others",
    author: "Confucius",
    category_id: 3
  },{
    description: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
    category_id: 3
  },{
    description: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "Winnie the Pooh",
    category_id: 1
  },{
    description: "Be slow to fall into friendship; but when thou art in, continue firm & constant.",
    author: "Socrates",
    category_id: 5
  },{
    description: "Flatter me, and I may not believe you. Criticize me, and I may not like you. Ignore me, and I may not forgive you. Encourage me, and I will not forget you. Love me and I may be forced to love you.",
    author: "William Arthur Ward",
    category_id: 6
  },{
    description: "No person is your friend who demands your silence, or denies your right to grow.",
    author: "Alice Walker",
    category_id: 5
  },{
    description: "The most beautiful discovery true friends make is that they can grow separately without growing apart.",
    author: "Elisabeth Foley",
    category_id: 5
  },{
    description: "I love her, and that’s the beginning and end of everything.",
    author: "F. Scott Fitzgerald",
    category_id: 6
  },{
    description: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category_id: 6
  },{
    description: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",
    category_id: 6
  },{
    description: "I think I'd miss you even if we never met.",
    author: "The Wedding Date",
    category_id: 6
  },{
    description: "I fell in love the way you fall asleep: slowly, and then all at once.",
    author: "John Green",
    category_id: 6
  },{
    description: "'Tis better to have loved and lost, than never to have loved at all.",
    author: "Alfred, Lord Tennyson",
    category_id: 6
  },{
    description: "You know you're in love when you can't fall asleep because the reality is finally better than your dreams.",
    author: "Dr. Seuss",
    category_id: 6
  },{
    description: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category_id: 6
  },{
    description: "When you love someone, you love the person as they are, and not as you'd like them to be.",
    author: "Leo Tolstoy",
    category_id: 6
  },{
    description: "When I saw you I fell in love, and you smiled because you knew.",
    author: "Arrigo Boito",
    category_id: 6
  },{
    description: "You are my sun, my moon, and all my stars.",
    author: "E. E. Cummings",
    category_id: 6
  },{
    description: "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    author: "Alan Dundes",
    category_id: 4
  },{
    description: "At every party there are two kinds of people – those who want to go home and those who don’t. The trouble is, they are usually married to each other.",
    author: "Ann Landers",
    category_id: 4
  },{
    description: "If you want your children to listen, try talking softly to someone else.",
    author: "Ann Landers",
    category_id: 4
  },{
    description: "The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
    author: "Bill Watterson",
    category_id: 4
  },{
    description: "By the time a man realizes that his father was right, he has a son who thinks he’s wrong.",
    author: "Charles Wadsworth",
    category_id: 4
  },{
    description: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    author: "Dalai Lama",
    category_id: 4
  },{
    description: "A failure is like fertilizer; it stinks to be sure, but it makes things grow faster in the future.",
    author: "Denis Waitley",
    category_id: 7
  },{
    description: "Don’t cry because it’s over. Smile because it happened.",
    author: "Dr. Seuss",
    category_id: 1
  },{
    description: "Avoid fruits and nuts. You are what you eat.",
    author: "Jim Davis",
    category_id: 4
  },{
    description: "Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.",
    author: "Mark Twain",
    category_id: 4
  },{
    description: "Older people shouldn’t eat health food, they need all the preservatives they can get.",
    author: "Robert Orben",
    category_id: 4
  },{
    description: "The most dangerous phrase in the language is 'we've always done it this way.'",
    author: "Rear Admiral Grace Hopper",
    category_id: 3
  }])
};
