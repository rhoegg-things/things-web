# Infrastructure as Code using CloudFormation

    aws cloudformation create-stack --stack-name things-web-production --template-body file://s3-and-dns.json --parameters ParameterKey=HostName,ParameterValue=www ParameterKey=HostedZone,ParameterValue=things.ryanhoegg.com