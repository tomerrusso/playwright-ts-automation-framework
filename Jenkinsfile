pipeline {
    agent any

    stages {
        stage('Fix Security Policy') {
            steps {
                script {
                    // פותר את בעיית ה"דף הלבן" בג'נקינס על ידי שחרור חסימת אבטחה של HTML/CSS
                    System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                    echo "Security policy updated to allow HTML reports."
                }
            }
        }

        stage('Cleanup') {
            steps {
                // מנקה את התיקייה לפני שמתחילים
                cleanWs()
            }
        }

        stage('Setup Environment') {
            steps {
                // ניווט לתיקיית הפרויקט והתקנת תלויות
                dir('C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject') {
                    bat 'npm install'
                    bat 'call npx playwright install chromium'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject') {
                    // הרצת הטסטים. ה-|| echo מבטיח שהתהליך ימשיך גם אם טסט נכשל (כדי שיופק דוח)
                    bat 'call npx playwright test || echo "Tests completed with failures, generating report..."'
                }
            }
        }
    }

    post {
        always {
            script {
                // הגדרת נתיבים
                def sourceReport = "C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject/playwright-report"
                def destReport = "${WORKSPACE}/playwright-report"

                // העתקת כל תיקיית הדוח (כולל סרטונים ותמונות) לסביבת העבודה של ג'נקינס
                bat "xcopy /E /I /Y \"${sourceReport}\" \"${destReport}\""
                
                // פרסום הדוח בממשק של ג'נקינס
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
}