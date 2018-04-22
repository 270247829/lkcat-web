<template>
    <div class="vue-book">

    </div>
</template>
<script>
    import axios from 'axios';
    const apiPath = 'https://www.lkcatui.com';
//    const apiPath = 'http://127.0.0.1:9800';

    export default {
        props: {},
        data () {
            return {
                order_id: 0,
                steps: 0,
                formItem: {
                    name: '',
                    phone: '',
                    address: ''
                },
                ruleValidate: {
                    name: [
                        {
                            required: true,
                            message: '姓名不能为空 ',
                            trigger: 'blur'
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            message: '电话不能为空',
                            trigger: 'blur'
                        }
                    ],
                    address: [
                        {
                            required: true,
                            message: '收货地址不能为空',
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        methods: {
            handleOrder () {
                if (this.formItem.name === '') {
                    this.$Notice.warning({
                        title: '请输入姓名'
                    });
                    return false;
                }
                if (this.formItem.phone === '') {
                    this.$Notice.warning({
                        title: '请输入联系电话'
                    });
                    return false;
                }
                if (this.formItem.address === '') {
                    this.$Notice.warning({
                        title: '请输入收获地址'
                    });
                    return false;
                }

                this.$Modal.confirm({
                    title: '收获信息确认',
                    content: `<p>姓名：${this.formItem.name}</p><p>电话：${this.formItem.phone}</p><p>地址：${this.formItem.address}</p><p><strong style="color: #ed3f14;font-size: 12px;">目前 100 本签名版已售罄，您将要购买的是普通版（无纪念品），请知晓，感谢您的支持。</strong></p>`,
                    onOk: () => {
                        const params = new URLSearchParams();
                        params.append('name', this.formItem.name);
                        params.append('phone', this.formItem.phone);
                        params.append('address', this.formItem.address);

                        axios({
                            method: 'post',
                            url: `${apiPath}/order/buy`,
                            data: params,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                            }
                        }).then(res => {
                            if (res.data.status_code === '0') {
                                this.order_id = res.data.data.order.id;
                                this.steps = 1;
                            }
                        });
                    },
                    onCancel: () => {

                    }
                });
            },
            handleFinish () {
                this.$Modal.confirm({
                    title: '付款确认',
                    content: `<p>确认已完成付费并发送订单号后，请点击确定按钮。</p>`,
                    onOk: () => {
                        this.steps = 2;
                    },
                    onCancel: () => {

                    }
                });
            }
        },
        mounted () {
            document.body.style.background = '#f8f8f9';
            document.body.style.height = '100%';
            document.getElementsByTagName('html')[0].style.height = '100%';
            document.getElementsByTagName('div')[0].style.height = '100%';
        }
    };
</script>
<style scoped>
    .vue-book{
        width: 60%;
        min-height: 100%;
        margin: 0 auto;
        padding: 16px;
        background: #fff;
        box-shadow: 0 2px 2px rgba(0,0,0,.2);
    }
    h1{
        text-align: center;
    }
    .steps{
        margin: 16px 0 32px;
    }
    .order{
        padding: 16px;
    }
</style>