<template>
    <div :class="classes()">
        <slot></slot>
    </div>
</template>
<script type="text/babel">

    const prefixCls = 'ivu-row';

    export default {
        data(){
            return {

            };
        },
        methods:{
            classes(){
                return [
                    `${prefixCls}`,

                ];
            }
        }
    };
</script>