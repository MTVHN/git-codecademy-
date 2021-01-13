/***** Project Goals *****/
//Iterate over arrays to improve the quality of a paragraph and gather some information about that paragraph. This includes: word count, sentence count, number of times each overused word appears.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
let betterWords = storyWords.filter(word => {return !unnecessaryWords.includes(word)});

let wordCount = betterWords.length;

let wordCount1 = 0;
let wordCount2 = 0;
let wordCount3 = 0;
for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i] === 'really') {
    wordCount1++;
  }
  else if (betterWords[i] === 'very') {
    wordCount2++;
  } 
  else if (betterWords[i] === 'basically') {
    wordCount3++;
  }
};

function countWords(count1 = wordCount1, count2 = wordCount2, count3 = wordCount3) {
    console.log('You used these words:');
    console.log('"Really": ', count1);
    console.log('"Very": ', count2);
    console.log('"Basically": ', count3);
  };

//Counts the number of sentences in the betterWords
//Reminder for me: Codecademy used .forEach method to get count of sentences. 
let countSentences = 0;
let sentenceVal;
for (let sentences = 0; sentences < betterWords.length; sentences++) {
  if (betterWords[sentences]) {
    //Stores the actual element (i.e. word) from the array, so we can use the length property
    sentenceVal = betterWords[sentences];
      if (sentenceVal[sentenceVal.length - 1] === '.' || sentenceVal[sentenceVal.length - 1] === '!') {
        countSentences++;
      }
  }
};

const compiledCounts = (finalWordCount, finalSentCount, overusedWordCount) => {
  console.log('Word Count: ', finalWordCount);
  console.log('Number of Sentences: ', finalSentCount);
  overusedWordCount();
}
console.log(compiledCounts(wordCount, countSentences, countWords));
console.log(betterWords.join(' '));

