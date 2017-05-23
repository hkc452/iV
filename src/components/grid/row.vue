<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script type="text/babel">

    import {oneOf} from 'utils/assist';

    const prefixCls = 'ivu-row';

    export default {
        name: 'Row',
        props: {
            gutter: {
                type: Number,
                default: 0
            },
            type: {
                validator (value) {
                    return oneOf(value, ['flex']);
                }
            },
        },
        computed: {
            classes(){
                return [
                    {
                        [`${prefixCls}`]:!this.type,
                        [`${prefixCls}-${this.type}`]:!!this.type
                    }
                ];
            },
            styles(){
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / -2 + 'px',
                        marginRight: this.gutter / -2 + 'px'
                    };
                }
                return style;
            }
        },
        methods: {
            updateGutter(val){
                this.$children.forEach((child)=>{
                    if(val != 0){
                        child.gutter = val ;
                    }
                });
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>