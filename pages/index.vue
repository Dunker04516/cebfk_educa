<template>
  <div>
    <AdminPageHeader>
      <template #header>
        <a-page-header :title="'¡Bienvenid@ ' + $auth.user.name + '!'" style="padding: 0px" />
      </template>
    </AdminPageHeader>
    <div class="dashboard-page-content-container">
      <perfect-scrollbar style="height: 80vh;" suppressScrollX="true">
        <!--Information Cards para Admin -->
        <div class="m-30" v-if="false">
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
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-card title="Asignaciones recientes" :bodyStyle="{ padding: '0px' }">
              <perfect-scrollbar style="height: 400px;">
                <a-table :columns="columns" :data-source="data" class="table-card" :loading="loading"
                  :pagination="false">
                  <a-tag slot="asignatura" slot-scope="text" :color="text.color">
                    {{ text.nombre.toUpperCase() }}
                  </a-tag>
                  <a-tag slot="estado" slot-scope="text" :color="text == 'entregado' ? '#4CAF50' : '#FF5252'">
                    {{ text.toUpperCase() }}
                  </a-tag>
                  <template slot="calificacion" slot-scope="qualification">
                    {{ qualification }} / 10
                  </template>
                  <template slot="acciones" slot-scope="id">
                    <a-button type="primary" @click="entregar(id)" icon="eye" :disabled="loading">
                      Ver asignación
                    </a-button>
                  </template>
                </a-table>
              </perfect-scrollbar>
              <template slot="actions" class="ant-card-actions">

              </template>
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

        <a-drawer title="Actividad" :width="720" :visible="visible" :body-style="{ paddingBottom: '80px' }"
          @close="onClose">
          <a-form :form="form" layout="vertical" hide-required-mark>
            <a-row :gutter="24">
              <a-col :span="24" class="p-10">
                <h3>Bienvenida al curso de matemáticas</h3>
                <a-tag color="#FFC107" class="mt-10 mb-10">
                  Matemáticas I
                </a-tag>
                <p class="mt-10 mb-10">
                  Queridos estudiantes del primer semestre de preparatoria, ¡Bienvenidos al curso de matemáticas!
                  <br><br>
                  Soy el profesor José Nucamendi, en este curso aprenderemos un poco de álgebra. <br><br>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime blanditiis numquam alias veritatis
                  nobis explicabo, quis accusamus consequatur mollitia, incidunt dolorem sint recusandae tenetur minus.
                  Inventore tempore eveniet excepturi dolorum!
                  Architecto eligendi quaerat reiciendis reprehenderit dolore, quae amet sit molestias quasi voluptas
                  minima rerum ab cum? Totam distinctio pariatur, cupiditate et provident saepe ipsa perferendis animi
                  sed fugiat hic eos?
                </p>
              </a-col>
            </a-row>
          </a-form>
          <div :style="{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
            zIndex: 1,
          }">
            <a-button :style="{ marginRight: '8px' }" @click="onClose">
              Cancel
            </a-button>
            <a-button type="primary" @click="onClose">
              Submit
            </a-button>
          </div>
        </a-drawer>
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
  mounted() {
    this.getTasks()
  },
  data() {
    return {
      loading: false,
      visible: false,
      mostrar: true,
      columns: [
        {
          title: 'Titulo',
          dataIndex: 'tareas.titulo',
          key: 1,
          scopedSlots: { customRender: 'tareas' },
        },
        {
          title: 'Asignatura',
          dataIndex: 'tareas.asignaturas',
          key: 2,
          scopedSlots: { customRender: 'asignatura' },
          ellipsis: true,
        },
        {
          title: 'Calificacion',
          dataIndex: 'calificacion',
          key: 3,
          scopedSlots: { customRender: 'calificacion' },
        },
        {
          title: 'Estado',
          dataIndex: 'estado',
          key: 4,
          scopedSlots: { customRender: 'estado' },
        },
        {
          title: 'Fecha de asignación',
          dataIndex: 'tareas.fecha_asignacion',
          key: 5,
          scopedSlots: { customRender: 'asignacion' },
        },
        {
          title: 'Fecha de vencimiento',
          dataIndex: 'tareas.fecha_vencimiento',
          key: 6,
          scopedSlots: { customRender: 'vencimiento' },
        },
        {
          title: 'Acciones',
          dataIndex: 'id',
          key: 7,
          scopedSlots: { customRender: 'acciones' },
        },

      ],
      asignacion: {},
      pagination: [],
      data: []
    }
  },
  methods: {
    entregar(id) {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    changedRangePicker(newValue) {
      console.log(
        newValue[0].startOf('day').utc().format('YYYY-MM-DD HH:mm:ss')
      )
      console.log(
        newValue[1].startOf('day').utc().format('YYYY-MM-DD HH:mm:ss')
      )
    },
    getTasks() {
      this.loading = true
      this.$axios.post('/alumnos/tareas')
        .then((response) => {
          this.data = (response.data.asignacion.data)
          console.log(this.pagination)
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
            console.log('Request canceled', error)
          } else {
            // handle error
          }
        })
      this.loading = false
    },
    getAsignacion() {
      this.loading = true
      this.$axios.post('/alumnos/tareas')
        .then((response) => {
          this.data = (response.data.asignacion.data)
          console.log(this.pagination)
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
            console.log('Request canceled', error)
          } else {
            // handle error
          }
        })
      this.loading = false
    }
  },
  components: { AdminPageHeader, StateWidget, Typography },
}
</script>

<style lang="scss" scoped>
.dashboard-page-content-container {}
</style>
