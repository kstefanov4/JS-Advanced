function ticketsFunc(input, criteria){
    let ticketCollection = [];
    let inputArray = Array.from(input);

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    
    for (const input of inputArray) {
        let destination = input.split('|')[0];
        let price = input.split('|')[1];
        let status = input.split('|')[2];

        ticketCollection.push(new Ticket(destination,price,status))
    }
    switch (criteria) {
        case 'destination':
            ticketCollection.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            ticketCollection.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            ticketCollection.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }

    return ticketCollection;
}

console.log(ticketsFunc(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))