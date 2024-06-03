# TypeScript Playwright Project with 2FA Bypass

This sample project demonstrates how to automate browser interactions using TypeScript and Playwright, with the capability to bypass 2FA Authentication using the authenticator package.
```bash
https://www.npmjs.com/package/authenticator
```
## Installation

To get started, clone this repository to your local machine:

```bash
git clone <repository-url>
```
Then, navigate to the project directory and install the dependencies:
```bash
npm i
```

## Setup & Prerequisites

Install on your smartphone any authenticator app (Google, Microsoft etc..)


## Dependencies
This project relies on the following dependencies:
- Playwright: A Node.js library to automate browsers.
- authenticator: A package for generating and verifying TOTP (Time-based One-Time Password) tokens for Multi-Factor Authentication.

## Configuration

To use MFA bypass in your tests, make sure to provide the necessary configuration for the authenticator package.

Steps to achieve a successful flow:
- Navigate to your MFA enabled SPA
- Select option "Can't scan QR code"
- Key is going to be in this format ```acqo ua72 d3yf a4e5 uorx ztkh j2xl 3wiz```
- Pass it as the arg in the ```handle2FactorAuth()```
- Voila!