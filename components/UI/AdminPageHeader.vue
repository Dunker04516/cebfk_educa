<template>
  <div class="breadcrumb-header">
    <a-card class="page-content-sub-header breadcrumb-left-border">
      <a-row>
        <a-col :span="24">
          <slot name="header"></slot>
        </a-col>
        <a-col :span="24">
          <slot name="breadcrumb"></slot>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
