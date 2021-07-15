pipeline {
    agent any
    stages {
        stage('clean workdir') {
            steps {
                sh 'rm -rf appmoviles_pet_api 2>> /dev/null'
            }
        }
        stage('download repository') {
            steps {
                sh 'git clone https://github.com/fabs96/appmoviles_pet_api.git'
                sh 'cd appmoviles_pet_api'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}