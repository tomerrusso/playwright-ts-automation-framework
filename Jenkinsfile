pipeline {
    agent any

    stages {
        stage('Cleanup') {
            steps {
                // מנקה את ה-Workspace לפני תחילת הריצה
                cleanWs()
            }
        }

        stage('Setup') {
            steps {
                script {
                    // שחרור חסימת דוחות (כדי שלא יהיה דף לבן)
                    System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
                }
                // נכנס לתיקייה של הפרויקט ומתקין הכל
                dir('C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject') {
                    bat 'npm install'
                    bat 'call npx playwright install chromium'
                }
            }
        }

        stage('Execute Tests') {
            steps {
                dir('C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject') {
                    // מריץ טסטים וממשיך גם אם יש כישלון כדי להפיק דוח
                    bat 'call npx playwright test || echo "Tests failed, proceeding to report"'
                }
            }
        }
    }

    post {
        always {
            // העתקת הדוח והצגתו בג'נקינס
            script {
                def reportDir = "C:/CourseAutomation/playwright-automation/tests/HomePractice/SaucedemoProject/playwright-report"
                bat "xcopy /E /I /Y \"${reportDir}\" \"${WORKSPACE}/playwright-report\""
                
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