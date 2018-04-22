<template>
    <a :href="'https://github.com/lkcat/lkcat/issues/' + id" target="_blank">#{{ id }}</a>
</template>
<script>
    export default {
        props: {
            id: {
                type: [Number, String]
            }
        }
    };
</script>