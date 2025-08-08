pipeline{
    agent any;
    stages {
        stage("Code"){
            steps{
                git url: "https://github.com/guptaAman271298/docker-react-app-sample.git", branch: "main"
            }
        }
        stage("Build"){
            steps{
                sh "docker build -t react-sample-app ."
            }
        }
        stage("Test"){
            steps{
                echo "Test cases.."
            }
        }
        stage("Push to Docker Hub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                    )]){
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker image tag react-sample-app ${env.dockerHubUser}/react-sample-app"
                        sh "docker push ${env.dockerHubUser}/react-sample-app:latest"
                    }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker compose up --build -d"
            }
        }
    }
}