FROM nginx
COPY ./client/index.html /usr/share/nginx/html
COPY ./client/stylesheet.css /usr/share/nginx/html
COPY ./client/verification.js /usr/share/nginx/html
COPY ./client/FileSaver.js /usr/share/nginx/html
COPY ./client/stylesheetLogin.css /usr/share/nginx/html
COPY ./client/login.html /usr/share/nginx/html
COPY ./client/login.js /usr/share/nginx/html
COPY ./client/menu.html /usr/share/nginx/html
COPY ./client/menu.js /usr/share/nginx/html
COPY ./client/upload.html /usr/share/nginx/html
COPY ./client/stylesheetMenu.css /usr/share/nginx/html
COPY ./client/upload.js /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
