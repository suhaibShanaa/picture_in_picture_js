const quoteContainer = document.getElementById('quote-container');
const quoteText     = document.getElementById('quote');
const authorText   = document.getElementById('author');
const newQuoteBtn   = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

// let apiQuotes = [];


function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function removeLoadingSpinner(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Show New Quote
function newQuote() {

    showLoadingSpinner();
    // Pick a random quote from apiQoutes array usinf Math function
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length )];
    
    // Check if Author fields is blank and replace it with ''
    if(!quote.author){
        authorText.textContent = "--"; 
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
    removeLoadingSpinner();
}



// Get Qoutes From API
// async function getQuoteFromAPI(){

//     showLoadingSpinner();
//     const apiUrl = 'https://type.fit/api/quotes';

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();

//         newQuote();

//     } catch (error) {
//         alert(error);
//         getQuoteFromAPI();
//     }
// }

// Tweet Qoute
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} - Classera Larning System`;
    window.open(twitterUrl, '_blank');

}
// Evet Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click' , tweetQuote);






/*****On Load****/
// getQuoteFromAPI();
newQuote();


// If I need to use localQoutes 
    // newQuote();
/*  must change  "apiQuotes" to varaible have a quotes like "localQoute"
    const quote = localQoute[Math.floor(Math.random() * localQoute.length )];
*/