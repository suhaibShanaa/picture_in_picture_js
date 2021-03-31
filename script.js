const quoteContainer = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const authorText   = document.getElementById('author');
const newQuoteBtn   = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];


// Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Show New Quote
function newQuote() {

    loading();
    // Pick a random quote from apiQoutes array usinf Math function
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];
    
    // Check if Author fields is blank and replace it with ''
    if(!quote.author){
        authorText.textContent = "Unknown"; 
    }else{
        authorText.textContent = quote.author;
    }

    // Check Qoute length to determine styling
    if(quote.text.length > 50 ){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    //Set Qoute, Hide Loader

    quoteText.textContent  = quote.text;
    complete();

    // console.log(quote);
}



// Get Qoutes From API
async function getQuote(){

    loading();
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);

        newQuote();

    } catch (error) {
        alert(error);
        // Catch Error Here
        
    }
}

// Tweet Qoute
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} - Classera Larning System`;
    window.open(twitterUrl, '_blank');

}
// Evet Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click' , tweetQuote);






// On Load
getQuote();

// If I need to use localQoutes 
    // newQuote();
/*  must change  "apiQuotes" to varaible have a quotes like "localQoute"
    const quote = localQoute[Math.floor(Math.random() * localQoute.length )];
*/