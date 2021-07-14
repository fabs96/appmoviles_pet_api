pipeline {
    agent {
        label 'ubuntu-buena'
    }
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
            sh "IP=$(ip a | grep enp0s3 | grep inet | cut -d'/' -f 1 | cut -d't ' -f 2)"
            sh "RUNIP=$(echo $IP | cut -d':' -f 1)"
            sh "echo running on $RUNIP"
        }
    }
}