pipeline {
    agent any
    stages {
        stage('clean workdir') {
            sh 'rm -rf appmoviles_pet_api 2>> /dev/null'
        }
        stage('download repository') {
            sh 'git clone https://github.com/fabs96/appmoviles_pet_api.git'
            sh 'cd appmoviles_pet_api'
        }
        stage('Clean ejecution') {
            sh 'docker-compose down 2>>/dev/null'
        }
        stage('Build') {
            sh 'docker-compose up -d'
        }
    }
}