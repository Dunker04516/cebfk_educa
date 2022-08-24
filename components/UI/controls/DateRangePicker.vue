<template>
  <a-range-picker
    v-model="dateRangeValue"
    :format="appSetting.date_format"
    :placeholder="[$t('common.start_date'), $t('common.end_date')]"
    style="width: 100%"
    @change="dateTimeChanged"
  />
</template>

<script>
export default {
  data() {
    return {
      dateRangeValue: {},
    }
  },
  props: {
    dateRange: {
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
