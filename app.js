let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//split the string story
let storyWords = story.split(' ');
console.log(storyWords);

//filter out the unncessary words
let betterWords = storyWords.filter((words) => {
    return !unnecessaryWords.includes(words) //se imprimen todas las palabras que no esten en el array unnecessaryWords
});

console.log(betterWords);

//how many time the user use the overused words
let wordsOverused = betterWords.filter(word => {
    return overusedWords.includes(word);
    });

console.log(wordsOverused.length);

//how many sentences are in the paragraph
let sentencesCounter = 0;
betterWords.forEach(piriod => {
    if (piriod[piriod.length-1] === '.' || piriod[piriod.length-1] === '!') {
        return sentencesCounter++;
    }
});

console.log(sentencesCounter);

//log son items to the console
let itemsArr = ['The word count', 'The sentence count', 'The number of times eash overused word appears'];

let printItemArr =
    console.log('The word count: ' + storyWords.length);
    console.log('The sentence count: ' + sentencesCounter);
    console.log('The number of times each overused word appears: ' + wordsOverused.length);

console.log(betterWords.join(' '));

