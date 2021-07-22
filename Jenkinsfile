pipeline {
    agent any 

    options {
        timeout(time: 5, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "fabz26/backmascotas:${env.BUILD_NUMBER}"
        AWS_IP = """
            ${sh(returnStdout: true, script: "terraform output aws_machine_ip").trim()}
        """
    }
    stages {
        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }
        stage('Run test') {
            steps {
                sh "docker run ${dockerImage.id} npm test"
            }
        }
        stage('Publish') {
            steps {
                script {
                docker.withRegistry("", "DockerHubCredentials") {
                    dockerImage.push()
                    }
                }
            }  
        }
        stage('Validate infraestructure') {
            steps {
                dir("provision") {
                    sh "terraform init"
                    sh "terraform validate"
                }
            }
        }
        stage('Provision Infraestructure') {
            steps {
                dir("provision") {
                    sh "terraform apply -var-file prod.tfvars -auto-approve"
                }
            }
        }
        stage('Run containers') {
            when {
                branch 'master'
            }
            steps {
                sh "ssh -i ~/.ssh/aws_conn_creds.pem ubuntu@${env.AWS_IP} 'docker-compose up -d'"
            }
        }

    }
}