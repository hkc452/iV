<template>
    <Row type="flex" :gutter="16">
        <Col :span="10" order="4">col-span-10</Col>
        <Col :span="7" order="2">col-span-7</Col>
        <Col :span="7" order="27">col-span-7</Col>
    </Row>
</template>
<script type="text/babel">
    import {Row,Col} from 'components/grid';
    export default {
        mounted(){

        },
        components:{Row,Col},
        methods:{

        }
    };

</script>
<style lang="less" rel="stylesheet/less">

</style>