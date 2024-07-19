cd Dockerized_ec2_testing
git pull origin main
docker kill test
docker rm test
docker build -t test .
docker run -d --name test -p 8000:8000 test
