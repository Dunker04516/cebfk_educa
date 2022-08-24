<template>
  <div>
    <AdminPageHeader>
      <template #header>
        <a-page-header :title="'¡Bienvenido ' + $auth.user.name + '!'" style="padding: 0px" />
      </template>
    </AdminPageHeader>
    <div class="dashboard-page-content-container">
      <perfect-scrollbar style="height: 80vh;" suppressScrollX="true">
        <!--Information Cards para Admin -->
        <div class="m-30">
          <Typography :level="1.4" class="mt-30">Calificaciones Primer parcial</Typography>
          <Typography :level="1" class="mb-30">
            <a-icon type="calendar" />
            18 - Ago - 2022
            /
            <a-icon type="calendar" />
            19 - Ago - 2022
          </Typography>
          <a-row :gutter="[15, 15]">
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="calculator" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Matemáticas I</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="experiment" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Química I</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="book" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Taller de Lectura y Redacción</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="team" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Ética I</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="search" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Metodología de la Investigación</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="message" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Inglés I</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="desktop" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Informática I</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="safety" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Orientación Educativa</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="bug" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Taller de Bioética</p>
                </template>
              </StateWidget>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
              <StateWidget>
                <template #image>
                  <a-icon type="sound" style="color: #fff; font-size: 24px" />
                </template>
                <template #description>
                  <h2>Calificación</h2>
                  <a-progress :percent="0" :show-info="true" />
                  <p>Música Clásica</p>
                </template>
              </StateWidget>
            </a-col>

          </a-row>
        </div>

        <!-- DataTables para Información-->
        <a-row :gutter="[18, 18]" class="m-30">
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <a-card title="Asignaciones recientes" :bodyStyle="{ padding: '0px' }">
              <perfect-scrollbar style="height: 400px;">
                <a-table :columns="columns" :data-source="data" class="table-card">

                </a-table>
              </perfect-scrollbar>
            </a-card>
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <a-card title="Avisos" :bodyStyle="{ padding: '0px' }">
              <perfect-scrollbar style="height: 400px;">
                <template v-for="n in 8">
                  <a-alert class="alert-card" message="success tips"
                    description="Detailed description and advices about successful copywriting." type="success"
                    showIcon />
                </template>

              </perfect-scrollbar>
            </a-card>
          </a-col>
        </a-row>
      </perfect-scrollbar>

    </div>
  </div>
</template>

<script>
import AdminPageHeader from '../components/UI/AdminPageHeader.vue'
import StateWidget from '../components/UI/controls/StateWidget.vue'
import Typography from '../components/UI/Typography.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      mostrar: true,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column Long Column',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column',
          dataIndex: 'address',
          key: 'address 3',
          ellipsis: true,
        },
        {
          title: 'Long Column',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: true,
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '4',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '5',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '6',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  },
  methods: {
    changedRangePicker(newValue) {
      console.log(
        newValue[0].startOf('day').utc().format('YYYY-MM-DD HH:mm:ss')
      )
      console.log(
        newValue[1].startOf('day').utc().format('YYYY-MM-DD HH:mm:ss')
      )
    },
  },
  components: { AdminPageHeader, StateWidget, Typography },
}
</script>

<style lang="scss" scoped>
.dashboard-page-content-container {}
</style>
