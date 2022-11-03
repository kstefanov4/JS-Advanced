class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    };

    newAdditions(footballPlayers) {
        let addedPlayers = [];

        for (const player of footballPlayers) {
            let name = player.split('/')[0];
            let age = player.split('/')[1];
            let playerValue = Number(player.split('/')[2]);

            if (this.invitedPlayers.find(x => x.name == name)) {

                if (playerValue > this.invitedPlayers.find(x => x.name == name).playerValue) {
                    this.invitedPlayers.find(x => x.name == name).playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                addedPlayers.push(name);
            }

        }
        return `You successfully invite ${addedPlayers.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let name = selectedPlayer.split('/')[0];
        let offer = Number(selectedPlayer.split('/')[1]);

        if (!this.invitedPlayers.find(x => x.name == name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        };

        if (offer < this.invitedPlayers.find(x => x.name == name).playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${this.invitedPlayers.find(x => x.name == name).playerValue - offer} million more are needed to sign the contract!`);
        };

        this.invitedPlayers.find(x => x.name == name).playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`

    };

    ageLimit(name, age) {

        if (!this.invitedPlayers.find(x => x.name == name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        };

        if (Number(this.invitedPlayers.find(x => x.name == name).age) < Number(age)) {
            if (Number(age) - Number(this.invitedPlayers.find(x => x.name == name).age) < 5){
                return `${name} will sign a contract for ${Number(age) - Number(this.invitedPlayers.find(x => x.name == name).age)} years with ${this.clubName} in ${this.country}!`
            }else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }  else {
            return `${name} is above age limit!`
        }
    };

    transferWindowResult(){
        let result = '';

        result += 'Players list:';

        for (const player of this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name))) {
            result += `\nPlayer ${player.name}-${player.playerValue}`;
        }
        return result;

    };
};

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));

