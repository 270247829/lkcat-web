<style scoped>
    .wrapper-header-nav .lkui-menu-item i{
        margin-right: 6px;
    }
    .wrapper-header .lkui-menu{
        z-index: 901;
        box-shadow: 0 3px 1px rgba(0,0,0,.08);
    }

    .lkui-menu-light.lkui-menu-horizontal .lkui-menu-item, .lkui-menu-light.lkui-menu-horizontal .lkui-menu-submenu {
        height: inherit;
        line-height: inherit;
        border-top: 2px solid transparent;
        border-bottom: none;
        color: #495060;
    }
    .lkui-menu-light.lkui-menu-horizontal .lkui-menu-item-active, .lkui-menu-light.lkui-menu-horizontal .lkui-menu-item:hover, .lkui-menu-light.lkui-menu-horizontal .lkui-menu-submenu-active, .lkui-menu-light.lkui-menu-horizontal .lkui-menu-submenu:hover {
        color: #2d8cf0;
        border-top: 2px solid #2d8cf0;
        border-bottom: none;
    }
    .wrapper-header .lkui-menu-horizontal {
        height: 70px;
        line-height: 70px;
    }
    .wrapper-header-nav-list {
        height: inherit;
        float: left;
        margin-left: 38px;
    }
    .wrapper-header-nav-search {
        float: right;
        margin-left: 100px;
    }
    .lkcat{
        width: 90px;
        height: 28px;
        margin-bottom: 10px;
        margin-left: 15px;
    }
    .api li{
        padding: 0 30px;
        margin: 0;
        line-height: 34px;
        cursor: pointer;
        color: #606266;
        font-size: 14px;
        list-style: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ebebeb;
    }
    .api li:hover{
        background-color: #f5f7fa;
    }
    .searchLink{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-right: 20px;
        background-color: #e4e7ed;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-sizing: border-box;
        text-align: right;
        
    }
    .searchLink img {
        display: inline-block;
        height: 17px;
        margin-top: 10px;
    }
</style>
<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <a href="/" class="wrapper-header-nav-logo router-link-active">
                <img :src="logoPath">
                <img :src="lkcatPath" class="lkcat">
            </a>
            <div class="wrapper-header-nav-search">
                <!-- <lk-select
                    ref="select"
                    v-model="search"
                    filterable
                    :placeholder="searchText"
                    :not-found-text="notFoundText"
                    @on-change="handleSearch">
                    <lk-option v-for="item in navigateList" :key="item.path" :value="item.path">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.title.split(' ')[0] }}</template>
                    </lk-option>
                </lk-select> -->
                <Icon type="ios-search" />
                <Poptip width="300" v-model="visible" @on-popper-show="showReulst">
                    <Input @on-keyup="search" v-model="content" @on-focus="showReulst" placeholder="搜索组件">
                    </Input>
                    <div class="api" slot="content">
                        <ul>
                            <template v-if="resultList.length >0">
                            <li  v-for="item in resultList" @click="jump(item)">
                                <p v-html="item._highlightResult.meta.title.value"/>
                                <p v-html="substr(item._highlightResult.desc.value)"/>
                            </li>
                            <li style="height: 26px;">
                                <a class="searchLink" target="_blank" href="https://www.algolia.com/docsearch">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTMwIDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5zZWFyY2gtYnktYWxnb2xpYTwvdGl0bGU+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSItMzYuODY4JSIgeTE9IjEzNC45MzYlIiB4Mj0iMTI5LjQzMiUiIHkyPSItMjcuNyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBBRUZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzMzNjlFNyIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNTkuMzk5LjAyMmgxMy4yOTlhMi4zNzIgMi4zNzIgMCAwIDEgMi4zNzcgMi4zNjRWMTUuNjJhMi4zNzIgMi4zNzIgMCAwIDEtMi4zNzcgMi4zNjRINTkuMzk5YTIuMzcyIDIuMzcyIDAgMCAxLTIuMzc3LTIuMzY0VjIuMzgxQTIuMzY4IDIuMzY4IDAgMCAxIDU5LjM5OS4wMjJ6IiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTY2LjI1NyA0LjU2Yy0yLjgxNSAwLTUuMSAyLjI3Mi01LjEgNS4wNzggMCAyLjgwNiAyLjI4NCA1LjA3MiA1LjEgNS4wNzIgMi44MTUgMCA1LjEtMi4yNzIgNS4xLTUuMDc4IDAtMi44MDYtMi4yNzktNS4wNzItNS4xLTUuMDcyem0wIDguNjUyYy0xLjk4MyAwLTMuNTkzLTEuNjAyLTMuNTkzLTMuNTc0IDAtMS45NzIgMS42MS0zLjU3NCAzLjU5My0zLjU3NCAxLjk4MyAwIDMuNTkzIDEuNjAyIDMuNTkzIDMuNTc0YTMuNTgyIDMuNTgyIDAgMCAxLTMuNTkzIDMuNTc0em0wLTYuNDE4djIuNjY0YzAgLjA3Ni4wODIuMTMxLjE1My4wOTNsMi4zNzctMS4yMjZjLjA1NS0uMDI3LjA3MS0uMDkzLjA0NC0uMTQ3YTIuOTYgMi45NiAwIDAgMC0yLjQ2NS0xLjQ4N2MtLjA1NSAwLS4xMS4wNDQtLjExLjEwNGwuMDAxLS4wMDF6bS0zLjMzLTEuOTU2bC0uMzEyLS4zMTFhLjc4My43ODMgMCAwIDAtMS4xMDYgMGwtLjM3Mi4zN2EuNzczLjc3MyAwIDAgMCAwIDEuMTAxbC4zMDcuMzA1Yy4wNDkuMDQ5LjEyMS4wMzguMTY0LS4wMTEuMTgxLS4yNDUuMzc4LS40NzkuNTk3LS42OTcuMjI1LS4yMjMuNDU1LS40Mi43MDctLjU5OS4wNTUtLjAzMy4wNi0uMTA5LjAxNi0uMTU4aC0uMDAxem01LjAwMS0uODA2di0uNjE2YS43ODEuNzgxIDAgMCAwLS43ODMtLjc3OWgtMS44MjRhLjc4Ljc4IDAgMCAwLS43ODMuNzc5di42MzJjMCAuMDcxLjA2Ni4xMi4xMzcuMTA0YTUuNzM2IDUuNzM2IDAgMCAxIDEuNTg4LS4yMjNjLjUyIDAgMS4wMzUuMDcxIDEuNTM0LjIwN2EuMTA2LjEwNiAwIDAgMCAuMTMxLS4xMDR6IiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTEwMi4xNjIgMTMuNzYyYzAgMS40NTUtLjM3MiAyLjUxNy0xLjEyMyAzLjE5My0uNzUuNjc2LTEuODk1IDEuMDEzLTMuNDQgMS4wMTMtLjU2NCAwLTEuNzM2LS4xMDktMi42NzMtLjMxNmwuMzQ1LTEuNjg5Yy43ODMuMTYzIDEuODE5LjIwNyAyLjM2MS4yMDcuODYgMCAxLjQ3My0uMTc0IDEuODQtLjUyMy4zNjctLjM0OS41NDgtLjg2Ni41NDgtMS41NTN2LS4zNDlhNi4zNzQgNi4zNzQgMCAwIDEtLjgzOC4zMTYgNC4xNTEgNC4xNTEgMCAwIDEtMS4xOTQuMTU4IDQuNTE1IDQuNTE1IDAgMCAxLTEuNjE2LS4yNzggMy4zODUgMy4zODUgMCAwIDEtMS4yNTQtLjgxNyAzLjc0NCAzLjc0NCAwIDAgMS0uODExLTEuMzUxYy0uMTkyLS41MzktLjI5LTEuNTA0LS4yOS0yLjIxMiAwLS42NjUuMTA0LTEuNDk4LjMwNy0yLjA1NGEzLjkyNSAzLjkyNSAwIDAgMSAuOTA0LTEuNDMzIDQuMTI0IDQuMTI0IDAgMCAxIDEuNDQxLS45MjYgNS4zMSA1LjMxIDAgMCAxIDEuOTQ1LS4zNjVjLjY5NiAwIDEuMzM3LjA4NyAxLjk2MS4xOTFhMTUuODYgMTUuODYgMCAwIDEgMS41ODguMzMydjguNDU2aC0uMDAxem0tNS45NTQtNC4yMDZjMCAuODkzLjE5NyAxLjg4NS41OTIgMi4yOTkuMzk0LjQxNC45MDQuNjIxIDEuNTI4LjYyMS4zNCAwIC42NjMtLjA0OS45NjQtLjE0MmEyLjc1IDIuNzUgMCAwIDAgLjczNC0uMzMydi01LjI5YTguNTMxIDguNTMxIDAgMCAwLTEuNDEzLS4xOGMtLjc3OC0uMDIyLTEuMzY5LjI5NC0xLjc4Ni44MDEtLjQxMS41MDctLjYxOSAxLjM5NS0uNjE5IDIuMjIzem0xNi4xMiAwYzAgLjcxOS0uMTA0IDEuMjY0LS4zMTggMS44NThhNC4zODkgNC4zODkgMCAwIDEtLjkwNCAxLjUyYy0uMzg5LjQyLS44NTQuNzQ2LTEuNDAyLjk3NS0uNTQ4LjIyOS0xLjM5MS4zNi0xLjgxMy4zNi0uNDIyLS4wMDUtMS4yNi0uMTI1LTEuODAyLS4zNmE0LjA4OCA0LjA4OCAwIDAgMS0xLjM5Ny0uOTc1IDQuNDg2IDQuNDg2IDAgMCAxLS45MDktMS41MiA1LjAzNyA1LjAzNyAwIDAgMS0uMzI5LTEuODU4YzAtLjcxOS4wOTktMS40MTEuMzE4LTEuOTk5LjIxOS0uNTg4LjUyNi0xLjA5LjkyLTEuNTA5LjM5NC0uNDIuODY1LS43NDEgMS40MDItLjk3YTQuNTQ3IDQuNTQ3IDAgMCAxIDEuNzg2LS4zMzggNC42OSA0LjY5IDAgMCAxIDEuNzkxLjMzOGMuNTQ4LjIyOSAxLjAxOS41NSAxLjQwMi45Ny4zODkuNDIuNjkuOTIxLjkwOSAxLjUwOS4yMy41ODguMzQ1IDEuMjguMzQ1IDEuOTk5aC4wMDF6bS0yLjE5MS4wMDVjMC0uOTIxLS4yMDMtMS42ODktLjU5Ny0yLjIyMy0uMzk0LS41MzktLjk0OC0uODA2LTEuNjU0LS44MDYtLjcwNyAwLTEuMjYuMjY3LTEuNjU0LjgwNi0uMzk0LjUzOS0uNTg2IDEuMzAyLS41ODYgMi4yMjMgMCAuOTMyLjE5NyAxLjU1OC41OTIgMi4wOTguMzk0LjU0NS45NDguODEyIDEuNjU0LjgxMi43MDcgMCAxLjI2LS4yNzIgMS42NTQtLjgxMi4zOTQtLjU0NS41OTItMS4xNjYuNTkyLTIuMDk4aC0uMDAxem02Ljk2MiA0LjcwN2MtMy41MTEuMDE2LTMuNTExLTIuODIyLTMuNTExLTMuMjc0TDExMy41ODMuOTI2bDIuMTQyLS4zMzh2MTAuMDAzYzAgLjI1NiAwIDEuODggMS4zNzUgMS44ODV2MS43OTJoLS4wMDF6bTMuNzc0IDBoLTIuMTUzVjUuMDcybDIuMTUzLS4zMzh2OS41MzR6bS0xLjA3OS0xMC41NDJjLjcxOCAwIDEuMzA0LS41NzggMS4zMDQtMS4yOTEgMC0uNzE0LS41ODEtMS4yOTEtMS4zMDQtMS4yOTEtLjcyMyAwLTEuMzA0LjU3OC0xLjMwNCAxLjI5MSAwIC43MTQuNTg2IDEuMjkxIDEuMzA0IDEuMjkxem02LjQzMSAxLjAxM2MuNzA3IDAgMS4zMDQuMDg3IDEuNzg2LjI2Mi40ODIuMTc0Ljg3MS40MiAxLjE1Ni43My4yODUuMzExLjQ4OC43MzUuNjA4IDEuMTgyLjEyNi40NDcuMTg2LjkzNy4xODYgMS40NzZ2NS40ODFhMjUuMjQgMjUuMjQgMCAwIDEtMS40OTUuMjUxYy0uNjY4LjA5OC0xLjQxOS4xNDctMi4yNTEuMTQ3YTYuODI5IDYuODI5IDAgMCAxLTEuNTE3LS4xNTggMy4yMTMgMy4yMTMgMCAwIDEtMS4xNzgtLjUwNyAyLjQ1NSAyLjQ1NSAwIDAgMS0uNzYxLS45MDRjLS4xODEtLjM3LS4yNzQtLjg5My0uMjc0LTEuNDM4IDAtLjUyMy4xMDQtLjg1NS4zMDctMS4yMTUuMjA4LS4zNi40ODctLjY1NC44MzgtLjg4M2EzLjYwOSAzLjYwOSAwIDAgMSAxLjIyNy0uNDkgNy4wNzMgNy4wNzMgMCAwIDEgMi4yMDItLjEwM2MuMjYzLjAyNy41MzcuMDc2LjgzMy4xNDd2LS4zNDljMC0uMjQ1LS4wMjctLjQ3OS0uMDg4LS42OTdhMS40ODYgMS40ODYgMCAwIDAtLjMwNy0uNTgzYy0uMTQ4LS4xNjktLjM0LS4zLS41ODEtLjM5MmEyLjUzNiAyLjUzNiAwIDAgMC0uOTE1LS4xNjNjLS40OTMgMC0uOTQyLjA2LTEuMzUzLjEzMS0uNDExLjA3MS0uNzUuMTUzLTEuMDA4LjI0NWwtLjI1Ny0xLjc0OWMuMjY4LS4wOTMuNjY4LS4xODUgMS4xODMtLjI3OGE5LjMzNSA5LjMzNSAwIDAgMSAxLjY2LS4xNDJsLS4wMDEtLjAwMXptLjE4MSA3LjczMWMuNjU3IDAgMS4xNDUtLjAzOCAxLjQ4NC0uMTA0di0yLjE2OGE1LjA5NyA1LjA5NyAwIDAgMC0xLjk3OC0uMTA0Yy0uMjQxLjAzMy0uNDYuMDk4LS42NTIuMTkxYTEuMTY3IDEuMTY3IDAgMCAwLS40NjYuMzkyYy0uMTIxLjE2OS0uMTc1LjI2Ny0uMTc1LjUyMyAwIC41MDEuMTc1Ljc5LjQ5My45ODEuMzIzLjE5Ni43NS4yODkgMS4yOTMuMjg5aC4wMDF6TTg0LjEwOSA0Ljc5NGMuNzA3IDAgMS4zMDQuMDg3IDEuNzg2LjI2Mi40ODIuMTc0Ljg3MS40MiAxLjE1Ni43My4yOS4zMTYuNDg3LjczNS42MDggMS4xODIuMTI2LjQ0Ny4xODYuOTM3LjE4NiAxLjQ3NnY1LjQ4MWEyNS4yNCAyNS4yNCAwIDAgMS0xLjQ5NS4yNTFjLS42NjguMDk4LTEuNDE5LjE0Ny0yLjI1MS4xNDdhNi44MjkgNi44MjkgMCAwIDEtMS41MTctLjE1OCAzLjIxMyAzLjIxMyAwIDAgMS0xLjE3OC0uNTA3IDIuNDU1IDIuNDU1IDAgMCAxLS43NjEtLjkwNGMtLjE4MS0uMzctLjI3NC0uODkzLS4yNzQtMS40MzggMC0uNTIzLjEwNC0uODU1LjMwNy0xLjIxNS4yMDgtLjM2LjQ4Ny0uNjU0LjgzOC0uODgzYTMuNjA5IDMuNjA5IDAgMCAxIDEuMjI3LS40OSA3LjA3MyA3LjA3MyAwIDAgMSAyLjIwMi0uMTAzYy4yNTcuMDI3LjUzNy4wNzYuODMzLjE0N3YtLjM0OWMwLS4yNDUtLjAyNy0uNDc5LS4wODgtLjY5N2ExLjQ4NiAxLjQ4NiAwIDAgMC0uMzA3LS41ODNjLS4xNDgtLjE2OS0uMzQtLjMtLjU4MS0uMzkyYTIuNTM2IDIuNTM2IDAgMCAwLS45MTUtLjE2M2MtLjQ5MyAwLS45NDIuMDYtMS4zNTMuMTMxLS40MTEuMDcxLS43NS4xNTMtMS4wMDguMjQ1bC0uMjU3LTEuNzQ5Yy4yNjgtLjA5My42NjgtLjE4NSAxLjE4My0uMjc4YTguODkgOC44OSAwIDAgMSAxLjY2LS4xNDJsLS4wMDEtLjAwMXptLjE4NiA3LjczNmMuNjU3IDAgMS4xNDUtLjAzOCAxLjQ4NC0uMTA0di0yLjE2OGE1LjA5NyA1LjA5NyAwIDAgMC0xLjk3OC0uMTA0Yy0uMjQxLjAzMy0uNDYuMDk4LS42NTIuMTkxYTEuMTY3IDEuMTY3IDAgMCAwLS40NjYuMzkyYy0uMTIxLjE2OS0uMTc1LjI2Ny0uMTc1LjUyMyAwIC41MDEuMTc1Ljc5LjQ5My45ODEuMzE4LjE5MS43NS4yODkgMS4yOTMuMjg5aC4wMDF6bTguNjgyIDEuNzM4Yy0zLjUxMS4wMTYtMy41MTEtMi44MjItMy41MTEtMy4yNzRMODkuNDYxLjkyNmwyLjE0Mi0uMzM4djEwLjAwM2MwIC4yNTYgMCAxLjg4IDEuMzc1IDEuODg1djEuNzkyaC0uMDAxeiIgZmlsbD0iIzE4MjM1OSIvPjxwYXRoIGQ9Ik01LjAyNyAxMS4wMjVjMCAuNjk4LS4yNTIgMS4yNDYtLjc1NyAxLjY0NC0uNTA1LjM5Ny0xLjIwMS41OTYtMi4wODkuNTk2LS44ODggMC0xLjYxNS0uMTM4LTIuMTgxLS40MTR2LTEuMjE0Yy4zNTguMTY4LjczOS4zMDEgMS4xNDEuMzk3LjQwMy4wOTcuNzc4LjE0NSAxLjEyNS4xNDUuNTA4IDAgLjg4NC0uMDk3IDEuMTI1LS4yOWEuOTQ1Ljk0NSAwIDAgMCAuMzYzLS43NzkuOTc4Ljk3OCAwIDAgMC0uMzMzLS43NDdjLS4yMjItLjIwNC0uNjgtLjQ0Ni0xLjM3NS0uNzI1LS43MTYtLjI5LTEuMjIxLS42MjEtMS41MTUtLjk5NC0uMjk0LS4zNzItLjQ0LS44Mi0uNDQtMS4zNDMgMC0uNjU1LjIzMy0xLjE3MS42OTgtMS41NDcuNDY2LS4zNzYgMS4wOS0uNTY0IDEuODc1LS41NjQuNzUyIDAgMS41LjE2NSAyLjI0NS40OTRsLS40MDggMS4wNDdjLS42OTgtLjI5NC0xLjMyMS0uNDQtMS44NjktLjQ0LS40MTUgMC0uNzMuMDktLjk0NS4yNzFhLjg5Ljg5IDAgMCAwLS4zMjIuNzE3YzAgLjIwNC4wNDMuMzc5LjEyOS41MjQuMDg2LjE0NS4yMjcuMjgyLjQyNC40MTEuMTk3LjEyOS41NTEuMjk5IDEuMDYzLjUxLjU3Ny4yNC45OTkuNDY0IDEuMjY4LjY3MS4yNjkuMjA4LjQ2Ni40NDIuNTkxLjcwNC4xMjUuMjYxLjE4OC41NjkuMTg4LjkyNGwtLjAwMS4wMDJ6bTMuOTggMi4yNGMtLjkyNCAwLTEuNjQ2LS4yNjktMi4xNjctLjgwOC0uNTIxLS41MzktLjc4Mi0xLjI4MS0uNzgyLTIuMjI2IDAtLjk3LjI0Mi0xLjczMy43MjUtMi4yODguNDgzLS41NTUgMS4xNDgtLjgzMyAxLjk5My0uODMzLjc4NCAwIDEuNDA0LjIzOCAxLjg1OC43MTQuNDU1LjQ3Ni42ODIgMS4xMzIuNjgyIDEuOTY2di42ODJINy4zNTdjLjAxOC41NzcuMTc0IDEuMDIuNDY3IDEuMzI5LjI5NC4zMS43MDcuNDY1IDEuMjQxLjQ2NS4zNTEgMCAuNjc4LS4wMzMuOTgtLjA5OWE1LjEgNS4xIDAgMCAwIC45NzUtLjMzdjEuMDI2YTMuODY1IDMuODY1IDAgMCAxLS45MzUuMzEyIDUuNzIzIDUuNzIzIDAgMCAxLTEuMDguMDkxbC4wMDItLjAwMXptLS4yMzEtNS4xOTljLS40MDEgMC0uNzIyLjEyNy0uOTY0LjM4MXMtLjM4Ni42MjUtLjQzMiAxLjExMmgyLjY5NmMtLjAwNy0uNDkxLS4xMjUtLjg2Mi0uMzU0LTEuMTE1LS4yMjktLjI1Mi0uNTQ0LS4zNzktLjk0NS0uMzc5bC0uMDAxLjAwMXptNy42OTIgNS4wOTJsLS4yNTItLjgyN2gtLjA0M2MtLjI4Ni4zNjItLjU3NS42MDgtLjg2NS43MzktLjI5LjEzMS0uNjYyLjE5Ni0xLjExNy4xOTYtLjU4NCAwLTEuMDM5LS4xNTgtMS4zNjctLjQ3My0uMzI4LS4zMTUtLjQ5MS0uNzYxLS40OTEtMS4zMzcgMC0uNjEyLjIyNy0xLjA3NC42ODItMS4zODYuNDU1LS4zMTIgMS4xNDgtLjQ4MiAyLjA3OS0uNTFsMS4wMjYtLjAzMnYtLjMxN2MwLS4zOC0uMDg5LS42NjMtLjI2Ni0uODUxLS4xNzctLjE4OC0uNDUyLS4yODItLjgyNC0uMjgyLS4zMDQgMC0uNTk2LjA0NS0uODc2LjEzNGE2LjY4IDYuNjggMCAwIDAtLjgwNi4zMTdsLS40MDgtLjkwMmE0LjQxNCA0LjQxNCAwIDAgMSAxLjA1OC0uMzg0IDQuODU2IDQuODU2IDAgMCAxIDEuMDg1LS4xMzJjLjc1NiAwIDEuMzI2LjE2NSAxLjcxMS40OTQuMzg1LjMyOS41NzcuODQ3LjU3NyAxLjU1MnY0LjAwMmgtLjkwMmwtLjAwMS0uMDAxem0tMS44OC0uODU5Yy40NTggMCAuODI2LS4xMjggMS4xMDQtLjM4NC4yNzgtLjI1Ni40MTYtLjYxNS40MTYtMS4wNzd2LS41MTZsLS43NjMuMDMyYy0uNTk0LjAyMS0xLjAyNy4xMjEtMS4yOTcuMjk4cy0uNDA2LjQ0OC0uNDA2LjgxNGMwIC4yNjUuMDc5LjQ3LjIzNi42MTUuMTU4LjE0NS4zOTQuMjE4LjcwOS4yMThoLjAwMXptNy41NTctNS4xODljLjI1NCAwIC40NjQuMDE4LjYyOC4wNTRsLS4xMjQgMS4xNzZhMi4zODMgMi4zODMgMCAwIDAtLjU1OS0uMDY0Yy0uNTA1IDAtLjkxNC4xNjUtMS4yMjcuNDk0LS4zMTMuMzI5LS40Ny43NTctLjQ3IDEuMjg0djMuMTA1aC0xLjI2MlY3LjIxOGguOTg4bC4xNjcgMS4wNDdoLjA2NGMuMTk3LS4zNTQuNDU0LS42MzYuNzcxLS44NDNhMS44MyAxLjgzIDAgMCAxIDEuMDIzLS4zMTJoLjAwMXptNC4xMjUgNi4xNTVjLS44OTkgMC0xLjU4Mi0uMjYyLTIuMDQ5LS43ODctLjQ2Ny0uNTI1LS43MDEtMS4yNzctLjcwMS0yLjI1OSAwLS45OTkuMjQ0LTEuNzY3LjczMy0yLjMwNC40ODktLjUzNyAxLjE5NS0uODA2IDIuMTE5LS44MDYuNjI3IDAgMS4xOTEuMTE2IDEuNjkyLjM0OWwtLjM4MSAxLjAxNWMtLjUzNC0uMjA4LS45NzQtLjMxMi0xLjMyMS0uMzEyLTEuMDI4IDAtMS41NDIuNjgyLTEuNTQyIDIuMDQ2IDAgLjY2Ni4xMjggMS4xNjYuMzg0IDEuNTAxLjI1Ni4zMzUuNjMxLjUwMiAxLjEyNS41MDJhMy4yMyAzLjIzIDAgMCAwIDEuNTk1LS40MTl2MS4xMDFhMi41MyAyLjUzIDAgMCAxLS43MjIuMjg1IDQuMzU2IDQuMzU2IDAgMCAxLS45MzIuMDg2di4wMDJ6bTguMjc3LS4xMDdoLTEuMjY4VjkuNTA2YzAtLjQ1OC0uMDkyLS44LS4yNzctMS4wMjYtLjE4NC0uMjI2LS40NzctLjMzOC0uODc4LS4zMzgtLjUzIDAtLjkxOS4xNTgtMS4xNjguNDc1LS4yNDkuMzE3LS4zNzMuODQ4LS4zNzMgMS41OTN2Mi45NDloLTEuMjYyVjQuODAxaDEuMjYydjIuMTIyYzAgLjM0LS4wMjEuNzA0LS4wNjQgMS4wOWguMDgxYTEuNzYgMS43NiAwIDAgMSAuNzE3LS42NjZjLjMwNi0uMTU4LjY2My0uMjM2IDEuMDcyLS4yMzYgMS40MzkgMCAyLjE1OS43MjUgMi4xNTkgMi4xNzV2My44NzNsLS4wMDEtLjAwMXptNy42NDktNi4wNDhjLjc0MSAwIDEuMzE5LjI2OSAxLjczMi44MDYuNDE0LjUzNy42MiAxLjI5MS42MiAyLjI2MSAwIC45NzQtLjIwOSAxLjczMi0uNjI4IDIuMjc1LS40MTkuNTQyLTEuMDAxLjgxNC0xLjc0Ni44MTQtLjc1MiAwLTEuMzM2LS4yNy0xLjc1MS0uODExaC0uMDg2bC0uMjMxLjcwNGgtLjk0NVY0LjgwMWgxLjI2MnYxLjk4N2wtLjAyMS42NTUtLjAzMi41NTNoLjA1NGMuNDAxLS41OTEuOTkyLS44ODYgMS43NzItLjg4NnptLS4zMjggMS4wMzFjLS41MDggMC0uODc1LjE0OS0xLjA5OC40NDgtLjIyNC4yOTktLjMzOS43OTktLjM0NiAxLjUwMXYuMDg2YzAgLjcyMy4xMTUgMS4yNDcuMzQ0IDEuNTcxLjIyOS4zMjQuNjAzLjQ4NiAxLjEyMy40ODYuNDQ4IDAgLjc4Ny0uMTc3IDEuMDE4LS41MzIuMjMxLS4zNTQuMzQ2LS44NjcuMzQ2LTEuNTM2IDAtMS4zNS0uNDYyLTIuMDI1LTEuMzg2LTIuMDI1bC0uMDAxLjAwMXptMy4yNDQtLjkyNGgxLjM3NWwxLjIwOSAzLjM2OGMuMTgzLjQ4LjMwNC45MzEuMzY1IDEuMzU0aC4wNDNjLjAzMi0uMTk3LjA5MS0uNDM2LjE3Ny0uNzE3LjA4Ni0uMjgxLjU0MS0xLjYxNiAxLjM2NC00LjAwNGgxLjM2NGwtMi41NDEgNi43M2MtLjQ2MiAxLjIzNS0xLjIzMiAxLjg1My0yLjMxIDEuODUzLS4yNzkgMC0uNTUxLS4wMy0uODE2LS4wOTF2LS45OTljLjE5LjA0My40MDYuMDY0LjY1LjA2NC42MDkgMCAxLjAzNy0uMzUzIDEuMjg0LTEuMDU4bC4yMi0uNTU5LTIuMzg1LTUuOTQxaC4wMDF6IiBmaWxsPSIjMUQzNjU3Ii8+PC9nPjwvc3ZnPg==" alt="algolia-logo" class="algolia-search-logo">
                                </a>
                            </li>
                            </template>
                            <template v-else>
                            <li>
                                <p class="algolia-search-empty">无匹配结果</p>
                            </li>
                            </template>
                        </ul>
                    </div>
                </Poptip>
                <ButtonGroup>
                    <Button type="ghost" size="small" icon="social-github" @click="handleGoToGitHub"></Button>
                    <!-- <Button type="ghost" size="small" @click="handleChangeLang" >
                        <template v-if="lang === 'zh-CN'">EN</template>
                        <template v-else>中文</template>
                    </Button> -->
                </ButtonGroup>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide">
                    {{ $t('index.guide') }}
                </Menu-item>
                <Menu-item name="component">
                    {{ $t('index.component') }}
                </Menu-item>
                <Menu-item name="source">
                    资源
                </Menu-item>
            </div>
        </div>
    </Menu>
</template>
<script>
    import navigate from '../config/navigate';
    import Config from '../config/config';
    import bus from './bus';
    import logo from '../images/logo.svg';
    import lkcat from '../images/lkcat.png';
    import algoliasearch from 'algoliasearch'

   
    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                navigateList: [],
                currentActiveKey: this.activeKey,
                searchText: this.$t('index.search'),
                notFoundText: this.$t('index.notFound'),
                lang: this.$lang,
                logoPath:logo,
                lkcatPath:lkcat,
                content:'',
                resultList:[],
                visible:false
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSearch (path) {
                if (this.lang === 'en-US') path += '-en';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.push(path);
                    }, 300);
                });
            },
            handleSelect (type) {
                const pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

                if (type === 'source') {
                    this.$router.push('/source/software');
                } else if (type === 'github') {
                    window.open('https://github.com/270247829/lkcat');
                } else if (type === 'guide') {
                    this.$router.push(navigate.guide[0].path + pathSuffix);
                } else if (type === 'component') {
                    this.$router.push(navigate.beforeComponents[0].path + pathSuffix);
                } else if (type === 'lkcat-admin') {
                    window.open('https://github.com/lkcat/lkcat-pro');
                } 
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/start',
                    '/docs/guide/i18n',
                    '/docs/guide/theme',
                    '/docs/guide/lkcat-loader',
                    '/overview',
                    '/docs/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                }else if(route.indexOf('source') > -1){
                    this.currentActiveKey = 'source';
                } else {
                    this.currentActiveKey = 'guide';
                }
               
            },
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                const path = this.$route.path.indexOf('-en') > -1 ? this.$route.path.split('-en')[0] : this.$route.path + '-en';
                bus.$emit('on-change-lang', lang, '/#'+ path);
            },
            handleGoToGitHub () {
                window.open('https://github.com/270247829/lkcat');
            },
            search(){
                if(this.content.length==0){
                    this.resultList = [];
                    return ;
                }
                var self = this;
                var client = algoliasearch('Y1RWZD3XP4', '290489a124895c691699bd38f9bb9cf0');
                var contact_index = client.initIndex('nav');
                var search_input_string = this.content;
                contact_index.search(search_input_string, function (err, data) {
                    var str = JSON.stringify(data.hits);
                    str = str.replace(/<em>/g,'<span class=\'algolia-highlight\'>');
                    str = str.replace(/<\/em>/g,'</span>');

                    self.resultList = JSON.parse(str);
                });
            },
            showReulst(){
                return;
                if(this.content.length!=0){
                    this.visible =true;
                }else{
                    this.visible =false;
                }
            },
            jump(item){
                this.$router.push(
                    {
                        path:item.path
                    }
                );
            },
            substr(input){
                if(input.length>17){
                    return input.substr(0,17) + ' ...';
                }else{
                    return input;
                }
            }
        },
        created () {
            this.lang = this.$lang;
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
        }
    };
</script>