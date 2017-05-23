<template>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
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
    .code-row-bg{
        height: 200px;
        > div{
            background-color: #6dc0ff;
            color: white;
        }
    }
</style>