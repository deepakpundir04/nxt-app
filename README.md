# nxt-app
App hosted on Docker with fronted on Nextjs backend on express and localhosted mongodb

# dependency
- docker version used 28.0.4 hosting nextjs and express app in different image
- mongodb (locally hosted) version 4.4

 # Add Container Ip to mongoDb conf file to allow request from other ips
  file /etc/mongod.conf update the bindIp value with other ip as comma seprated value
  ```
  # network interfaces
  net:
    port: 27017
    bindIp: 127.0.0.1,172.17.0.1

  ```
 # provide mongoDb username, password and DB name in env inside express folder, variable name attached below
  ```
  MONGO_USERNAME=
  MONGO_PASSWORD=
  MONGO_DB=
  ```
# Run docker compose up command in root folder 
app will be accessible at localhost:8080 **OR** 0.0.0.0:8080 **OR** http://192.168.99.100:8080/ 
to increase container, docker-compose.yaml file replicas value can be increased as required
