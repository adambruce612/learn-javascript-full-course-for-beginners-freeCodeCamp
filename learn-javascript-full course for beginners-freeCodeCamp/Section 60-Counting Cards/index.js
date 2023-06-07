/* Create a blackjack card counting function. When it's a low card the count goes up, when a high card the count goes
down. When it's a middle value card the count stays the same. 
 When the count is positive the player should bet high, when the count is zero or negative the player should bet low. */
// Use a switch statement to figure out what card has been passed in and what to do. 
var count = 0;

function cc(card) {
    switch(card) {
        // if card value is 2-6 increment count by 1
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        // If card value is between 7-9 no action needed
        // If card value is between 10-Ace, decrement count by 1
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdBet = 'Hold';
    if (count > 0) {
        holdBet = 'Bet';
    }
        return count + " " + holdBet;
}

cc(2); cc('K'); cc(7); cc('K'); cc('A');
console.log(cc(4));