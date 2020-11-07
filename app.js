/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is in a Martini?',
      answers: [
        'Vodka',
        'Rum',
        'Tequila',
        'Beer'
      ],
      correctAnswer: `Vodka`
    },
    {
      question: 'Which one is not Vodka?',
      answers: [
        'Kettle One',
        'Grey Goose',
        'Patron',
        'Stolichnaya'
      ],
      correctAnswer: 'Patron'
    },
    {
        question: 'Out of these choices, which one is a shot?',
        answers: [
            'Sex on the beach',
            'Cape Cod',
            'Black Velvet',
            'Green Tea',
        ],
        correctAnswer: 'Green Tea'
    },
    {
        question: 'Which beer is not a IPA?',
        answers: [
            'Dogfish 60',
            'Magic Hat',
            'Sierra Nevada Hazy',
            'Bud Light',
        ],
        correctAnswer: 'Bud Light'
    },
    {
        question: 'Which one is not a proper for of ID?',
        answers: [
            'School ID',
            'Drivers License',
            'Passport',
            'Birth certificate',
        ],
        correctAnswer: 'School ID',
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */