<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="t-toolbar">
        <ion-buttons slot="start" @click="Storeinfo">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/save--v1.png" />
        </ion-buttons>
        <ion-title>
          <ion-item>
            <ion-label style="width: 25%; position: absolute"
              >Vehiculo</ion-label
            >
            <ion-select
              v-model="unidad_selected"
              interface="popover"
              style="position: absolute; right: 9px; min-width: 72%"
              @ionChange="getInfoUnidad"
            >
              <ion-select-option
                :value="unidad"
                v-for="(unidad, u) in unidades"
                :key="u"
                >{{ unidad.d.nm }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-card-title>Mecanico</ion-card-title>
          <ion-card-subtitle>Mecanico de confianza</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="model_mecanico.nombre"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Correo</ion-label>
            <ion-input v-model="model_mecanico.correo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Numero de telefono</ion-label>
            <ion-input v-model="model_mecanico.telefono"></ion-input>
            <!-- <a href="tel:1-562-867-5309">Click to Call!</a> -->
          </ion-item>
          <ion-item>
            <ion-label position="floating">Dirección</ion-label>
            <ion-input v-model="model_mecanico.direccion"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-card-title>Grua</ion-card-title>
          <ion-card-subtitle>Prestador de Grua</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="model_grua.nombre"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Correo</ion-label>
            <ion-input v-model="model_grua.correo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Numero de telefono</ion-label>
            <ion-input v-model="model_grua.telefono"></ion-input>
            <a href="tel:1-562-867-5309">Click to Call!</a>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Dirección</ion-label>
            <ion-input v-model="model_grua.direccion"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-card-title>Seguro</ion-card-title>
          <ion-card-subtitle>Poliza de Seguro</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="model_seguro.nombre"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Identificacion</ion-label>
            <ion-input v-model="model_seguro.identificacion"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Poliza</ion-label>
            <ion-input v-model="model_seguro.poliza"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card style="margin-bottom: 90px">
        <ion-card-header>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-card-title>Mantenimiento</ion-card-title>
          <ion-card-subtitle>Mantenimientos realizados</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Fecha</ion-label>
            <ion-input v-model="model_mantenimiento.date"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Proximo Mantenimiento</ion-label>
            <ion-input
              v-model="model_mantenimiento.proximo_mantenimiento"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Descripcion</ion-label>
            <ion-textarea
              v-model="model_mantenimiento.descripcion"
            ></ion-textarea>
          </ion-item>
          <ion-button
            expand="full"
            style="margin-top: 10px"
            @click="StoreMantenimiento"
            >Registrar Mantenimiento
          </ion-button>
          <ion-card-content>
            <ion-list>
              <ion-item v-for="(mantenimiento, m) in mantenimientos" :key="m">
                <ion-label>
                  Fecha de mantenimiento: {{ mantenimiento.date }} <br />
                  Fecha de proximo mantenimiento: {{ mantenimiento.date }}
                  <br />
                  Descripción: {{ mantenimiento.descripcion }} <br />
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSelect,
  IonSelectOption,
  toastController,
  IonButtons
} from "@ionic/vue";
import { useStore } from "vuex";

import mixinMecanico from "./mixing/MecanicoMixing.vue";
import mixinGrua from "./mixing/GruaMixing.vue";
import mixiSeguro from "./mixing/SeguroMixing.vue";
import mixiMantenimiento from "./mixing/MantenimientoMixing.vue";
export default {
  mixins: [mixinMecanico, mixinGrua, mixiSeguro, mixiMantenimiento],
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSelect,
    IonSelectOption,
    IonButtons
  },
  data() {
    return {
      unidades__: [],
      store: useStore(),
      unidad_selected: {},
    };
  },
  computed: {
    unidades: {
      get() {
        return this.store.getters.unidades;
      },
      set(val) {
        this.store.commit("setUnidades", val);
      },
    },
  },
  methods: {
    async Storeinfo(data) {
      if (Object.entries(this.unidad_selected).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        await this.Storage.set({
          key: this.unidad_selected.i,
          value: JSON.stringify({
            mecanico: {
              nombre: this.model_mecanico.nombre,
              correo: this.model_mecanico.correo,
              telefono: this.model_mecanico.telefono,
              direccion: this.model_mecanico.direccion,
            },
            grua: {
              nombre: this.model_grua.nombre,
              correo: this.model_grua.correo,
              telefono: this.model_grua.telefono,
              direccion: this.model_grua.direccion,
            },
            mantenimiento: this.mantenimientos,
            seguro: {
              nombre: this.model_seguro.nombre,
              identificacion: this.model_seguro.identificacion,
              poliza: this.model_seguro.poliza,
            },
          }),
        });
      }
    },
    async getInfoUnidad() {
      var { value } = await this.Storage.get({ key: this.unidad_selected.i });
      var data = JSON.parse(value);
      this.model_mecanico.nombre = data.mecanico.nombre;
      this.model_mecanico.correo = data.mecanico.correo;
      this.model_mecanico.telefono = data.mecanico.telefono;
      this.model_mecanico.direccion = data.mecanico.direccion;

      this.model_grua.nombre = data.grua.nombre;
      this.model_grua.correo = data.grua.correo;
      this.model_grua.telefono = data.grua.telefono;
      this.model_grua.direccion = data.grua.direccion;

      this.model_seguro.nombre = data.seguro.nombre;
      this.model_seguro.identificacion = data.seguro.identificacion;
      this.model_seguro.poliza = data.seguro.poliza;

      this.mantenimientos = [];
      for (let index = 0; index < data.mantenimiento.length; index++) {
        const element = data.mantenimiento[index];
        this.mantenimientos.push(element)
        
      }


    },
  },
};
</script>
