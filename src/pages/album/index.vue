<template>
   <view>专辑详情</view>
</template>

<script>
export default {
   onLoad(options) {
      this.id = options.id;
      this.getList();
   },
   methods: {
      data () {
         return {
            //接口所需的参数
            params: {
               limit:30,
               order:"new",
               skip:0,
               first:1
            },
            id:-1    
         }
      },
      //获取专辑详情数据
      getList() {
         this.request({url:`http://157.122.54.189:9088/image/v1/wallpaper/album/5e5cf679e7bce739db1281e4/wallpaper`,data:this.params}) 
            .then(result => {
               console.log(result);
            })
      }
   }
}
</script>

<style>

</style>