# 个人博客

基于[hexo3](https://hexo.io/) + [github pages](https://pages.github.com/),对了，原始主题是采用[concise](https://github.com/huangjunhui/concise),做了一些修改...

之后准备将博客文章也放到issues中，方便讨论搜索等交互功能。

---

## **以下是具体的搭建的方法：**

## 1. hexo的安装
hexo是用node.js开发的，所以我们先要安装node.js环境，去[node.js](https://nodejs.org/en/)官网，点击INSTALL就可以根据你的系统版本下载相应的安装包。  

安装完成后，在命令行运行：
```bash
  npm install -g hexo
```
** npm安装方式中 -g 的意思是全局安装。**
---

## 2. 初体验~\\(≧▽≦)/~
1. 找到一个合适的位置，创建我们的项目文件夹：
    * 一般的用户：自己图形界面新建了一个,然后点进去
    * 命令行用户：`mkdir <folder> && cd <folder>`
    * hexo的用户：`hexo init <folder> && cd <folder>`

2. 接着运行`npm install`npm就会自动根据package.json中的配置自动进行安装

3. 运行
```bash
    hexo g(enerate)
    hexo s(erver)
```
** 如果这步报错一般是因为没装hexo-server，运行一下命令即可： **
```bash
    npm install --save  hexo-server
```

4. 最后打开浏览器输入`localhost:4000`就可以看到页面啦～=￣ω￣=～

## 3. 换主题（theme）
然而只是使用默认的主题（theme）怎么会有逼格→_→，果断要整一个吊炸天的主题呀~，我初步选了[concise](https://github.com/huangjunhui/concise)。
```bash
    git clone https://github.com/huangjunhui/concise themes/concise
```
修改 _config.yml 将theme改为concise

## 4. 部署到github前需要配置 _config.yml 文件
### 4.1. 安装 hexo-deployer-git
```bash
    npm install hexo-deployer-git --save
```

### 4.2. 修改 _config.yml 文件
[官方文档](https://github.com/hexojs/hexo-deployer-git)中是这么介绍的
```bash
    # You can use this:
    deploy:
      type: git
      repo: <repository url>
      branch: [branch]
      message: [message]

    # or this:
    deploy:
      type: git
      message: [message]
      repo: 
        github: <repository url>,[branch]
        gitcafe: <repository url>,[branch]
```
```
repo: Repository URL
branch: Git branch to deploy the static site to
message: Commit message. The default commit message is Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}.
```











