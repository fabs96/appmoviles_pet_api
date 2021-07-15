pipeline {
    agent any 
    stages {
        stage('knowing workspace') {
            steps {
                sh 'pwd'
                sh 'ls'
            }
        }
        stage('build') {
            steps {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }
        
    }
}