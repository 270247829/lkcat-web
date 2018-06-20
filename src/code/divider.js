let code = {};

code.base = `
<template>
    <div>
        Text
        <Divider type="vertical" />
        <a href="#">Link</a>
        <Divider type="vertical" />
        <a href="#">Link</a>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.size = `
<template>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider>With Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider dashed />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    </div>
</template>
<script>
    export default {

    }
</script>
`;

code.load = `
<template>
    <div>
        <Divider orientation="left">Left Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        <Divider orientation="right">Right Text</Divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    </div>
</template>
<script>
    export default {
       
    }
</script>
`;


export default code;