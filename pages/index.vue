<template>
  <div>
    <AdminPageHeader>
      <template #header>
        <a-page-header :title="'¡Bienvenid@ ' + $auth.user.name + '!'" style="padding: 0px" />
      </template>
    </AdminPageHeader>
    <Students v-if="estudiante"></Students>
    <Teachers v-if="docente"></Teachers>
  </div>
</template>

<script>
import Students from "../components/UI/screens/Students.vue";
import AdminPageHeader from "../components/UI/AdminPageHeader.vue";
import Teachers from "../components/UI/screens/Teachers.vue";

export default {
  mounted() {
    this.$auth.user.roles.forEach(element => {
      if (element.name == 'estudiante') {
        this.estudiante = true
      }
      if (element.name == 'docente') {
        this.docente = true
      }
    });
  },
  data() {
    return {
      estudiante: false,
      docente: false
    }
  },
  components: { Students, AdminPageHeader, Teachers }
}
</script>

<style lang="scss" scoped>
</style>
