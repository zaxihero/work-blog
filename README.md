# 使用流程
* `fork`到个人仓库
    ```shell

    npm i
    npm i pm2 --g

    npm run start
    ```
* http://localhost:8089

# 部署流程
* `deploy.sh`文件22行改成自己仓库信息
    ```shell
    git push -f git@github.com:<USERNAME>/work-blog.git master:gh-pages

    # 例：本仓库
    git push -f git@github.com:coderHDY/work-blog.git master:gh-pages
    ```
* 执行命令：
    ```shell
    bash deploy.sh
    ```
# 其他插件
* 配置到`docs/.vuepress/config.js`文件夹下`plugins`
* [官方插件](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)
* [其他插件](https://github.com/vuepress/awesome-vuepress/blob/main/v1.md)

# 部署到自己域名
* 买一个域名
* 解析到github的ip下
* `deploy.sh`第11行改成自己域名
    ```shell
    echo 'coderhdy.com' > CNAME
    ```
* 执行命令：
    ```shell
    bash deploy.sh
    ```
# 更改配置项
* 本地模式下，更改配置项，页面不刷新的情况，输入以下命令
    ```shell
    pm2 restart all
    ```
# 查看日志
```shell
pm2 logs

# 查看运行状态
pm2 list
```
# 自定义扩展markdown语法
1. `docs/.vuepress/plugins`文件夹下写组件
2. `enhanceAppFiles.js`注册组件
3. `myPlugin.js`文件注册语法
4. `utils`传入组件默认属性
5. 注册完成，以下方式调用
    ```md
    ::: myComp attr1=val
    content
    :::
    ```