pipeline {
    environment {
        registry = "puuuudding/puuuudding.com"
        registryCredential = "4f030acb-c26c-4f65-9cca-ee51edeac2fd"
        dockerImage = ""
    }
    agent any
    stages {
        stage("Build image") {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }
        stage("Deploy image") {
            steps {
                script {
                    docker.withRegistry("", registryCredential) {
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage("Clean up") {
            steps {
                sh "docker rmi $registry"
            }
        }
    }
}
