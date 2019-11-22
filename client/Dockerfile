FROM nginx
COPY ./client/index.html /usr/share/nginx/html
COPY ./client/stylesheet.css /usr/share/nginx/html
COPY ./client/verification.js /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
