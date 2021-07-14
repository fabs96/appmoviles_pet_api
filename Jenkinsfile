pipeline {
    agent any
    tools {
        nodejs '11.1.0'
    }

    options {
        timeout(time:2, unit: 'MINUTES')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }
    }
}