// Strings in Javascript

// Creating Strings
const string = new String("Subscribe to RoadsideCoder!");

// using double quotes
const doubleQuote = "Subscribe to RoadsideCoder!";

// using single quotes
const singleQuote = "RoadsideCoder!";

// using backticks
const backticks = `
Subscribe to RoadsideCoder! 
Like this Video
Share this video
`;
// Template Literals
const templateLiteral = `Subscribe to ${singleQuote}!`;
// Tagged Literals
console.log`hello ${"world"} how are ${"you"}`

// Tagged Literals Example function 
function test (string, youtubeChannel, person) {
		console.log(string,youtubeChannel, person)
    return;
}

const channel = "RoadsideCoder"
const name = "Piyush"
test`Subscribe to ${channel} run by ${name}`