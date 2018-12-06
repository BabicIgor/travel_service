# Usage (given build times depend on machine):
#
#    Build SMALL image (no cache; ~20MB, time for build=rebuild = ~360s):
#    docker build --squash="true" -t angular-starter .
#
#    Build FAST (rebuild) image (cache; >280MB, build time ~360s, rebuild time ~80s):
#    docker build -t angular-starter .
#
#    Clean (remove intermidiet images):
#    docker rmi -f $(docker images -f "dangling=true" -q)
#
#    Run image (on localhost:8080):
#    docker run --name angular-starter -p 8080:80 angular-starter &
#
#    Run image as virtual host (read more: https://github.com/jwilder/nginx-proxy):
#    docker run -e VIRTUAL_HOST=angular-starter.your-domain.com --name angular-starter angular-starter &

FROM nginx:1.13.0-alpine

# install console and node
COPY . /tmp/app

RUN cd /tmp/app &&\
    pwd &&\
    ls -la

RUN pwd &&\
    ls -la &&\
    apk add --no-cache bash=4.3.46-r5 &&\
    apk add --no-cache nodejs &&\
    ls -la &&\
    pwd

RUN echo -e 'http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing' > /etc/apk/repositories && \
apk add --no-cache yarn

#ADD yarn.lock /tmp/npm_inst/yarn.lock
#RUN cd /tmp/npm_inst &&\
#    NODE_ENV=development yarn install &&\
#    #npm install --global webpack &&\
#    #npm install node-sass --force &&\
#    mkdir -p /tmp/app &&\
#    mv /tmp/npm_inst/node_modules /tmp/app/

RUN cd /tmp/app &&\
    yarn install &&\
    npm run build:local &&\
    mv ./dist/* /usr/share/nginx/html/

# build and publish application
#ADD . /tmp/app
#RUN ls -la  &&\
#    cd /tmp/app &&\
#    npm run build:local &&\
#    mv ./dist/* /usr/share/nginx/html/

# clean
RUN rm -Rf /tmp/npm_inst  &&\
    rm -Rf /tmp/app &&\
    rm -Rf /root/.npm &&\
    apk del nodejs

# this is for virtual host purposes
EXPOSE 80
