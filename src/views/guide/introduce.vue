<template>
    <i-article>
        <article style="min-height:800px">
            <h1>关于 LKCat Pro</h1>
            <p>LKCat Pro 是一套基于 LKCat UI 组件库开发的后台管理系统。  <a href="/lkcat-pro" target="_blank">Demo</a></p>
            <Anchor title="下载项目" h2></Anchor>
            <ul>
                <li>
                    先安装Git <a href="https://git-scm.com/downloads" target="_blank">下载地址</a>，按默认选项安装即可。
                </li>
                <li>
                    安装完成后，右键找到 <code>Git Bash Here</code>，会弹出一个命令行窗口，输入 <code>git clone https://github.com/270247829/lkcat-pro.git</code> 将项目下载到当前目录
                </li>
            </ul>
            <Anchor title="环境配置" h2></Anchor>
            <ul>
                <li>
                    项目需要node.js环境，<a href="http://nodejs.cn/download/" target="_blank">下载地址</a>，按默认选项安装即可。
                </li>
                <li>
                    由于npm默认服务器是国外的，所以我们需要安装淘宝镜像来加快依赖下载速度 <code>npm install -g cnpm --registry=https://registry.npm.taobao.org</code> 
                </li>
                <li>
                    安装淘宝镜像后，使用 cnpm 代替 npm 来下载依赖包，到项目根目录中，右键<code>Git Bash Here</code> 输入 <code>cnpm install</code>安装项目所需依赖包
                </li>
            </ul>
            <Anchor title="项目启动" h2></Anchor>
            <ul>
                <li>
                    项目根目录中，右键<code>Git Bash Here</code> 输入 <code>cnpm run dev</code> 进入开发模式
                </li>
                <li>
                    开发模式下，修改代码后会直接在页面上重新渲染，不需要重新启动。
                </li>
            </ul>
            <Anchor title="项目部署" h2></Anchor>
            <ul>
                <li>
                    项目根目录中，右键<code>Git Bash Here</code> 输入 <code>cnpm run build</code> 进行项目打包
                </li>
                <li>
                    打包前请先修改build目录下的webpack.prod.config.js文件中的 <code>publicPath</code> 
                </li>
                <li>
                    <code>publicPath</code> 设置为网站所在web服务器的绝对路径 + dist ,网站根目录 则设置为 /dist
                </li>
                <li>
                    打包完成后会在项目根目录下的dist文件夹中生成编译好的文件,整个目录下的文件全部放到web服务器上即可。
                </li>
            </ul>

            
            <Anchor title="相关链接" h2></Anchor>
            <ul>
                <li>
                    <a href="https://github.com/270247829/lkcat-pro" target="_blank">LKCat Pro</a>
                </li>
            </ul>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>