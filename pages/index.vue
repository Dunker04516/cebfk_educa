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
                <a-table rowKey="id" :columns="columns" :data-source="data" class="table-card" :loading="loading"
                  :pagination="false">
                  <a-tag slot="asignatura" slot-scope="text" :color="text.color">
                    {{  text.nombre.toUpperCase()  }}
                  </a-tag>
                  <a-tag slot="estado" slot-scope="text" :color="text == 'entregado' ? '#4CAF50' : '#FF5252'">
                    {{  text.toUpperCase()  }}
                  </a-tag>
                  <template slot="calificacion" slot-scope="qualification">
                    {{  qualification  }} / 10
                  </template>
                  <template slot="asignacion" slot-scope="text">
                    <a-tag color="#64DD17">
                      {{  text  }}
                    </a-tag>
                  </template>
                  <template slot="vencimiento" slot-scope="text">
                    <a-tag color="#DD2C00">
                      {{  text  }}
                    </a-tag>
                  </template>
                  <template slot="acciones" slot-scope="id">
                    <a-button type="primary" @click="ver(id)" icon="eye" :disabled="loading">
                      Ver asignación
                    </a-button>
                  </template>
                </a-table>
              </perfect-scrollbar>
              <template slot="actions" class="ant-card-actions">

              </template>
            </a-card>
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-if="false">
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
        <!-- Drawer para entrega de tareas-->
        <a-drawer title="Actividad" v-if="asignacion.entrega" :width="720" :visible="visible"
          :body-style="{ paddingBottom: '80px' }" @close="onClose">
          <a-form layout="vertical" hide-required-mark>
            <a-row :gutter="24">
              <a-col :span="24" class="p-10">
                <h3>{{  asignacion.entrega.tareas.titulo  }}</h3>
                <a-tag :color="asignacion.asignatura.color" class="mt-10 mb-10">
                  {{  asignacion.asignatura.nombre  }}
                </a-tag>
                <a-tag :color="asignacion.entrega.archivo == null ? '#DD2C00' : '#4CAF50'" class="mt-10 mb-10">
                  <span v-if="asignacion.entrega.archivo == null">
                    <strong>Vencimiento: </strong>
                    {{  asignacion.entrega.tareas.fecha_vencimiento  }}
                  </span>
                  <span v-else>
                    <strong>
                      Entregada
                    </strong>
                  </span>
                </a-tag>
                <p><strong>Calificacion:</strong> {{  asignacion.entrega.calificacion  }} / 10</p>
                <div class="mt-10 mb-10 text-justify" v-html="asignacion.entrega.tareas.descripcion">
                </div>

                <a-upload name="file" :data="appends" :beforeUpload="setAppends" :multiple="false"
                  @change="handleUpload" v-if="asignacion.entrega.archivo == null" accept="application/pdf"
                  :action="asignacion.url_tareas" :headers="headers">
                  <a-button>
                    <a-icon type="upload" /> Click to Upload
                  </a-button>
                </a-upload>
                <a-button v-else>
                  <a-icon type="download" /> {{  asignacion.entrega.alias  }}
                </a-button>
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
      asignacion: [],
      data: [],
      appends: {},
      headers: {
        authorization: this.$auth.getToken('local'),
      },
    }
  },
  methods: {
    async ver(id) {
      await this.getAsignacion(id)
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    getTasks() {
      this.loading = true
      this.$axios.post('alumnos/tareas')
        .then((response) => {
          this.data = (response.data.asignacion.data)
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
          } else {
            // handle error
          }
        })
      this.loading = false
    },
    async getAsignacion(asignacion) {
      this.loading = true
      await this.$axios.post('alumnos/tareas/asignacion', {
        id: asignacion,
      })
        .then((response) => {
          this.asignacion = (response.data)
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
          } else {
            // handle error
          }
        })
      this.loading = false
    },
    setAppends() {
      this.appends = {
        asignacion: this.asignacion.entrega.id,
      }

    },
    handleUpload(info) {
      if (info.file.status == 'done') {
        this.getTasks()
        this.visible = false
      }
    }
  },
  components: { AdminPageHeader, StateWidget, Typography },
}
</script>

<style lang="scss" scoped>
.dashboard-page-content-container {}
</style>
