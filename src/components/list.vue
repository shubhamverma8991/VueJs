<template>
  <div class="listview">
    <h1>From List</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["name", "email"],
};
</script>
<style>
.listview h1 {
  text-align: center;
}
</style>
