# 🚀 Saucedemo Automation Framework
> **An End-to-End Test Suite powered by Playwright & Jenkins CI/CD**

[View Project Report](#) | [Watch Demo Video](#) | [Contact Developer](#)

---

## 🎯 The Mission
This project provides a robust, scalable automation solution for the **Saucedemo** e-commerce platform. It demonstrates professional testing standards including the **Page Object Model (POM)** and **CI/CD integration**.

## 🛠️ Tech Stack
| Technology | Role |
| :--- | :--- |
| **Playwright** | Browser Automation & Test Runner |
| **TypeScript** | Strongly Typed Logic |
| **Jenkins** | CI/CD Pipeline & Scheduling |
| **Allure/HTML** | Visual Reporting & Analytics |

## ✨ Key Architectural Highlights
* **Page Object Model (POM):** Decoupled test logic from UI selectors for 100% maintainability.
* **Cross-Browser Testing:** Configured for Chromium, Firefox, and Webkit.
* **Resilient Locators:** Using user-centric locators to reduce flakiness.
* **Automated Tracing:** Full traces and videos captured for every failed test.

---

## 📊 CI/CD Pipeline (Jenkins)
Our Jenkins Pipeline (`Jenkinsfile`) automates the entire lifecycle:
1.  **Environment Setup:** Node.js & Playwright dependencies.
2.  **Test Execution:** Parallel runs across multiple environments.
3.  **Artifact Archiving:** Direct publishing of HTML reports to the Jenkins dashboard.

> **Visual Evidence:**
> ![Jenkins Pipeline](https://via.placeholder.com/800x200?text=Insert+Screenshot+of+your+Jenkins+Stages+Here)

---

## 🚀 Quick Start
```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)

# Install dependencies
npm install

# Run tests
npx playwright test
