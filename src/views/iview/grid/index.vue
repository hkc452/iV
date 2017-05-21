<template>
  <!--<Row>-->
  <!--<Col span="12">col-12</Col>-->
  <!--<Col span="12">col-12</Col>-->
  <!--</Row>-->
  <!--<br>-->


  <!--<Row>-->
  <!--<Col span="8">col-8</Col>-->
  <!--<Col span="8">col-8</Col>-->
  <!--<Col span="8">col-8</Col>-->
  <!--</Row>-->
  <!--<br>-->


  <!--<Row>-->
  <!--<Col span="6">col-6</Col>-->
  <!--<Col span="6">col-6</Col>-->
  <!--<Col span="6">col-6</Col>-->
  <!--<Col span="6">col-6</Col>-->
  <!--</Row>-->


  <!--间隔-->
  <!--<Row :gutter="16">-->
    <!--<Col span="6">-->
      <!--<div>col-6</div>-->
    <!--</Col>-->
    <!--<Col span="6">-->
      <!--<div>col-6</div>-->
    <!--</Col>-->
    <!--<Col span="6">-->
      <!--<div>col-6</div>-->
    <!--</Col>-->
    <!--<Col span="6">-->
      <!--<div>col-6</div>-->
    <!--</Col>-->
  <!--</Row>-->

  <!--flex更改顺序-->
  <!--<Row type="flex">-->
    <!--<Col span="6" order="4">1 | order-4</Col>-->
    <!--<Col span="6" order="3">2 | order-3</Col>-->
    <!--<Col span="6" order="2">3 | order-2</Col>-->
    <!--<Col span="6" order="1">4 | order-1</Col>-->
  <!--</Row>-->

  <!--栅格排序-->
  <!--<Row>-->
    <!--<Col span="18" push="6">col-18 | push-6</Col>-->
    <!--<Col span="6" pull="18">col-6 | pull-18</Col>-->
  <!--</Row>-->

  <!--偏移-->
  <!--<Row>-->
    <!--<Col span="8">col-8</Col>-->
    <!--<Col span="8" offset="8">col-8 | offset-8</Col>-->
  <!--</Row>-->

  <!--flex定位-->
  <!--<Row type="flex" justify="start" class="code-row-bg">-->
    <!--<Col span="4">col-4</Col>-->
    <!--<Col span="4">col-4</Col>-->
    <!--<Col span="4">col-4</Col>-->
    <!--<Col span="4">col-4</Col>-->
  <!--</Row>-->


  <!--响应式布局-->
  <!--lg的布局 会覆盖重用xs的布局，但是反过来就不可以-->
  <Row>
    <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
  </Row>

</template>
<script>

</script>
<style lang="less" rel="stylesheet/less">

</style>