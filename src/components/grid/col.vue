<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script type="text/babel">

    const prefixCls = 'ivu-col'

    export default {
        name: 'iCol',
        props: {
            span: [Number, String],
            order: [Number, String],
        },
        data(){
            return {
                gutter: 0
            };
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-span-${this.span}`]: this.span,
                        [`${prefixCls}-order-${this.order}`]:!!this.order,
                    }
                ];
            },
            styles(){
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    };
                }

                return style;
            }
        },
        methods: {
            updateGutter(){
                this.$parent.updateGutter(this.$parent.gutter);
            }
        },
        mounted(){
            this.updateGutter();//子类调用父类方法
        },
        beforeDestroy(){
            this.updateGutter();
        }
    };
</script>