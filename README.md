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
* **Cross-Browser Testing:** Configured for Chromium, Firefox, and Webkit.
* **Resilient Locators:** Using user-centric locators to reduce flakiness.
* **Automated Evidence:** Full **Trace Viewer** and **Video recordings** captured for every test run.

---

## 🎥 Project Demo
### End-to-End Checkout Flow
See the automation in action! This video shows the complete flow from login to order confirmation:

<video src="./assets/checkout-demo.webm" width="100%" controls></video>

> **Note:** If the video doesn't play, you can find the raw file in the `assets/` folder.

---

## 📊 CI/CD Pipeline (Jenkins)
Our Jenkins Pipeline (`Jenkinsfile`) automates the entire lifecycle:
1. **Environment Setup:** Automated installation of Node.js & Playwright browsers.
2. **Security & CSP:** Configured to allow full HTML report viewing.
3. **Artifact Archiving:** Direct publishing of HTML reports, Traces, and Videos to the Jenkins dashboard.

---

## 🚀 Quick Start
```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)

# Install dependencies
npm install

# Run tests
npx playwright test