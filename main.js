// 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];


let storyWords = story.split(" ");
let updatedStory = ''

console.log(storyWords.length);


// Create a word remover

var linter = function (inputText, removeText) {

    inputText = inputText.filter(function (word) {
        return !removeText.includes(word);
    });

    // outputs
    return inputText;
};

var removeUnneccessaryWords = linter(storyWords, unnecessaryWords);

// var removeOverusedWords = linter(removeUnneccessaryWords, overusedWords);

updatedStory = removeUnneccessaryWords.join(" ");
console.log(updatedStory, removeUnneccessaryWords.length);

// Count overused words

var removeGoodWords = function (inputText, removeText) {

    inputText = inputText.filter(function (word) {
        return removeText.includes(word);
    });

    // outputs
    return inputText;
};

var countoverUsed = removeGoodWords(storyWords, overusedWords);

const output = countoverUsed.reduce(function (acc, currentWord) {
    if (acc[currentWord]) {
        acc[currentWord] += 1;
    } else {
        acc[currentWord] = 1;
    }
    return acc;
}, {});

console.log(output);

// sentence count

var countSentences = function (inputText) {
    inputText = inputText.split(" ")
    let count = 0;
    inputText.forEach(function (element) {
        if (element.includes('.') || element.includes('!') || element.includes('?')) {
            return count += 1;
        }
    });
    return count
};



console.log(`There are ${countSentences(updatedStory)} sentences.`);

// 
