export const GREEN_DICE:string = "green";
export const GREY_DICE:string= "grey";
export const ORANGE_DICE:string = "orange";
export const YELLOW_DICE:string = "yellow";
export const BLUE_DICE:string = "blue";
export const PURPLE_DICE:string = "purple";

export function areTeamsBalanced(team1:string[],team2:string[]):boolean{
let balanced = false;
const team1Length = 0;
const team2Length = 0;

const totalTeam1 = getTeamScore(team1, team2Length);
const totalTeam2 = getTeamScore(team2, team1Length);
if(totalTeam1 === totalTeam2){
    balanced = true
}
return balanced;
}

export function getTeamScore(team:any[],team2Length:number):number{
    let totalModificator = 0

    const nbGreenDice = team.filter((dice)=>{ dice === GREEN_DICE}).length;
    const nbGreyDice = team.filter((dice)=>{ dice === GREY_DICE}).length;
    const nbOrangeDice = team.filter((dice)=>{ dice === ORANGE_DICE}).length;
    const nbYellowDice = team.filter((dice)=>{ dice === YELLOW_DICE}).length;
    const nbBlueDice = team.filter((dice)=> {dice === BLUE_DICE}).length;
    const nbPurpleDice = team.filter((dice)=>{ dice === PURPLE_DICE}).length;

    console.log(team)
        const initialValue = 0
        let total:any = team.reduce((accumulator , dice )=>{
        if(dice === GREEN_DICE){
             return accumulator + 1
        }
        if(dice === GREY_DICE){
            return accumulator + 2
        }
        if(dice === ORANGE_DICE &&( team.length & 1)){
            return accumulator + 1
        }
        if(dice === ORANGE_DICE && !(team.length & 1)){
            return accumulator + 2
        }
        if(dice === YELLOW_DICE){
            return accumulator -1
        }
        if(dice === BLUE_DICE){
            return accumulator + 3
        }
    },initialValue)

    console.log("--------------------------COPIE TEAM --------------------------",total)
    //logic that bind name to correct value and use reduce to do the math

    if(nbPurpleDice > 0){
        if(nbYellowDice > 0){
            return totalModificator + nbYellowDice;
        }
        if(nbGreenDice > 0){
            return totalModificator - (1 * nbGreenDice);
        }
        if(nbGreyDice > 0){
            return totalModificator - (2 * nbGreyDice);
        }
        if(nbOrangeDice > 0 && (team.length & 1)) {
            return totalModificator - (1 * nbOrangeDice);
        }
        if(nbOrangeDice > 0 && !(team.length & 1)){
            return totalModificator - ( 1 * nbOrangeDice);
        }
        if(nbBlueDice > 0){
            return totalModificator - (team2Length * nbBlueDice);
        }
        if(nbPurpleDice > 0){
            return totalModificator - (3 * nbPurpleDice);
        }

    }

    return total + totalModificator;

}

export function getAllTeamsCombination(team1:string[],team2:string[]):[[]]{
    return [[]]
}

export function findSolution(team1:string[],team2:string[]):[string[],string[]]{
    const combinations = getAllTeamsCombination
     return combinations.find(([team1, team2])=> areTeamsBalanced(team1, team2));
}