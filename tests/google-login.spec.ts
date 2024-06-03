import { test, expect, firefox, chromium } from '@playwright/test';
import 'dotenv/config'
import LoginPage from '../pages/loginPage';






test.only('Bypass 2 Factor Auth', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.navigateToLoginPage()
  await loginPage.clickOnSignIn()
  await loginPage.enterEmail(process.env.EMAIL || "")
  await loginPage.clickOnNextButton()
  await loginPage.enterPassword(process.env.PASSWORD || "")
  await loginPage.clickOnNextButton()
  await loginPage.selectAuthenticatorApproach()
  await loginPage.handle2FactorAuth(process.env.TOTP || "")
  await loginPage.dontAskAgainCheckbox()
  await loginPage.clickOnNextButton()
});