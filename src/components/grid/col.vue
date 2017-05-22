<template>
    <div :class="classes()">
        <slot></slot>
    </div>
</template>
<script type="text/babel">

    const prefixCls = 'ivu-col'

    export default {
        methods:{
            classes(){
                console.log('data改变时进来:',this.currentSpan,this.span)
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-span-${this.span}`]:this.span
                    }
                ];
            }
        },
        props:{
            span:[Number,String],
        },
        data(){
            return {
                currentSpan:0
            };
        }
    };
</script>