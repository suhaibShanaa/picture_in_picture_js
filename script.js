const quoteContainer = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const authorText   = document.getElementById('author');
const newQuoteBtn   = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

let apiQuotes = [];

// Show New Quote
function newQuote() {
    
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
    quoteText.textContent  = quote.text;


    // console.log(quote);
}



// Get Qoutes From API
async function getQuotes(){

    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);

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
getQuotes();

// If I need to use localQoutes 
    // newQuote();
/*  must change  "apiQuotes" to varaible have a quotes like "localQoute"
    const quote = localQoute[Math.floor(Math.random() * localQoute.length )];
*/