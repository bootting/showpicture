<template>
    <view>
        <!-- 视频列表 开始 -->
        <scroll-view scroll-y enable-flex  @scrolltolower="handleScrollToLower" class="vedio_wrap">
            <view class="vedio_item" v-for="item in videowp" :key="item.id" @click="handleToVedio(item)">
                <image mode="widthFix" :src="item.img"></image>
            </view>
        </scroll-view>
        <!-- 视频列表 结束 -->
    </view>
</template>

<script>
export default {
    data () {
        return {
            //视频数据
            videowp:[],
            //是否还有更多数据
            hasMore:true
        }
    },
    props: {
        urlobj:Object
    },
    mounted () {
        this.getList();
        
    },
    watch: {
        //监控urlobj的变化
        urlobj() {
            //重置效果
            this.videowp = [];
            this.getList();
        }
    },
    methods: {
        getList() {
           this.request({url:this.urlobj.url,data:this.urlobj.params})
                .then(result => {
                    if(result.res.videowp.length === 0) {
                        this.hasMore = false;
                        uni.showToast({title:"没有更多数据了哦~",icon:"none"});
                        return
                    }
                    this.videowp = [...this.videowp,...result.res.videowp];
                })
        },
        handleScrollToLower() {
            if(this.hasMore) {
                this.urlobj.params.skip += this.urlobj.params.limit;
                this.getList();
            } else {
                uni.showToast({title:"没有更多数据了哦~",icon:"none"});
            }
        },
        handleToVedio(item) {
            //把接收到的数据传递到全局对象中
            getApp().globalData.vedio = item;
            uni.navigateTo({
                url:"/pages/vedioPlay/index"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.vedio_wrap {
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 36px);
    .vedio_item {
        width: 33.33%;
        border: 5rpx solid #fff;
        image {}
    }
}
</style>