# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

===============================================================================
            Docker/MySQL/Spring Boot/React

1-docker pull mysql
2-docker image ls
3-docker run -d -p 3308:3306 --name=pmsystem-db --env="MYSQL_ROOT_PASSWORD=root" --env="MYSQl_PASSWORD=root" --env="MYSQL_DATABASE=managementsystem" mysql

4-docker container ls
5-  docker exec -it pmsystem-db bash
6-mysql -uroot -proot
7-show databases;

8- mvn clean install -DskipTests (To build Spring boot jar file in the target folder)

9-  docker build -t pmgsystem-image .
10 - docker run --env-file .env pmsystem-image
======= to run the docker container=======
11- docker start pmsystem-db (no need if docker-compose.yml exists)
12- docker run -t --link pmsystem-db:mysql -p 8080:8080 pmgsystem-image(no need if docker-compose.yml exists)
13- docker-compose up --build


=============================================
To dockerize React.js
1- docker build -t pmsystem-ui-docker .
2- docker run -p 5173:5173 pmsystem-ui-docker
