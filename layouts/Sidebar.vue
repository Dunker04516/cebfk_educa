<template>
  <a-layout-sider :style="{
    margin: '0 0 0 0',
    paddingTop: '8px',
    zIndex: 998,
  }" :trigger="null" :collapsed="collapsed" theme="dark" class="sidebar-right-border bg-eco-primary">
    <div v-if="collapsed" class="logo">
      <img :style="{
        height: '35px',
        margin: '1rem 1.5rem',
      }" src="~/assets/img/small_logo.png" alt="Logo" />
    </div>
    <div v-else>
      <img style="width: 200px" src="~/assets/img/logo.png" alt="" />
    </div>
    <div class="main-sidebar">
      <perfect-scrollbar>
        <a-menu class="bg-eco-primary" theme="dark" :mode="collapsed ? 'vertical' : 'inline'"
          :style="{ borderRight: 'none' }" :inline-collapsed="collapsed" :open-keys="openKeys"
          @openChange="onOpenChange">
          <a-menu-item>
            <a-icon type="home" :style="{ fontSize: '16px' }" />
            <span>Menú principal</span>
          </a-menu-item>
          <a-menu-item @click.native="$auth.logout()">
            <a-icon type="logout" :style="{ fontSize: '16px' }" />
            <span>Cerrar sesión</span>
          </a-menu-item>
        </a-menu>
      </perfect-scrollbar>
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  created() {
    window.addEventListener('resize', this.onResize)
  },
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    onResize() {
      this.$store.commit(
        'UI/windowResize',
        window.innerWidth
      )
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
  },
  computed: {
    collapsed() {
      return this.$store.state.UI.Sidebar.collapsed
    },
  },
}
</script>

<style lang="scss">
.main-sidebar .ps {
  height: calc(100vh - 50px);
}

@media only screen and (max-width: 1150px) {}
</style>
