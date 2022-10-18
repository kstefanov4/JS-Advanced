class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    };

    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        };

        if (this.listOfParticipants.find(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`;
        };

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    };

    unregisterParticipant(name) {
        if (!this.listOfParticipants.find(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        };

        this.listOfParticipants.splice(this.listOfParticipants.findIndex(x => x.name == name), 1);
        return `The ${name} removed successfully.`;
    };

    timeToPlay (typeOfGame, participant1, participant2){
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.find(x => x.name == participant1) && !this.listOfParticipants.find(x => x.name == participant2)){
                throw new Error('Invalid entered names.');
            };

            if (this.listOfParticipants.find(x => x.name == participant1).condition !== this.listOfParticipants.find(x => x.name == participant2).condition) {
                throw new Error('Choose players with equal condition.');
            };

            if (this.listOfParticipants.find(x => x.name == participant1).power > this.listOfParticipants.find(x => x.name == participant2).power){
                this.listOfParticipants.find(x => x.name == participant1).wins++;
                return `The ${this.listOfParticipants.find(x => x.name == participant1).name} is winner in the game ${typeOfGame}.`;
            }else if (this.listOfParticipants.find(x => x.name == participant1).power < this.listOfParticipants.find(x => x.name == participant2).power){
                this.listOfParticipants.find(x => x.name == participant2).wins++;
                return `The ${this.listOfParticipants.find(x => x.name == participant2).name} is winner in the game ${typeOfGame}.`;
            }else{
                return `There is no winner.`;
            }
            
        }else if(typeOfGame == 'Battleship'){
            if (!this.listOfParticipants.find(x => x.name == participant1)){
                throw new Error('Invalid entered name.');
            };

            this.listOfParticipants.find(x => x.name == participant1).power += 20;
            return `The ${this.listOfParticipants.find(x => x.name == participant1).name} successfully completed the game ${typeOfGame}.`
        };

    };

    toString() {
        let result = ''
        result += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`

        for (const participant of this.listOfParticipants.sort((a,b) => b.wins - a.wins)) {
            result += `\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        }

        return result;
    };
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());




