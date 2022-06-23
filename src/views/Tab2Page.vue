<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="t-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title>
          <ion-item>
            <ion-label style="width: 25%; position: absolute">Vehiculo</ion-label>
            <ion-select interface="popover" style="position: absolute; right: 9px; min-width: 72%"
              v-model="UnidadSelected" @ionChange="SetUniViewMap(UnidadSelected)">
              <ion-select-option :value="unidad" v-for="(unidad, u) in unidades__" :key="u">{{ unidad.d.nm }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-menu side="start" menu-id="first" content-id="main" class="menu-j">
      <ion-content>
        <div class="content-j">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-button @click="CmdParqueoSeguro" fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  ">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Parqueo <br />Seguro</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button @click="CmdAperturaDePuertas" fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  ">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Aperturas de <br />Puertas</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button @click="CmdbloqueoAuto" fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  ">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Bloquear <br />Motor</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button @click="CmdSOS" fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  ">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>SOS</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  " @click="setOpen(true)">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Mecanico</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  " @click="setOpenGrua(true)">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Grua</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  " @click="setOpenSeguro(true)">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " @click="setOpenSeguro(true)" />
                    </div>
                    <div>
                      <p>Seguro</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button fill="clear" side="end" style="
                    text-align: center;
                    font-size: 7px;
                    text-transform: capitalize;
                    height: 50px;
                    text-decoration: none;
                    color: white;
                  " @click="setOpenMantenimiento(true)">
                  <div>
                    <div>
                      <img src="https://img.icons8.com/ios/20/undefined/shield.png" style="
                          position: relative;
                          left: 50%;
                          transform: translate(-50%, -5px);
                        " />
                    </div>
                    <div>
                      <p>Mantenimientos</p>
                    </div>
                  </div>
                </ion-button>
              </ion-col>
            </ion-row>
            <div class="divider-j"></div>
          </ion-grid>
        </div>
      </ion-content>
    </ion-menu>
    <ion-content :fullscreen="true" id="main">
      <div id="map" style="width: 100%; height: 100%; z-index: 1" />
      <ion-modal :breakpoints="[0.1, 0.7, 1]" :initialBreakpoint="0.7" :is-open="isOpenRef"
        @didDismiss="setOpen(false)">
        <ion-header>
          <ion-toolbar>
            <ion-title>Mecanico de Confianza</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-card>
            <ion-card-header>
              <ion-avatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </ion-avatar>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input v-model="model_mecanico.nombre" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Correo</ion-label>
                <ion-input v-model="model_mecanico.correo" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Numero de telefono</ion-label>
                <ion-input v-model="model_mecanico.telefono" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Dirección</ion-label>
                <ion-input v-model="model_mecanico.direccion" disabled readonly></ion-input>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-modal>

      <ion-modal :breakpoints="[0.1, 0.7, 1]" :initialBreakpoint="0.7" :is-open="isOpenRefGrua"
        @didDismiss="setOpenGrua(false)">
        <ion-header>
          <ion-toolbar>
            <ion-title>Prestador de Grua</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-card>
            <ion-card-header>
              <ion-avatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </ion-avatar>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input v-model="model_grua.nombre" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Correo</ion-label>
                <ion-input v-model="model_grua.correo" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Numero de telefono</ion-label>
                <ion-input v-model="model_grua.telefono" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Dirección</ion-label>
                <ion-input v-model="model_grua.direccion" disabled readonly></ion-input>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-modal>

      <ion-modal :breakpoints="[0.1, 0.7, 1]" :initialBreakpoint="0.7" :is-open="isOpenRefSeguro"
        @didDismiss="setOpenSeguro(false)">
        <ion-header>
          <ion-toolbar>
            <ion-title>Poliza de Seguro</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-card>
            <ion-card-header>
              <ion-avatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </ion-avatar>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input v-model="model_seguro.nombre" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Identificacion</ion-label>
                <ion-input v-model="model_seguro.identificacion" disabled readonly></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Poliza</ion-label>
                <ion-input v-model="model_seguro.poliza" disabled readonly></ion-input>
              </ion-item>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-modal>

      <ion-modal :breakpoints="[0.1, 0.7, 1]" :initialBreakpoint="0.7" :is-open="isOpenRefMantenimiento"
        @didDismiss="setOpenMantenimiento(false)">
        <ion-header>
          <ion-toolbar>
            <ion-title>Mantenimientos</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-card>
            <ion-card-header>
              <ion-avatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </ion-avatar>
            </ion-card-header>
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
          </ion-card>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
/* eslint-disable */
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  onIonViewDidEnter,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButton,
  IonModal,
  IonInput,
  IonList,
  IonButtons,
  IonMenuButton,
  menuController,
  IonMenu,
  toastController,
  alertController
} from "@ionic/vue";
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useStore } from "vuex";
import { Storage } from "@capacitor/storage";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

export default defineComponent({
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    Swiper,
    SwiperSlide,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonAvatar,
    IonButton,
    IonModal,
    IonInput,
    IonList,
    IonButtons,
    IonMenuButton,
    IonMenu,
  },
  setup() {
    const map__: any = ref({});
    const sid__: any = ref("");
    const unidades__: any = ref([]);
    const _markerByUnit: any = ref([]);
    const router: any = useRouter();
    const store: any = useStore();
    const isOpenRef = ref(false);
    const isOpenRefGrua = ref(false);
    const isOpenRefSeguro = ref(false);
    const isOpenRefMantenimiento = ref(false);
    const mantenimientos = ref([]);
    const UnidadSelected: object = ref({});
    let model: any = ref({});

    let unit: any = computed({
      get: () => {
        return store.getters.unidad;
      },
      set: (val) => {
        store.commit("setUnidad", val);
      },
    });

    const model_mecanico: any = ref({
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
    });

    const model_grua: any = ref({
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
    });

    const model_seguro: any = ref({
      nombre: "",
      identificacion: "",
      poliza: "",
    });

    let btn_parqueoseguro: any = ref(null);
    let btn_aperturaDePuertas: any = ref(null);
    let btn_bloqueoAuto: any = ref(null);
    let btn_btnSOS: any = ref(null);

    const GetSeguroNombre = async () => {
      var { value } = await Storage.get({ key: "Data_seguro_nombre" });
      model_seguro.nombre = value;
    };

    const GetSeguroIdentificacion = async () => {
      var { value } = await Storage.get({ key: "Data_seguro_identificacion" });
      model_seguro.identificacion = value;
    };

    const GetSeguroPoliza = async () => {
      var { value } = await Storage.get({ key: "Data_seguro_poliza" });
      model_seguro.poliza = value;
    };

    const GetMecanicoNombre = async () => {
      var { value } = await Storage.get({ key: "Data_mecanico_nombre" });
      model_mecanico.value.nombre = value;
    };

    const GetMecanicoCorreo = async () => {
      var { value } = await Storage.get({ key: "Data_mecanico_correo" });
      model_mecanico.value.correo = value;
    };

    const GetMecanicoTelefono = async () => {
      var { value } = await Storage.get({ key: "Data_mecanico_telefono" });
      model_mecanico.value.telefono = value;
    };

    const GetMecanicoDireccion = async () => {
      var { value } = await Storage.get({ key: "Data_mecanico_direccion" });
      model_mecanico.value.direccion = value;
    };

    const GetGruaNombre = async () => {
      var { value } = await Storage.get({ key: "Data_grua_nombre" });
      model_grua.value.nombre = value;
    };

    const GetGruaCorreo = async () => {
      var { value } = await Storage.get({ key: "Data_grua_correo" });
      model_grua.value.correo = value;
    };

    const GetGruaTelefono = async () => {
      var { value } = await Storage.get({ key: "Data_grua_telefono" });
      model_grua.value.telefono = value;
    };

    const GetGruaDireccion = async () => {
      var { value } = await Storage.get({ key: "Data_grua_direccion" });
      model_grua.value.direccion = value;
    };

    const GetMantenimientosRealizados = async () => {
      var { value } = await Storage.get({ key: "Data_mantenimientos" });

      console.log(value);
      mantenimientos.value = JSON.parse(value || "{}");
    };

    const setOpen = async (state: boolean) => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {

        isOpenRef.value = state
      }
    };
    const setOpenGrua = async (state: boolean) => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        isOpenRefGrua.value = state
      }
    };
    const setOpenSeguro = async (state: boolean) => {

      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {

        isOpenRefSeguro.value = state
      }

    };
    const setOpenMantenimiento = async (state: boolean) => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {

        isOpenRefMantenimiento.value = state
      }
    };

    let token: any = computed({
      get: () => {
        return store.getters.TOKEN;
      },
      set: (val: any) => {
        store.commit("setTOKEN", val);
      },
    });

    let unidades: any = computed({
      get: () => {
        return store.getters.unidades;
      },
      set: (val: any) => {
        store.commit("setUnidades", val);
      },
    });

    let DataSesa: any = computed({
      get: () => {
        return store.getters.data_sesa;
      },
      set: (val: any) => {
        store.commit("setDaSesa", val);
      },
    });

    let loadingBar: any = computed({
      get: () => {
        return store.getters.loadingBar;
      },
      set: (val: any) => {
        store.commit("SetloadingBar", val);
      },
    });

    let sid: any = computed({
      get: () => {
        return store.getters.sid;
      },
      set: (val) => {
        store.commit("setSid", val);
      },
    });

    let formatDate = (date: any): any => {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return (
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        "  " +
        strTime
      );
    };

    const InitMap = async () => {
      map__.value = L.map("map", { zoomControl: false }).setView([0, 0]);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnVuZXpqdWxpb3QiLCJhIjoiY2t1NG9pNTk3MW8ydDJ4cWdpNnV4ZnZ6aSJ9.b9aMsL-D9kJ09lm4pnzzEg",
        {
          attribution: "",
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoibnVuZXpqdWxpb3QiLCJhIjoiY2t1NG9pNTk3MW8ydDJ4cWdpNnV4ZnZ6aSJ9.b9aMsL-D9kJ09lm4pnzzEg",
        }
      ).addTo(map__.value);
    };

    const initSession = async () => {
      loadingBar.value = true;
      var model = {
        url: `http://plataforma.sesagps.com/wialon/ajax.html?svc=token/login&params={"token":"${token.value}"}`,
      };
      let { data } = await axios.post(
        `https://ftrack.upwaresoft.com/api/init-session`,
        model
      );
      DataSesa.value = data;
      sid__.value = data.eid;
      // bact.value = data.user.bact;
      store.commit("setSid", sid__.value);
      // store.commit('setBact', bact.value)
      getUnits();
    };

    const getUnits = async () => {
      try {
        var model = {
          url: `http://plataforma.sesagps.com/wialon/ajax.html?svc=core/update_data_flags&params={"spec":[{"type":"type","data":"avl_unit","flags":4611686018427387903,"mode":0}]}&sid=${sid__.value}`,
        };

        let { data } = await axios.post(
          `https://ftrack.upwaresoft.com/api/get-units-session`,
          model
        );
        loadingBar.value = false;



        unidades__.value = data;

        unidades__.value.forEach(async (unit: any) => {
          switch (router.currentRoute.value.params.type) {
            case "2":
              if (unit.i == 22222) {
                if (
                  Object.prototype.hasOwnProperty.call(unit.d, "pos") &&
                  unit.d.pos
                ) {
                  var marker;
                  var unitPos = unit.d.pos;
                  map__.value.setView([unitPos.y, unitPos.x], 5);

                  marker = L.marker([unitPos.y, unitPos.x], {
                    draggable: false,
                    icon: L.icon({
                      iconUrl: unit.d.uri,
                      // iconUrl: `https://hst-api.wialon.com${unit.d.uri}`,

                      shadowUrl: "",
                    }),
                  }).on("click", function (e) {
                    SetUniViewMap(unit);
                  });

                  map__.value.setView([unitPos.y, unitPos.x], 12);

                  _markerByUnit[unit.i] = marker;
                  _markerByUnit.value.push(marker);
                  _markerByUnit[unit.i]
                    .setLatLng([unitPos.y, unitPos.x])
                    .addTo(map__.value);
                }
              }
              break;
            case "3":
              if (unit.i == 33333) {
                if (
                  Object.prototype.hasOwnProperty.call(unit.d, "pos") &&
                  unit.d.pos
                ) {
                  var marker;
                  var unitPos = unit.d.pos;
                  map__.value.setView([unitPos.y, unitPos.x], 5);

                  marker = L.marker([unitPos.y, unitPos.x], {
                    draggable: false,
                    icon: L.icon({
                      iconUrl: unit.d.uri,
                      // iconUrl: `https://hst-api.wialon.com${unit.d.uri}`,
                      shadowUrl: "",
                    }),
                  }).on("click", function (e) {
                    SetUniViewMap(unit);
                  });

                  map__.value.setView([unitPos.y, unitPos.x], 12);

                  _markerByUnit[unit.i] = marker;
                  _markerByUnit.value.push(marker);
                  _markerByUnit[unit.i]
                    .setLatLng([unitPos.y, unitPos.x])
                    .addTo(map__.value);
                }
              }
              break;
            case "4":
              if (unit.i == 44444) {
                if (
                  Object.prototype.hasOwnProperty.call(unit.d, "pos") &&
                  unit.d.pos
                ) {
                  var marker;
                  var unitPos = unit.d.pos;
                  map__.value.setView([unitPos.y, unitPos.x], 5);

                  marker = L.marker([unitPos.y, unitPos.x], {
                    draggable: false,
                    icon: L.icon({
                      iconUrl: unit.d.uri,
                      // iconUrl: `https://hst-api.wialon.com${unit.d.uri}`,
                      shadowUrl: "",
                    }),
                  }).on("click", function (e) {
                    SetUniViewMap(unit);
                  });

                  map__.value.setView([unitPos.y, unitPos.x], 12);

                  _markerByUnit[unit.i] = marker;
                  _markerByUnit.value.push(marker);
                  _markerByUnit[unit.i]
                    .setLatLng([unitPos.y, unitPos.x])
                    .addTo(map__.value);
                }
              }
              break;
            default:
              if (unit.i != 44444 && unit.i != 33333 && unit.i != 22222) {
                if (
                  Object.prototype.hasOwnProperty.call(unit.d, "pos") &&
                  unit.d.pos
                ) {
                  await Storage.set({
                    key: unit.i,
                    value: JSON.stringify({
                      mecanico: {},
                      grua: {},
                      mantenimiento: [],
                      seguro: {}
                    }),
                  });
                  unidades.value = data;
                  var marker;
                  var unitPos = unit.d.pos;
                  map__.value.setView([unitPos.y, unitPos.x], 5);

                  marker = L.marker([unitPos.y, unitPos.x], {
                    draggable: false,
                    icon: L.icon({
                      iconUrl: unit.d.uri,
                      // iconUrl: `https://hst-api.wialon.com${unit.d.uri}`,
                      iconSize: [26, 46],
                      shadowUrl: "",
                    }),
                  }).on("click", function (e) {
                    SetUniViewMap(unit);
                  });

                  map__.value.setView([unitPos.y, unitPos.x], 12);

                  _markerByUnit[unit.i] = marker;
                  _markerByUnit.value.push(marker);
                  _markerByUnit[unit.i]
                    .setLatLng([unitPos.y, unitPos.x])
                    .addTo(map__.value);
                }
              }
              break;
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    const SetUniViewMap: any = async (Unit: Object) => {
      try {
        await store.commit("setUnidad", Unit);
        map__.value.setView([unit.value.d.pos.y, unit.value.d.pos.x], 15);

      } catch (e) {
        console.log(e);
      }
    };

    const CmdParqueoSeguro = async () => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        const alert = await alertController.create({
          header: "Alerta",
          subHeader: "Comando Parqueo seguro",
          message: ` ${btn_parqueoseguro.value
            ? "<strong>¿Desea desactivar parqueo seguro?</strong>"
            : "<strong>¿Desea activar parqueo seguro?</strong> "
            }  `,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              id: "cancel-button",
            },
            {
              text: "Okay",
              id: "confirm-button",
              handler: async () => {
                if (!btn_parqueoseguro.value) {
                  btn_parqueoseguro.value = !btn_parqueoseguro.value;
                  var fd: any = new FormData();
                  var fd1: any = new FormData();
                  var params = { key: 'AsaKzgbo2GW8wrcv0mLCyVvEx2Q8V1N54Gpmizw-fzHIKOAjAMMy4TdNfKdS71vs' };
                  var url = `http://dev.virtualearth.net/REST/v1/Locations/${unit.value.d.pos.y},${unit.value.d.pos.x}` + L.Util.getParamString(params);
                  let addres: any = await axios(url);
                  var direccion_Unidad = addres.data.resourceSets[0].resources[0].address.formattedAddress;

                  fd.append("params", `{"n":"Parqueo seguro ${unit.value.d.nm}","d":"${direccion_Unidad}","t":3,"w":100,"f":112,"c":2566966476,"tc":16733440,"ts":12,"min":0,"max":18,"libId":"","path":"","p":[{"x":${unit.value.d.pos.y},"y":${unit.value.d.pos.x},"r":100}],"itemId":26322,"id":${unit.value.i},"callMode":"create"}`);
                  fd.append("sid", sid.value);

                  const response: any = await fetch(
                    `https://plataforma.sesagps.com/wialon/ajax.html?svc=resource/update_zone&sid=${sid.value}`,
                    {
                      method: "POST", // *GET, POST, PUT, DELETE, etc.
                      mode: "no-cors", // no-cors, *cors, same-origin
                      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: "same-origin", // include, *same-origin, omit
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: "follow", // manual, *follow, error
                      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: fd, // body data type must match "Content-Type" header
                    }
                  );

                  model = {
                    icon: unit,
                    comando: "Parqueo Seguro",
                    mensaje: `Se ha activado el parqueo seguro`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    response:
                      response.hasOwnProperty("error") === 7
                        ? "Error del lado del servidor "
                        : "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "Parqueo seguro",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "success",
                  });
                  await toast.present();
                } else {
                  btn_parqueoseguro.value = !btn_parqueoseguro.value;

                  model = {
                    icon: unit,
                    comando: "Parqueo Seguro",
                    mensaje: `Se ha desactivado el parqueo seguro`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    // response: response.hasOwnProperty('error') === 7 ? 'Error del lado del servidor ' : 'Respuesta exitosa del servidor'
                    response: "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "Parqueo seguro",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "success",
                  });
                  await toast.present();
                }
              },
            },
          ],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
      }
    };
    const CmdAperturaDePuertas = async () => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        const alert = await alertController.create({
          header: "Alerta",
          subHeader: "Comando Aperturar pruertas",
          message: `${btn_aperturaDePuertas.value
            ? "<strong>¿Desea cerrar  las pruebas?</strong>"
            : "<strong>¿Desea aperturar  las pruebas?</strong> "
            }  `,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              id: "cancel-button",
            },
            {
              text: "Okay",
              id: "confirm-button",
              handler: async () => {
                if (!btn_aperturaDePuertas.value) {
                  btn_aperturaDePuertas.value = !btn_aperturaDePuertas.value;
                  var fd: any = new FormData();

                  fd.append(
                    "params",
                    `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Apertura de Puertas","linkType":"","param":"2|00:00:03","timeout":60,"flags":0}}],"flags":0}`
                  );
                  fd.append("sid", sid.value);

                  const response: any = await fetch(
                    `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`,
                    {
                      method: "POST", // *GET, POST, PUT, DELETE, etc.
                      mode: "no-cors", // no-cors, *cors, same-origin
                      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: "same-origin", // include, *same-origin, omit
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: "follow", // manual, *follow, error
                      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: fd, // body data type must match "Content-Type" header
                    }
                  );

                  model = {
                    icon: unit,
                    comando: "Apertura/Cierre de Pruertas",
                    mensaje: `Se ha aperturado las pruetas de la unidad`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    response:
                      response.hasOwnProperty("error") === 7
                        ? "Error del lado del servidor "
                        : "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);
                  const toast = await toastController.create({
                    header: "Apertura de pruertas",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "success",
                  });
                  await toast.present();
                } else {
                  var fdn: any = new FormData();
                  btn_aperturaDePuertas.value = !btn_aperturaDePuertas.value;

                  fdn.append(
                    "params",
                    `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Desactivar puertas","linkType":"","param":"2|","timeout":60,"flags":0}}],"flags":0}`
                  );
                  fdn.append("sid", sid.value);

                  const response: any = await fetch(
                    `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`,
                    {
                      method: "POST", // *GET, POST, PUT, DELETE, etc.
                      mode: "no-cors", // no-cors, *cors, same-origin
                      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: "same-origin", // include, *same-origin, omit
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: "follow", // manual, *follow, error
                      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: fdn, // body data type must match "Content-Type" header
                    }
                  );

                  model = {
                    icon: unit,
                    comando: "Apertura/Cierre de Pruertas",
                    mensaje: `Se ha aperturado las pruetas de la unidad`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    response:
                      response.hasOwnProperty("error") === 7
                        ? "Error del lado del servidor "
                        : "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "Apertura/Cierre de pruertas",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "warning",
                  });
                  await toast.present();
                }
              },
            },
          ],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
      }
    };
    const CmdbloqueoAuto = async () => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        const alert = await alertController.create({
          header: "Alerta",
          subHeader: "Comando bloquer motor",
          message: ` ${btn_bloqueoAuto.value
            ? "<strong>¿Desea activar el motor?</strong>"
            : "<strong> ¿Desea desactivar el motor? </strong> "
            }  `,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              id: "cancel-button",
            },
            {
              text: "Okay",
              id: "confirm-button",
              handler: async () => {
                if (!btn_bloqueoAuto.value) {
                  btn_bloqueoAuto.value = !btn_bloqueoAuto.value;

                  var fdn: any = new FormData();

                  fdn.append(
                    "params",
                    `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Bloquear Motor","linkType":"","param":"1|","timeout":60,"flags":0}}],"flags":0}`
                  );
                  fdn.append("sid", sid.value);

                  const response: any = await fetch(
                    `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`,
                    {
                      method: "POST", // *GET, POST, PUT, DELETE, etc.
                      mode: "no-cors", // no-cors, *cors, same-origin
                      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: "same-origin", // include, *same-origin, omit
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: "follow", // manual, *follow, error
                      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: fdn, // body data type must match "Content-Type" header
                    }
                  );

                  model = {
                    icon: unit,
                    comando: "Comando Bloqueo motor",
                    mensaje: `Se ha bloqueado el motor de la unidad`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    response:
                      response.hasOwnProperty("error") === 7
                        ? "Error del lado del servidor "
                        : "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "Bloqueo Motor",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "warning",
                  });
                  await toast.present();
                } else {
                  btn_bloqueoAuto.value = !btn_bloqueoAuto.value;
                  var fd: any = new FormData();

                  fd.append(
                    "params",
                    `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Desbloquear Motor","linkType":"","param":"1|","timeout":60,"flags":0}}],"flags":0}`
                  );
                  fd.append("sid", sid.value);

                  const response: any = await fetch(
                    `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`,
                    {
                      method: "POST", // *GET, POST, PUT, DELETE, etc.
                      mode: "no-cors", // no-cors, *cors, same-origin
                      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                      credentials: "same-origin", // include, *same-origin, omit
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      redirect: "follow", // manual, *follow, error
                      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                      body: fd, // body data type must match "Content-Type" header
                    }
                  );

                  model = {
                    icon: unit,
                    comando: "Comando Desbloquear motor",
                    mensaje: `Se ha Desbloqueado el motor de la unidad`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    response:
                      response.hasOwnProperty("error") === 7
                        ? "Error del lado del servidor "
                        : "Respuesta exitosa del servidor",
                  };
                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "Bloqueo Motor",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    duration: 2000,
                    color: "success",
                  });
                  await toast.present();
                }
              },
            },
          ],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
      }
    };
    const CmdSOS = async () => {
      if (Object.entries(unit.value).length <= 0) {
        const toast = await toastController.create({
          header: "¨¡Advertencia!",
          message: "Debe Seleccionar una unidad",
          position: "top",
          duration: 1000,
          color: "warning",
        });
        await toast.present();
      } else {
        const alert = await alertController.create({
          header: "Alerta",
          subHeader: "Comando S.O.S.",
          message: ` ${btn_bloqueoAuto.value
            ? "<strong>¿ESTA SEGURO QUE DESEA ACTIVAR EL BOTON SOS?</strong>"
            : "<strong>¿ESTA SEGURO QUE DESEA DESACTIVAR EL BOTON SOS?</strong> "
            }  `,
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              id: "cancel-button",
              handler: () => { },
            },
            {
              text: "Okay",
              id: "confirm-button",
              handler: async () => {
                if (!btn_btnSOS.value) {
                  btn_btnSOS.value = !btn_btnSOS.value;

                  model = {
                    icon: unit,
                    comando: "S.O.S",
                    mensaje: `SE HA ACTIVADO LA SEÑAL S.O.S`,
                    nombre: unit,
                    f_notifi: formatDate(new Date()),
                    // response: response.hasOwnProperty('error') === 7 ? 'Error del lado del servidor ' : 'Respuesta exitosa del servidor'
                    response: "Respuesta exitosa del servidor",
                  };

                  store.commit("setNotificaciones", model);

                  const toast = await toastController.create({
                    header: "S.O.S ACTIVADO",
                    message: "Comando Ejecutado con exito",
                    position: "top",
                    color: "danger",
                    buttons: [
                      {
                        side: "start",
                        text: "Desactivar",
                        handler: async () => {
                          model = {
                            icon: unit,
                            comando: "S.O.S",
                            mensaje: `SE HA DESACTIVADO LA SEÑAL S.O.S`,
                            nombre: unit,
                            f_notifi: formatDate(new Date()),
                            // response: response.hasOwnProperty('error') === 7 ? 'Error del lado del servidor ' : 'Respuesta exitosa del servidor'
                            response: "Respuesta exitosa del servidor",
                          };

                          btn_btnSOS.value = !btn_btnSOS.value;

                          store.commit("setNotificaciones", model);

                          const toast = await toastController.create({
                            header: "S.O.S Desactivado",
                            message: "Comando Ejecutado con exito",
                            position: "top",
                            duration: 2000,
                            color: "success",
                          });
                          await toast.present();
                        },
                      },
                    ],
                  });
                  await toast.present();
                } else {
                }
              },
            },
          ],
        });
        await alert.present();
      }
    };

    onIonViewDidEnter(async () => {
      const { value } = await Storage.get({ key: "TOKEN" });
      if (!value) {
        router.push("/login");
      } else {
        store.commit("setTOKEN", value);
        if (!Object.entries(map__.value).length) {
          InitMap();
          initSession();
        }
      }
    });

    onMounted(() => {
      GetMecanicoNombre();
      GetMecanicoCorreo();
      GetMecanicoTelefono();
      GetMecanicoDireccion();
      GetGruaNombre();
      GetGruaCorreo();
      GetGruaTelefono();
      GetGruaDireccion();
      GetSeguroNombre();
      GetSeguroIdentificacion();
      GetSeguroPoliza();
      GetMantenimientosRealizados();
    });

    const openFirst = () => {
      menuController.open("first");
    };
    return {
      modules: [Autoplay],
      isOpenRef,
      isOpenRefGrua,
      setOpen,
      setOpenGrua,
      model_mecanico,
      model_grua,
      model_seguro,
      setOpenSeguro,
      isOpenRefSeguro,
      mantenimientos,
      setOpenMantenimiento,
      isOpenRefMantenimiento,
      openFirst,
      menuController,
      unidades__,
      UnidadSelected,
      SetUniViewMap,
      CmdParqueoSeguro,
      CmdAperturaDePuertas,
      CmdbloqueoAuto,
      CmdSOS
    };
  },
});
</script>
<style scoped>
.content-j {
  background: linear-gradient(180deg,
      rgba(116, 207, 139, 0.838) 10%,
      rgba(32, 140, 255, 0.789) 90%);
  height: 100vh;
}

.divider-j {
  background: white;
  height: 5px;
  border-radius: 50px;
}

.grid-j {
  position: relative;
  top: 5%;
  left: -5px;
}

.menu-j {
  height: 45%;
  position: absolute;
  top: 10%;
  border-radius: 0px 50px 50px 0px;
  width: 300px;
}

.i-item {
  position: absolute;
  top: 5px;
  height: 40px;
  background: red;
  left: 50%;
  width: 70%;
  transform: translate(-30%, 0px);
}

.t-toolbar {
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 1px;
}

.style-j {
  position: absolute;
  background: #ff000000;
  width: 91%;
  top: 100%;
  margin: 0px 3% 0px 4%;
  height: 79px;
  font-family: sans-serif;
  border-radius: 10px 10px 10px 10px;
  transform: translate(0px, -250%);
}

ion-backdrop {
  display: none !important;
}
</style>
