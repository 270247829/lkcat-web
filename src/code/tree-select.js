let code = {};

code.base = `
<template>
    <TreeSelect :data="treeData1" allow-clear style="width:300px" @select="onSelect" @clear="onClear">
    </TreeSelect>
</template>
<script>
    export default {
        data () {
            return {
                treeData1: [{
                    title: 'parent 1',
                    expanded: true,
                    children: [{
                    title: 'parent 1-0',
                    expanded: true,
                    children: [{
                        title: 'my leaf',
                    }, {
                        title: 'your leaf',
                    }]
                    }, {
                    title: 'parent 1-1',
                    children: [{
                        title: "abc"
                    }]
                    }]
                }]
            }
        },
        methods: {
            onSelect(data) {
                console.log(data);
            },
            onClear(data) {
                console.log('clear', data);
            }
        }
    }
</script>
`;

code.size = `
<template>
    <TreeSelect :data="treeData1" :multiple="true"  allow-clear style="width:300px" @select="onSelect" @clear="onClear">
    </TreeSelect>
</template>
<script>
    export default {
        data () {
            return {
                treeData1: [{
                    title: 'parent 1',
                    expanded: true,
                    children: [{
                    title: 'parent 1-0',
                    expanded: true,
                    children: [{
                        title: 'my leaf',
                    }, {
                        title: 'your leaf',
                    }]
                    }, {
                    title: 'parent 1-1',
                    children: [{
                        title: "abc"
                    }]
                    }]
                }]
            }
        },
        methods: {
            onSelect(data) {
                console.log(data);
            },
            onClear(data) {
                console.log('clear', data);
            }
        }
    }
</script>
`;

code.load = `
<template>
    <TreeSelect :data="treeData3"  allow-clear style="width:300px" @select="onSelect" @clear="onClear" :async="loadData">
    </TreeSelect>
</template>
<script>
    export default {
        data () {
            return {
                treeData1: [{
                    title: 'parent 1',
                    expanded: true,
                    children: [{
                    title: 'parent 1-0',
                    expanded: true,
                    children: [{
                        title: 'my leaf',
                    }, {
                        title: 'your leaf',
                    }]
                    }, {
                    title: 'parent 1-1',
                    children: [{
                        title: "abc"
                    }]
                    }]
                }]
            }
        },
        methods: {
            onSelect(data) {
                console.log(data);
            },
            onClear(data) {
                console.log('clear', data);
            },
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
`;


export default code;