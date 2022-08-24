<template>
  <div>
    <a-config-provider :locale="locale">
      <a-layout v-if="$auth.loggedIn" id="components-layout-demo-custom-trigger">
        <a-layout-sider style="
            width: fit-content;
            min-width: fit-content;
            max-width: fit-content;
          ">
          <Sidebar :collapsed="collapsed"></Sidebar>
        </a-layout-sider>
        <a-layout>
          <TopBar></TopBar>
          <Nuxt />
        </a-layout>
      </a-layout>
      <Login v-else></Login>
    </a-config-provider>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import TopBar from './TopBar.vue'
import es_ES from 'ant-design-vue/lib/locale-provider/es_ES'
import Login from '../components/auth/Login.vue'
export default {
  middleware: 'auth',
  data() {
    return {
      locale: es_ES,
      collapsed: false,
    }
  },
  components: { TopBar, Sidebar, Login },
}
</script>

<style lang="scss" scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  text-align: center;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
