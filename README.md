# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

===============================================================================
            Docker/MySQL/Spring Boot/React

1-docker pull mysql
2-docker image ls
3-docker run -d -p 3308:3306 --name=mysql-docker --env="MYSQL_ROOT_PASSWORD=root" --env="MYSQl_PASSWORD=M.root1847" --env="MYSQL_DATABASE=managementsystem" mysql

4-docker container ls
5- docker exec -it mysql-docker bash
6-mysql -uroot -proot
7-show databases;

8- mvn clean install -DskipTests (To build Spring boot jar file in the target folder)

9-  docker build -t pmgsystem-image .


