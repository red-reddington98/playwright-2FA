import { Locator, Page } from '@playwright/test';
import BasePage from './basePage'
import authenticator from 'authenticator'
 
export default class LoginPage extends BasePage{


    private signInButton: Locator
    private emailInputField : Locator
    private passwordInputField : Locator
    private nextButton: Locator
    private selectAuthenticatorApproachSection: Locator
    private enterCodeInput: Locator
    private dontAskOnThisDeviceCheckbox: Locator
    private tryAnotherWayLink: Locator

    constructor(page:Page){
        super(page)
        this.signInButton = page.getByRole('link', { name: 'Sign in' })
        this.emailInputField = page.getByLabel('Email or phone')
        this.passwordInputField = page.getByLabel('Enter your password')
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.selectAuthenticatorApproachSection = page.getByRole('link', { name: 'Get a verification code from' })
        this.enterCodeInput = page.getByLabel('Enter code')
        this.dontAskOnThisDeviceCheckbox = page.getByLabel("Don’t ask again on this device")
        this.tryAnotherWayLink = page.getByRole('button', { name: 'Try another way' })
     }

    async navigateToLoginPage(): Promise <void>{
        await this.navigateToPage('https://www.google.com/intl/en-US/gmail/about/');
    }
    async clickOnSignIn(): Promise <void> {
        await this.signInButton.click()
    }
    async enterEmail(email: string): Promise <void>{
        await this.emailInputField.fill(email)
        await this.page.waitForLoadState()
    }
    async clickOnNextButton(): Promise <void>{
        this.nextButton.click()
        await this.page.waitForTimeout(2000)
    }
    async enterPassword(password: string): Promise <void> {
        await this.passwordInputField.fill(password)
        await this.page.waitForLoadState();
    }
    async selectAuthenticatorApproach(): Promise <void> {
        await this.selectAuthenticatorApproachSection.click()
        await this.page.waitForLoadState();
    }

    async handle2FactorAuth(key: string): Promise <void> {
        let formattedKey = key;
        let formattedToken = authenticator.generateToken(formattedKey);
        authenticator.verifyToken(formattedKey, formattedToken)
        this.enterCodeInput.fill(formattedToken)
        await this.page.waitForLoadState()
    }

    async dontAskAgainCheckbox(): Promise <void> {
      await this.dontAskOnThisDeviceCheckbox.uncheck()
    }

    async clickTryAnotherWayFlow(): Promise <void> {
        await this.tryAnotherWayLink.click()
    }
}