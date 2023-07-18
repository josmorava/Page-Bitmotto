node {
    try {
        def landing

        stage('Notify Mattermost') {
            mattermostSend color:"good", icon:"https://bitmottopublic.ams3.digitaloceanspaces.com/logos/jenkins-logo.png", message:":pray: Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) ${env.JOB_NAME}"
        }
        stage('Clone repository') {  
            checkout scm
        }
        stage('Set Config') {
            sh 'cp next-seo-es.config.js.example next-seo-es.config.js'
            sh 'cp next-seo.config.js.example next-seo.config.js'
            withCredentials([file(credentialsId: 'LANDINGENVPROD', variable: 'envlocal')],) {
                sh 'rm .env.local | true'
                sh "cp $envlocal .env.local"
            }
        }
        stage('Build image') {
            landing = docker.build("registry.digitalocean.com/bitmotto/landing")
        }
        stage('Push image') {
            docker.withRegistry('https://registry.digitalocean.com', 'bitmotto-registry-credentials'){
                landing.push("${env.BUILD_NUMBER}")
                landing.push("latest")
            }
        }
        
        stage('Notify Commit Status') {
            githubPRStatusPublisher buildMessage: message(failureMsg: githubPRMessage('Can\'t set status; build failed.'), successMsg: githubPRMessage('Can\'t set status; build succeeded.')), statusMsg: githubPRMessage('${GITHUB_PR_COND_REF} run ended'), unstableAs: 'FAILURE'
        }
    }
    finally {
        def currentResult = currentBuild.result ?: 'SUCCESS'
        if (currentResult == 'SUCCESS') {
            mattermostSend color:"good", icon:"https://bitmottopublic.ams3.digitaloceanspaces.com/logos/jenkins-logo.png", message:":white_check_mark: Build deployed successfully ${env.JOB_NAME} - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        if (currentResult == 'FAILURE') {
            mattermostSend failOnError:true, color:"good", icon:"https://bitmottopublic.ams3.digitaloceanspaces.com/logos/jenkins-logo.png", message:":no_entry_sign: Build failed  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}