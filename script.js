const api = "https://type.fit/api/quotes";
const quote = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweetQuote");

const tweeting = () => {
    let link = `https://twitter.com/intent/tweet?text=${quoteData.text} -by ${quoteData.author}`;
    window.open(link);
}

let parsedData = "", quoteData = "";
const getNewQuote = () => {
    const random = Math.floor(Math.random() * 1000);
    quoteData = parsedData[random];
    quote.innerText = quoteData.text;
    quoteData.author != null ? author.innerText = "- " + quoteData.author : author.innerText = "- Unknown author";
}
const showQuotes = async () => {
    const response = await fetch(api);
    parsedData = await response.json();
    getNewQuote();
}
showQuotes();
newQuote.addEventListener("click", getNewQuote);
tweetQuote.addEventListener("click", tweeting);