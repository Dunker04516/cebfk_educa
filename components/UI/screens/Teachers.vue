<template>
  <div class="dashboard-page-content-container">
    <perfect-scrollbar style="height: 80vh;" suppressScrollX="true">
      <!-- DataTables para Información-->
      <a-row :gutter="[18, 18]" class="m-30">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-card title="Pendientes de calificación" :bodyStyle="{ padding: '0px' }">
            <perfect-scrollbar style="height: 400px;">
              <a-table rowKey="id" :columns="columns" :data-source="data" class="table-card" :loading="loading"
                :pagination="false">
                <template slot="alumno" slot-scope="text" :color="text.color">
                  {{ text.name + " " + text.l_name }}
                </template>
                <a-tag slot="asignatura" slot-scope="text" :color="text.color">
                  {{ text.nombre.toUpperCase() }}
                </a-tag>
                <a-tag slot="estado" slot-scope="text" :color="text == 'entregado' ? '#4CAF50' : '#FF5252'">
                  {{ text.toUpperCase() }}
                </a-tag>
                <template slot="calificacion" slot-scope="qualification">
                  {{ qualification }} / 10
                </template>
                <template slot="asignacion" slot-scope="text">
                  <a-tag color="#64DD17">
                    {{ text }}
                  </a-tag>
                </template>
                <template slot="vencimiento" slot-scope="text">
                  <a-tag color="#DD2C00">
                    {{ text }}
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

      <!-- DataTables para Información-->
      <a-row :gutter="[18, 18]" class="m-30">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-card title="Calificadas" :bodyStyle="{ padding: '0px' }">
            <perfect-scrollbar style="height: 400px;">
              <a-table rowKey="id" :columns="columns" :data-source="calificadas" class="table-card" :loading="loading"
                :pagination="false">
                <template slot="alumno" slot-scope="text" :color="text.color">
                  {{ text.name + " " + text.l_name }}
                </template>
                <a-tag slot="asignatura" slot-scope="text" :color="text.color">
                  {{ text.nombre.toUpperCase() }}
                </a-tag>
                <a-tag slot="estado" slot-scope="text" :color="text == 'entregado' ? '#4CAF50' : '#FF5252'">
                  {{ text.toUpperCase() }}
                </a-tag>
                <template slot="calificacion" slot-scope="qualification">
                  {{ qualification }} / 10
                </template>
                <template slot="asignacion" slot-scope="text">
                  <a-tag color="#64DD17">
                    {{ text }}
                  </a-tag>
                </template>
                <template slot="vencimiento" slot-scope="text">
                  <a-tag color="#DD2C00">
                    {{ text }}
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
      <a-drawer title="Calificación de Actividad" v-if="asignacion.entrega" :width="720" :visible="visible"
        :body-style="{ paddingBottom: '80px' }" @close="onClose">
        <a-form layout="vertical" hide-required-mark>
          <a-row :gutter="24">
            <a-col :span="24" class="p-10">
              <h3>{{asignacion.entrega.tareas.titulo}} |
                <strong>
                  {{asignacion.entrega.estudiantes.usuario.name + " " + asignacion.entrega.estudiantes.usuario.l_name }}
                </strong>
              </h3>
              <hr>
              <a-tag :color="asignacion.asignatura.color" class="mt-10 mb-10">
                {{ asignacion.asignatura.nombre }}
              </a-tag>
              <a-tag color="#CF0B0B" class="mt-10 mb-10">
                {{ asignacion.nivel.nivel + " " + asignacion.nivel.periodo + " " + asignacion.nivel.escolaridad }}
              </a-tag>
              <a-tag :color="asignacion.entrega.estado == 'entregado' ? '#4CAF50' : '#FF5252'">
                {{ asignacion.entrega.estado.toUpperCase() }}
              </a-tag>
              <a-tag v-if="asignacion.entrega.estado != 'entregado'" color="#DD2C00" class="mt-10 mb-10">
                <strong>Vencimiento: </strong>
                {{ asignacion.entrega.tareas.fecha_vencimiento }}
              </a-tag>
              <p><strong>Calificacion: </strong>
                <a-input-number id="inputNumber" class="calification" v-model="asignacion.entrega.calificacion" :min="0"
                  :max="10" /> / 10
              </p>
              <a-alert v-if="asignacion.entrega.fecha_calificacion != null" class="mb-20 mt-20"
                :message="'Calificado el: ' + asignacion.entrega.fecha_calificacion" show-icon type="success" />
              <hr>
              <p class="mt-10 mb-10">
                <strong>Descripción de la actividad</strong>
              </p>
              <div class="mt-10 mb-10 text-justify" v-html="asignacion.entrega.tareas.descripcion">
              </div>
              <hr>
              <p class="mt-10 mb-10">
                <strong>Archivos</strong>
              </p>
              <a-alert class="mb-20 mt-20" v-if="!asignacion.entrega.archivo"
                message="¡El alumno aún no ha subido ningún archivo!" type="info" show-icon />
              <a-button @click="download(asignacion.entrega.id, asignacion.entrega.alias)" :disabled="waiting" v-else>
                <a-icon type="download" /> {{ asignacion.entrega.alias }} {{ waiting ? '(Descargado archivo)' : '' }}
              </a-button>
              <hr>
              <p class="mt-10 mb-10">
                <strong>Observaciones</strong>
              </p>
              <a-textarea v-model:value="asignacion.entrega.observaciones"
                placeholder="Si las hay, escribe tus observaciones aquí" :rows="4" />
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
          <a-button type="primary" :style="{ marginRight: '8px' }" @click="calificar(asignacion.entrega.id)">
            Calificar
          </a-button>
          <a-button type="danger" :style="{ marginRight: '8px' }" @click="onClose">
            Cerrar
          </a-button>
        </div>
      </a-drawer>
    </perfect-scrollbar>
    {{calificacion}}
  </div>
</template>

<script>
import AdminPageHeader from '../AdminPageHeader.vue'
import StateWidget from '../controls/StateWidget.vue'
import Typography from '../Typography.vue'
export default {
  name: 'IndexPage',
  computed: {
    calificacion() {
      if(this.asignacion.entrega){
        return this.asignacion.entrega.calificacion;
      }
      return 0
    },
    observaciones(){
      if(this.asignacion.entrega){
        return this.asignacion.entrega.observaciones;
      }
      return null
    }
  },
  mounted() {
    this.getTasks()
    this.getCalificadas()
  },
  data() {
    return {
      loading: false,
      visible: false,
      mostrar: true,
      waiting: false,
      columns: [
          {
            title: 'Alumno',
            dataIndex: 'estudiantes.usuario',
            scopedSlots: { customRender: 'alumno' },
          },
          {
            title: 'Titulo',
            dataIndex: 'tareas.titulo',
            scopedSlots: { customRender: 'tareas' },
          },
          {
            title: 'Asignatura',
            dataIndex: 'tareas.asignaturas',
            scopedSlots: { customRender: 'asignatura' },
            ellipsis: true,
          },
          {
            title: 'Calificacion',
            dataIndex: 'calificacion',
            scopedSlots: { customRender: 'calificacion' },
          },
          {
            title: 'Estado',
            dataIndex: 'estado',
            scopedSlots: { customRender: 'estado' },
          },
          {
            title: 'Fecha de asignación',
            dataIndex: 'tareas.fecha_asignacion',
            scopedSlots: { customRender: 'asignacion' },
          },
          {
            title: 'Fecha de vencimiento',
            dataIndex: 'tareas.fecha_vencimiento',
            scopedSlots: { customRender: 'vencimiento' },
          },
          {
            title: 'Acciones',
            dataIndex: 'id',
            scopedSlots: { customRender: 'acciones' },
          },
      ],
      asignacion: [],
      calificadas: [],
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
      this.getTasks()
      this.getCalificadas()
      this.visible = true
    },
    onClose() {
      this.visible = false
      this.calificacion = 0
    },
    getCalificadas(){
      this.loading = true
      this.calificadas

      this.$axios.post('/profesores/asignaciones/calificadas')
        .then((response) => {
          this.calificadas = (response.data.asignaciones)
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
          } else {
            // handle error
          }
        })
      this.loading = false
    },
    getTasks() {
      this.loading = true
      this.$axios.post('/profesores/asignaciones')
        .then((response) => {
          this.data = (response.data.asignaciones)
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
      await this.$axios.post('profesores/asignaciones/entregas', {
        id: asignacion,
      })
        .then((response) => {
          this.asignacion = (response.data)
          console.log(this.asignacion)
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
    },
    async calificar(asignacion){
      this.loading = true
      await this.$axios.post('profesores/asignaciones/calificar', {
        id: asignacion,
        calificacion: this.calificacion,
        observaciones: this.observaciones
      })
        .then((response) => {
          this.onClose();
          this.getTasks();
          this.getCalificadas();
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
          } else {
            // handle error
          }
        })
      this.loading = false
    },
    download(asignacion, alias) {
      this.loading = true
      this.waiting = true
      let postConfig = {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'blob',
      }
      this.$axios.post('alumnos/tareas/descargar', {
        id: asignacion
      }, postConfig)
        .then((response) => {
          let blob = new Blob([response.data], { type: 'application/pdf' })
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = alias
          link.click()
        })
        .catch(error => {
          if (this.$axios.isCancel(error)) {
          } else {
            // handle error
          }
        })
      this.loading = false
      setTimeout(() => {
        this.waiting = false
      }, 2500);
    }
  },
  components: { AdminPageHeader, StateWidget, Typography },
}
</script>

<style lang="scss" scoped>
.dashboard-page-content-container {}
</style>
