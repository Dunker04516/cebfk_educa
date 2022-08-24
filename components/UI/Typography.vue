<template>
  <p :style="{ fontSize: level + 'rem' }" class="typography eco-secondary">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style lang="scss" scoped>
.typography {
  margin: 0;
  padding: 0;
}
</style>
