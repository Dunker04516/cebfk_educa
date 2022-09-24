<template>
  <a-layout-header :style="{ padding: '0 16px' }" class="bg-eco-light">
    <a-row>
      <a-col :span="4">
        <a-space>
          <a-icon class="trigger" type="menu" :style="{ fontSize: '1rem' }" @click="collapseSidebar()"
            v-if="$store.state.UI.Window.width > 700" />
        </a-space>
      </a-col>
      <a-col :span="20" class="topbar-menu">
        <Typography :level="1">CEBFK</Typography>
        <a-divider type="vertical" />
        <a-dropdown placement="bottomRight">
          <a class="ant-dropdown-link eco-secondary" style="margin-right: 20px">
            ES_MX
            <a-icon type="down" />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a-space>
                  <a-avatar shape="square" size="small" :src="require(`~/assets/img/lang.png`)" />
                  Español (México)
                </a-space>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <a-avatar size="small" :src="require(`~/assets/img/user.png`)" />
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import Typography from '../components/UI/Typography.vue'
export default {
  components: { Typography },
  methods: {
    collapseSidebar() {
      this.$store.commit(
        'UI/sidebarToggle',
        !this.$store.state.UI.Sidebar.collapsed
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.topbar-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center
}
</style>
