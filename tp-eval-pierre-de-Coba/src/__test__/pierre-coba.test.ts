import { BLUE_DICE, GREEN_DICE, GREY_DICE, ORANGE_DICE, PURPLE_DICE, YELLOW_DICE, areTeamsBalanced, findSolution, getTeamScore } from "../modules/pierre-coba";
import { describe, expect, test } from 'vitest';

const data =[
    [[GREEN_DICE, GREEN_DICE, GREY_DICE],[GREEN_DICE,GREEN_DICE,GREEN_DICE,GREEN_DICE]],
    [[GREY_DICE,GREY_DICE,GREY_DICE],[GREEN_DICE,GREEN_DICE,GREEN_DICE,ORANGE_DICE]],
    [[GREY_DICE,GREY_DICE,ORANGE_DICE,YELLOW_DICE],[GREY_DICE,GREY_DICE,ORANGE_DICE]],
]

describe('test all possible Balanced Team versus', () => {
    test.each(data)('areTeamsBalanced(%a, %a) should return true', (team1,team2) => {
        expect(areTeamsBalanced(team1,team2)).toBe(true);
    });
});


describe('getTeamScore',()=>{
    const overTeamlength = 0;

    describe('oneDiceTeam',()=>{
        test('Green',()=>{
            expect(getTeamScore([GREEN_DICE],0)).toBe(1);
        })
        test('Orange in odd team',()=>{
            expect(getTeamScore([ORANGE_DICE],0)).toBe(1);
        })
        test('Blue',()=>{
            const thisExempleTeamlength = 3
            expect(getTeamScore([BLUE_DICE],thisExempleTeamlength)).toBe(thisExempleTeamlength);
        })
    })
    
    describe('twoDiceTeam',()=>{
        test('Green- Grey',()=>{
            expect(getTeamScore([GREEN_DICE, GREY_DICE],overTeamlength)).toBe(1 + 2);
        })
        test('Green - Orange in even team',()=>{
            expect(getTeamScore([GREEN_DICE, ORANGE_DICE],overTeamlength)).toBe(1 + 2)
        })
        test('Purple - Green',()=>{
            expect(getTeamScore([PURPLE_DICE, GREEN_DICE],overTeamlength)).toBe(1 + 3 - 1);
        })

        describe('fourDiceTeam',()=>{
            test('Green - Green - Grey - Purple',()=>{
                expect(getTeamScore([GREEN_DICE,GREEN_DICE,GREY_DICE,PURPLE_DICE],overTeamlength)).toBe(1 + 1 + 2 + 3 - (1*2))
            })
        })
    })
})