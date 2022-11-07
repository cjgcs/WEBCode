<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <!--1:声明一个插槽区域-->
    <!--vue 官方规定，每个slot插柄，都要有一个name名称-->
    <!--如果省略了 slot的name属性，则有一个默认名称default-->
    <!--2:假设组件:没在定义slot用户将自定义内容添加--丢失-->
    <!--slot></slot-->
    <!--3:后备内容-->
    <!--如果调用者没有传递指定标签，则后备内容-->
    <slot>后备内容</slot>

  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
