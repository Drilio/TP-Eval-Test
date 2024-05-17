import { test, expect} from '@playwright/test';

test.describe('calculatorApp',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('http://localhost:5173/')
    })
    
    test.describe('addWithLittleNumber',()=>{
        test('test',async({page})=>{
            await page.locator('#number1').click();
            await page.locator('#sum').click();
            await page.locator('#number1').click();
            await page.locator('#btnEqual').click();
            await expect(page.locator('#screen')).toContainText('2');
        })
    })

    test.describe('substractWithLittleNumber',()=>{
        test('test',async({page})=>{
            await page.locator('#number1').click();
            await page.locator('#soustraction').click();
            await page.locator('#number1').click();
            await page.locator('#btnEqual').click();
            await expect(page.locator('#screen')).toContainText('0');
        })
    })

    test.describe('multWithLittleNumber',()=>{
        test('test',async({page})=>{
            await page.locator('#number2').click();
            await page.locator('#multiplication').click();
            await page.locator('#number2').click();
            await page.locator('#btnEqual').click();
            await expect(page.locator('#screen')).toContainText('4');
        })
    })

    test.describe('resetCalculator',()=>{
        test('test',async({page})=>{
            await page.locator('#number1').click();
            await page.locator('#sum').click();
            await page.locator('#number1').click();
            await page.locator('#btnEqual').click();
            await expect(page.locator('#screen')).toContainText('2');
            await page.locator('#C').click();
            await expect(page.locator('#screen')).toHaveValue('0');
        })
    })
})