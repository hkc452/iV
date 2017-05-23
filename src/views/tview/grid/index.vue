<template>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
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