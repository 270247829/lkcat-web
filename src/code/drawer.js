let code = {};

code.base = `
<template>
    <Button type="primary" @click="modal1 = true">显示</Button>
    <Drawer v-model="modal1" title="Basic Drawer" :footerHide="true" >
        <p>
            Some contents...
        </p>
        <p>
            Some contents...
        </p>
        <p>
            Some contents...
        </p>
    </Drawer>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        }
    }
</script>
`;

code.position = `
<template>
    <Button type="primary" @click="modal10 = true">显示</Button>
    <Drawer v-model="modal10" title="Basic Drawer" :footerHide="true" placement="left" >
        <p>
            Some contents...
        </p>
        <p>
            Some contents...
        </p>
        <p>
            Some contents...
        </p>
    </Drawer>
</template>
<script>
    export default {
        data () {
            return {
                modal10: false
            }
        }
    }
</script>
`;

code.button = `
<template>
    <div slot="demo">
        <Button type="primary" @click="modal2 = true">显示</Button>
        <Drawer v-model="modal2" title="Basic Drawer" >
            <p>
                Some contents...
            </p>
            <p>
                Some contents...
            </p>
            <p>
                Some contents...
            </p>
        </Drawer>
    </div>
    <div slot="desc">
        <p>显示页脚操作按钮</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false
            }
        }
    }
</script>
`;
export default code;
