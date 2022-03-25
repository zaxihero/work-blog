---
title: 文档使用
date: 2022-01-03
tags:
 - 技巧
---
## 运行项目
:::: steps
::: step
* 先安装依赖
```shell
npm i
```
:::
::: step
* 本地运行
```
npm run docs:dev
```
:::
::: step
* 修改文档后会自动更新
* 如果没有自动更新，就结束进程再启动
```shell
ctl + c

npm run docs:dev
```
:::
::::
## 本地后台更新项目
:::: steps
::: step
* 用了这个以后就可以边写边看效果了
* 安装pm2
```shell
npm i pm2 -g
```
:::
::: step
* pm2启动应用
```shell
pm2 start npm -- run docs:dev
```
:::
::: step
* 保存项目
```shell
pm2 save
```
* 如果自动更新失效，重启项目
```shell
pm2 restart 0
```
:::
::::

## 部署项目
:::: steps
::: step
* 设置部署文件
>deploy.sh
```shell
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'coderhd.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:coderHdy/coderHdy.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:xxxx/xxxx.git master:gh-pages

cd -
```
:::
::: step
* 配置好部署路径以后，每次要更新文件就执行命令行
```shell
bash deploy.sh
```
:::
::::