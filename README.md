## 开始运行

首先，运行你的开发服务器:

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) .

## 目录讲解

- actions
  这个是服务端请求
- axios
  这个是客户端请求

## framer-motion

```js
//https://www.framer.com/motion/transition/#orchestration 编排
const variantsUl = {
  show: {
    transition: { staggerChildren: 0, delayChildren: 6 },
    //delayChildren子动画首次执行延迟秒数
    //
    // staggerChildren每个子动画延迟秒数
    //https://www.framer.com/motion/transition/###staggerchildren
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
```

```js

server {
    listen       80;
    server_name   106.52.238.51;

   location / {
       #root项目文件的绝对路径
       root /www/offsit;
       proxy_pass http://127.0.0.1:3000/;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
    }
}


server {
    listen       80;
    server_name   106.52.238.51;

   location / {
       #root项目文件的绝对路径
       root /www/offsit;
    }
}

```


```js

listen       80;
    server_name  www.test.wetech.vip;
    charset utf-8;
    access_log off;
    location / {
        root   /data/phpweb/www.test.wetech-rc.com;
        proxy_pass http://127.0.0.1:3000/;
        #index  index.php index.html index.htm;
        #try_files $uri $uri/ /index.html =404;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

pm2 start npm --name "offsit" -- start
```


***source ~/.profile***