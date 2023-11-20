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
        transition: { staggerChildren: 0, delayChildren: 6 }  
        //delayChildren子动画首次执行延迟秒数  
        //
        // staggerChildren每个子动画延迟秒数 
        //https://www.framer.com/motion/transition/###staggerchildren
    },
    hidden: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

```


