// 定义左侧导航

const list = {
    guide: [
        {
            title: 'LK Cat',
            titleEn: 'Quick Start',
            path: '/guide/lkcat'
        },
        {
            title: 'LKCat Pro',
            titleEn: 'Introduction',
            path: '/guide/lkcat-pro'
        },
        {
            title: '参与贡献',
            titleEn: 'Contributing Guide',
            path: '/guide/join-us'
        }
    ],
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/components/install'
        }
    ],
    components: [
        {
            type: 'General',
            title: '基础',
            list: [
                {
                    title: 'Button 按钮',
                    path: '/components/button',
                    img: 'button.png',
                    icon: 'social-youtube-outline'
                },
                {
                    title: 'Icon 图标',
                    path: '/components/icon',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                }
            ]
        },
        {
            type: 'Layout',
            title: '基础',
            list: [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: 'Layout 布局',
                    path: '/components/layout',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'MorePanel 更多条件',
                    path: '/components/more-panel',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                }
                // ,
                // {
                //     title: 'Color 色彩',
                //     path: '/components/color',
                //     img: 'color.png',
                //     icon: 'android-color-palette'
                // },
                // {
                //     title: 'Font 字体',
                //     path: '/components/font',
                //     img: 'font.png',
                //     icon: 'at'
                // }
            ]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: [
                {
                    title: 'Affix 图钉',
                    path: '/components/affix',
                    img: 'affix.png',
                    icon: 'pin'
                },
                {
                    title: 'Breadcrumb 面包屑',
                    path: '/components/breadcrumb',
                    img: 'breadcrumb.png',
                    icon: 'ios-arrow-right'
                },
                {
                    title: 'Dropdown 下拉菜单',
                    path: '/components/dropdown',
                    img: 'dropdown.png',
                    icon: 'arrow-down-b'
                },
                // {
                //     title: 'LoadingBar 加载进度条',
                //     path: '/components/loading-bar',
                //     img: 'loading-bar.png',
                //     icon: 'ios-minus-empty'
                // },
                {
                    title: 'Menu 导航菜单',
                    path: '/components/menu',
                    img: 'menu.png',
                    icon: 'navicon-round'
                },
                {
                    title: 'Page 分页',
                    path: '/components/page',
                    img: 'page.png',
                    icon: 'ios-book-outline'
                },
                {
                    title: 'Steps 步骤条',
                    path: '/components/steps',
                    img: 'steps.png',
                    icon: 'ios-checkmark-outline'
                }
            ]
        },
        {
            type: 'Data Entry',
            title: '表单',
            list: [
                {
                    title: 'AutoComplete 自动完成',
                    path: '/components/auto-complete',
                    img: 'auto-complete.png',
                    icon: 'ios-list-outline'
                },
                {
                    title: 'Cascader 级联选择',
                    path: '/components/cascader',
                    img: 'cascader.png',
                    icon: 'ios-more-outline'
                },
                {
                    title: 'Checkbox 多选框',
                    path: '/components/checkbox',
                    img: 'checkbox.png',
                    icon: 'android-checkbox-outline'
                },
                {
                    title: 'ColorPicker 颜色选择器',
                    path: '/components/color-picker',
                    img: 'color-picker.png',
                    icon: 'android-color-palette'
                },
                {
                    title: 'DatePicker 日期选择器',
                    path: '/components/date-picker',
                    img: 'date-picker.png',
                    icon: 'ios-calendar-outline'
                },
                {
                    title: 'Form 表单',
                    path: '/components/form',
                    img: 'form.png',
                    icon: 'ios-list-outline'
                },
                {
                    title: 'Input 输入框',
                    path: '/components/input',
                    img: 'input.png',
                    icon: 'ios-compose-outline'
                },
                {
                    title: 'InputNumber 数字输入框',
                    path: '/components/input-number',
                    img: 'input-number.png',
                    icon: 'ios-calculator'
                },
                // {
                //     title:'Mention 提及',
                //     path: '/components/mention',
                //     img: 'input-number.png',
                //     icon: 'ios-calculator'
                // },
                {
                    title: 'Rate 评分',
                    path: '/components/rate',
                    img: 'rate.png',
                    icon: 'ios-star'
                },
                {
                    title: 'Radio 单选框',
                    path: '/components/radio',
                    img: 'radio.png',
                    icon: 'ios-circle-filled'
                },
                {
                    title: 'Select 选择器',
                    path: '/components/select',
                    img: 'select.png',
                    icon: 'ios-arrow-down'
                },
                {
                    title: 'Slider 滑块',
                    path: '/components/slider',
                    img: 'slider.png',
                    icon: 'minus-round'
                },
                {
                    title: 'Switch 开关',
                    path: '/components/switch',
                    img: 'switch.png',
                    icon: 'toggle'
                },
                {
                    title: 'TreeSelect 树选择',
                    path: '/components/tree-select',
                    img: 'tree.png',
                    icon: 'network'
                },
                {
                    title: 'TimePicker 时间选择器',
                    path: '/components/time-picker',
                    img: 'time-picker.png',
                    icon: 'ios-clock-outline'
                },
                {
                    title: 'Transfer 穿梭框',
                    path: '/components/transfer',
                    img: 'transfer.png',
                    icon: 'ios-pause-outline'
                },
                {
                    title: 'Upload 上传',
                    path: '/components/upload',
                    img: 'upload.png',
                    icon: 'ios-cloud-upload-outline'
                }
            ]
        },
        {
            type: 'Data Display',
            title: '视图',
            list: [
                {
                    title: 'Avatar 头像',
                    path: '/components/avatar',
                    img: 'avatar.png',
                    icon: 'person'
                },
                {
                    title: 'Badge 徽标数',
                    path: '/components/badge',
                    img: 'badge.png',
                    icon: 'email-unread'
                },
                {
                    title: 'Card 卡片',
                    path: '/components/card',
                    img: 'card.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'Carousel 走马灯',
                    path: '/components/carousel',
                    img: 'carousel.png',
                    icon: 'ios-film-outline'
                },
                {
                    title: 'Collapse 折叠面板',
                    path: '/components/collapse',
                    img: 'collapse.png',
                    icon: 'ios-albums-outline'
                },
                {
                    title: 'List 列表',
                    path: '/components/list',
                    img: 'list.png',
                    icon: 'ios-list'
                },
                {
                    title: 'Poptip 气泡提示',
                    path: '/components/poptip',
                    img: 'poptip.png',
                    icon: 'chatbubble-working'
                },
                {
                    title: 'Tooltip 文字提示',
                    path: '/components/tooltip',
                    img: 'tooltip.png',
                    icon: 'chatbox-working'
                },
                {
                    title: 'Table 表格',
                    path: '/components/table',
                    img: 'table.png',
                    icon: 'ios-grid-view'
                },
                {
                    title: 'Tabs 标签页',
                    path: '/components/tabs',
                    img: 'tabs.png',
                    icon: 'social-windows-outline'
                },
                {
                    title: 'Tag 标签',
                    path: '/components/tag',
                    img: 'tag.png',
                    icon: 'ios-pricetags-outline'
                },
                {
                    title: 'Timeline 时间轴',
                    path: '/components/timeline',
                    img: 'timeline.png',
                    icon: 'android-more-vertical'
                },
                {
                    title: 'Tree 树形控件',
                    path: '/components/tree',
                    img: 'tree.png',
                    icon: 'network'
                }
            ]
        },
        {
            type:'Feedback',
            title: '',
            list:[
                {
                    title: 'Alert 警告提示',
                    path: '/components/alert',
                    img: 'alert.png',
                    icon: 'alert'
                },
                {
                    title: 'Modal 对话框',
                    path: '/components/modal',
                    img: 'modal.png',
                    icon: 'ios-chatbubble-outline'
                },
                {
                    title: 'Message 全局提示',
                    path: '/components/message',
                    img: 'message.png',
                    icon: 'ios-information-outline'
                },
                {
                    title: 'Notice 通知提醒',
                    path: '/components/notice',
                    img: 'notice.png',
                    icon: 'ios-bell-outline'
                },
                {
                    title: 'Progress 进度条',
                    path: '/components/progress',
                    img: 'progress.png',
                    icon: 'android-remove'
                },
                {
                    title: 'Spin 加载中',
                    path: '/components/spin',
                    img: 'spin.png',
                    icon: 'load-d'
                }

            ]
        },
        {
            type: 'Other',
            title: '其它',
            list: [
                {
                    title: 'BackTop 返回顶部',
                    path: '/components/back-top',
                    img: 'back-top.png',
                    icon: 'ios-arrow-up'
                },
                {
                    title: 'Circle 进度环',
                    path: '/components/circle',
                    img: 'circle.png',
                    icon: 'ios-circle-outline'
                },
                {
                    title: 'Divider 分割线',
                    path: '/components/divider',
                    img: 'circle.png',
                    icon: 'ios-circle-outline'
                },
                {
                    title: 'Scroll 无限滚动',
                    path: '/components/scroll',
                    img: 'scroll.png',
                    icon: 'ios-more'
                }
            ]
        }
    ],
    practice: [
        {
            title: '实践案例',
            titleEn: 'Practical Cases',
            path: '/docs/practice/case'
        },
        {
            title: 'LKCat Logo 设计思路',
            titleEn: 'LKCat Logo Design',
            path: '/docs/practice/logo'
        }
    ],
    source: [
        {
            title: '软件',
            path: '/source/software'
        },
        {
            title: '前端源码',
            path: '/source/web'
        },
        {
            title: '后端源码',
            path: '/source/java'
        }
    ]
};

export default list;
