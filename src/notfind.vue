<template>
    <div class="error error_404">
        <div class="text">
            <h1>404</h1>
            <div class="desc">
                <h2>This page could not be found.</h2>
            </div>
        </div>

    </div>
</template>

<style lang="less" rel="stylesheet/less">
    .error {
        color: #000;
        background: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";
        text-align: center;
        padding-top: 20%;
        h1, .desc {
            display: inline-block;
            vertical-align: top;
        }
        h1, h2, h3 {
            margin: 0;
            padding: 0;
            font-weight: normal;
        }
        h1 {
            border-right: 1px solid rgba(0, 0, 0,.3);
            margin-right: 20px;
            padding: 10px 23px;
            font-size: 24px;
            font-weight: 500;
        }
        .desc {
            text-align: left;
            line-height: 49px;
            height: 49px;
            vertical-align: middle;
        }
        h2 {
            font-size: 14px;
        }
    }
</style>