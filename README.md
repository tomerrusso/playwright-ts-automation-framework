# 🚀 Saucedemo Automation Framework
> **An End-to-End Test Suite powered by Playwright & Jenkins CI/CD**

---

## 🎯 The Mission
This project provides a robust, scalable automation solution for the **Saucedemo** e-commerce platform. It demonstrates professional testing standards including the **Page Object Model (POM)** and **CI/CD integration**.

## 🛠️ Tech Stack
| Technology | Role |
| :--- | :--- |
| **Playwright** | Browser Automation & Test Runner |
| **TypeScript** | Strongly Typed Logic |
| **Jenkins** | CI/CD Pipeline & Scheduling |
| **HTML Report** | Visual Reporting & Artifacts |

## ✨ Key Architectural Highlights
* **Page Object Model (POM):** Decoupled test logic from UI selectors for 100% maintainability.
* **Individual Test Evidence:** Each test case automatically generates its own video recording and trace file.
* **Resilient Locators:** Using user-centric locators to reduce flakiness.
* **CI/CD Integrated:** Videos and reports are archived directly in the Jenkins build artifacts.

---

## 🎥 Project Demo (Test Recordings)
### 🛒 Main Flow: Full Checkout
This video demonstrates the complete end-to-end flow from login to order confirmation:

<video src="./assets/checkout-demo.webm" width="100%" controls></video>

### 🔍 Other Test Scenarios
Our suite includes individual recordings for each functional area (available in the `assets/` folder):
* **Login & Logout:** Validation of secure access.
* **Product Filtering:** Testing sorting logic (A-Z, Price Low-High, etc.).
* **Error Handling:** Asserting correct error messages for invalid credentials.
* **Cart Management:** Adding and verifying specific products like the Backpack.

---

## 📊 CI/CD Pipeline (Jenkins)
Our Jenkins Pipeline (`Jenkinsfile`) automates the entire lifecycle:
1. **Environment Setup:** Automated installation of Node.js & Playwright browsers.
2. **Security & CSP:** Configured to allow full HTML report viewing (fixing Jenkins security policy).
3. **Artifact Archiving:** Direct publishing of HTML reports, Traces, and **6 individual videos** per build.

---

## 🚀 Quick Start
```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)

# Install dependencies
npm install

# Run tests
npx playwright test