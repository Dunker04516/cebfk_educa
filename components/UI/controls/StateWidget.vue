<template>
  <a-card :bordered="false">
    <div class="card-widget">
      <div class="icon-widget">
        <slot name="image"></slot>
      </div>
      <figcaption>
        <slot name="description"></slot>
      </figcaption>
    </div>
  </a-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.icon-widget {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;
  margin-right: 20px;
}
</style>
