<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- <div class="contenedor_map">
        <div class="item-container">
          <div id="mapid2" style="width: 100%; height: 100%" />
        </div>
      </div> -->
      <!-- <div
        class="contenedor_btns overflow-y-scroll"
        v-if="unit.i != 22222 && unit.i != 33333 && unit.i != 44444"
      >
        <div class="grid grid-cols-2 gap-2 gap-y-0 mr-4 ml-4">
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdParqueoSeguro"
            :class="
              btn_parqueoseguro
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_parqueoseguro
                    ? 'bg-[#00577B] text-white'
                    : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Parqueo Seguro</h4>
                </div>
                <div
                  class="row-span-9 p-1 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdAperturaDePuertas"
            :class="
              btn_aperturaDePuertas
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_aperturaDePuertas
                    ? 'bg-[#00577B] text-white'
                    : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Apertura de Puertas</h4>
                </div>
                <div
                  class="row-span-9 p-1 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 gap-y-0 mr-4 ml-4">
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdbloqueoAuto"
            :class="
              btn_bloqueoAuto
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_bloqueoAuto ? 'bg-[#00577B] text-white' : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Bloquer motor</h4>
                </div>
                <div
                  class="row-span-9 p-1 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdSOS"
            :class="
              btn_btnSOS
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_btnSOS ? 'bg-[#00577B] text-white' : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>S.O.S</h4>
                </div>
                <div
                  class="row-span-9 p-1 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!--   <div class="contenedor_btns" v-else>
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large" @click="CmdGetUbicacion">
                            <img src="https://img.icons8.com/ios/150/000000/where.png" />
                        </ion-button>
                    </div>
                </div>
            </div> -->

      <div id="mapid2" style="width: 100%; height: 100%; z-index: 1" />
      <swiper class="style-j" :autoplay="true">
        <swiper-slide>
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdParqueoSeguro"
            :class="
              btn_parqueoseguro
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_parqueoseguro
                    ? 'bg-[#00577B] text-white'
                    : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Parqueo Seguro</h4>
                </div>
                <div
                  class="row-span-9 content-center text-justify font-serif text-[10px] pb-3 pr-5 pb-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdAperturaDePuertas"
            :class="
              btn_aperturaDePuertas
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_aperturaDePuertas
                    ? 'bg-[#00577B] text-white'
                    : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Apertura de Puertas</h4>
                </div>
                <div
                  class="row-span-9 content-center text-justify font-serif text-[10px] pb-3 pr-5 pb-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdbloqueoAuto"
            :class="
              btn_bloqueoAuto
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_bloqueoAuto ? 'bg-[#00577B] text-white' : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>Bloquer motor</h4>
                </div>
                <div
                  class="row-span-9 pb-5 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
        <swiper-slide
          ><div
            class="grid grid-cols-12 h-fit shadow-[0_-1px_5px_0px_rgba(0,0,0,0.3)] rounded-lg"
            @click="CmdSOS"
            :class="
              btn_btnSOS
                ? 'bg-[#00577B] text-white shadow-[0_-1px_5px_0px_rgba(0,87,123,1)] rounded-lg'
                : 'text-[#00577B]'
            "
          >
            <div
              class="grid col-span-4 justify-center content-center rounded-l-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-red text-red red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                stroke-width="2"
                :class="
                  btn_btnSOS ? 'bg-[#00577B] text-white' : 'text-[#00577B]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <div class="grid col-span-8 rounded-r-lg">
              <div class="grid grid-rows-12 ga-4">
                <div class="row-span-3 font-serif p-1">
                  <h4>S.O.S</h4>
                </div>
                <div
                  class="row-span-9 p-1 content-center text-justify font-serif text-[10px] pb-3 pr-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
/* eslint-disable */
import {
  // IonRow,
  // IonCol,
  // IonGrid,
  IonPage,
  IonButton,
  IonContent,
  onIonViewDidEnter,
  alertController,
  toastController,
} from "@ionic/vue";

import {
  defineComponent,
  ref,
  // onMounted,
  computed,
  // reactive,
} from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useStore } from "vuex";
import axios from "axios";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    // IonRow,
    // IonCol,
    // IonGrid,
    IonPage,
    IonButton,
    IonContent,
  },

  setup() {
    const map__: any = ref({});
    let unit: any = computed({
      get: () => {
        return store.getters.unidad;
      },
      set: (val) => {
        store.commit("setUnidad", val);
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

    const store: any = useStore();
    let btn_aperturaDePuertas: any = ref(null);
    let btn_parqueoseguro: any = ref(null);
    let btn_bloqueoAuto: any = ref(null);
    let btn_btnSOS: any = ref(null);
    let btn_get_ubicacion: any = ref(null);
    let model: any = ref({});

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
    const InitMap = (): any => {
      map__.value = L.map("mapid2", { zoomControl: false }).setView([0, 0], 2);
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
    const LoadUnit = (): any => {
      try {
        map__.value.setView([unit.value.d.pos.y, unit.value.d.pos.x], 15);
        var m = L.marker([unit.value.d.pos.y, unit.value.d.pos.x], {
          icon: L.icon({
            iconUrl: unit.value.d.uri,
            // iconUrl: `https://hst-api.wialon.com${unit.value.d.uri}`,
            iconAnchor: [26, 19],
            shadowUrl: "",
            iconSize: [27, 38],
          }),
        });
        m.addTo(map__.value);
      } catch (e) {
        console.log(e);
      }
    };
    const CmdAperturaDePuertas = async () => {
      const alert = await alertController.create({
        header: "Alerta",
        subHeader: "Comando Aperturar pruertas",
        message: ` ${
          btn_aperturaDePuertas.value
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
    };
    const CmdParqueoSeguro = async () => {
      const alert = await alertController.create({
        header: "Alerta",
        subHeader: "Comando Parqueo seguro",
        message: ` ${
          btn_parqueoseguro.value
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
                var params = {
                  key: "AsaKzgbo2GW8wrcv0mLCyVvEx2Q8V1N54Gpmizw-fzHIKOAjAMMy4TdNfKdS71vs",
                };
                var url =
                  `http://dev.virtualearth.net/REST/v1/Locations/${unit.value.d.pos.y},${unit.value.d.pos.x}` +
                  L.Util.getParamString(params);
                let addres: any = await axios(url);
                var direccion_Unidad =
                  addres.data.resourceSets[0].resources[0].address
                    .formattedAddress;

                fd.append(
                  "params",
                  `{"n":"Parqueo seguro ${unit.value.d.nm}","d":"${direccion_Unidad}","t":3,"w":100,"f":112,"c":2566966476,"tc":16733440,"ts":12,"min":0,"max":18,"libId":"","path":"","p":[{"x":${unit.value.d.pos.y},"y":${unit.value.d.pos.x},"r":100}],"itemId":26322,"id":${unit.value.i},"callMode":"create"}`
                );
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

                // var fd: any = new FormData();
                // fd.append('params', `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Desactivar puertas","linkType":"","param":"2|","timeout":60,"flags":0}}],"flags":0}`)
                // fd.append('sid', sid.value);
                // fd.append('url', `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`);

                // const response = await fetch(`https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`, {
                //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //     mode: 'no-cors', // no-cors, *cors, same-origin
                //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //     credentials: 'same-origin', // include, *same-origin, omit
                //     headers: {
                //         'Content-Type': 'application/json'
                //         // 'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                //     redirect: 'follow', // manual, *follow, error
                //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                //     body: fd // body data type must match "Content-Type" header
                // });

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
    };
    const CmdbloqueoAuto = async () => {
      const alert = await alertController.create({
        header: "Alerta",
        subHeader: "Comando bloquer motor",
        message: ` ${
          btn_bloqueoAuto.value
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
    };
    const CmdSOS = async () => {
      const alert = await alertController.create({
        header: "Alerta",
        subHeader: "Comando S.O.S.",
        message: ` ${
          btn_bloqueoAuto.value
            ? "<strong>¿ESTA SEGURO QUE DESEA ACTIVAR EL BOTON SOS?</strong>"
            : "<strong>¿ESTA SEGURO QUE DESEA DESACTIVAR EL BOTON SOS?</strong> "
        }  `,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
            handler: () => {},
          },
          {
            text: "Okay",
            id: "confirm-button",
            handler: async () => {
              if (!btn_btnSOS.value) {
                btn_btnSOS.value = !btn_btnSOS.value;
                // var fdn: any = new FormData();

                // fdn.append('params', `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Bloquear Motor","linkType":"","param":"1|","timeout":60,"flags":0}}],"flags":0}`)
                // fdn.append('sid', sid.value);

                // const response: any = await fetch(`https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`, {
                //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //     mode: 'no-cors', // no-cors, *cors, same-origin
                //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //     credentials: 'same-origin', // include, *same-origin, omit
                //     headers: {
                //         'Content-Type': 'application/json'
                //         // 'Content-Type': 'application/x-www-form-urlencoded',
                //     },
                //     redirect: 'follow', // manual, *follow, error
                //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                //     body: fdn // body data type must match "Content-Type" header
                // });

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
    };
    const CmdGetUbicacion = async () => {
      const alert = await alertController.create({
        header: "Alerta",
        subHeader: "Obtener Ubicación",
        message: ` ${
          btn_get_ubicacion.value
            ? "<strong>¿Desea Obtener Ubicacion del dispositivo?</strong>"
            : "<strong>¿Desea Obtener Ubicacion del dispositivo?</strong> "
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
              if (!btn_get_ubicacion.value) {
                // fd.append('params', `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Apertura de Puertas","linkType":"","param":"2|00:00:03","timeout":60,"flags":0}}],"flags":0}`)
                // fd.append('sid', sid.value);
                // fd.append('url', `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=51a0923f0eb260c2a8cb0b42d39d93e7`);

                // await axios.post(`http://localhost:8000/api/cmd-apertura-de-púertas`, fd);
                // await axios.post(`https://ftrack.upwaresoft.com/api/init-session`, fd );

                const toast = await toastController.create({
                  header: "Obtener Ubicacion",
                  message: "Comando Ejecutado con exito",
                  position: "top",
                  duration: 2000,
                  color: "success",
                });
                await toast.present();
              } else {
                //     model = {
                //         icon: marker.value.options.icon.options.iconUrl,
                //         comando: 'Apertura/Cierre de Pruertas',
                //         mensaje: `Se ha Cerrado las pruetas de la unidad`,
                //         nombre: `${unidad.d.nm}`
                //     };
                // store.commit('setNotificaciones', model)

                btn_get_ubicacion.value = !btn_get_ubicacion.value;

                // fd.append('params', `{"params":[{"svc":"unit/exec_cmd","params":{"itemId":51591,"commandName":"Desactivar puertas","linkType":"","param":"2|","timeout":60,"flags":0}}],"flags":0}`)
                // fd.append('sid', sid.value);
                // fd.append('url', `https://plataforma.sesagps.com/wialon/ajax.html?svc=core/batch&sid=${sid.value}`);

                // await axios.post(`http://localhost:8000/api/cmd-apertura-de-púertas`, fd);
                // await axios.post(`https://ftrack.upwaresoft.com/api/init-session`, fd );

                const toast = await toastController.create({
                  header: "Obtener Ubicacion",
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
    };

    onIonViewDidEnter((): any => {
      if (!Object.entries(map__.value).length) {
        InitMap();
      }
      LoadUnit();
    });

    return {
      CmdbloqueoAuto,
      CmdSOS,
      CmdParqueoSeguro,
      CmdAperturaDePuertas,
      btn_parqueoseguro,
      btn_aperturaDePuertas,
      btn_bloqueoAuto,
      btn_btnSOS,
      unit,
      CmdGetUbicacion,
      modules: [Autoplay],
    };
  },
});
</script>
<style scoped>
.contenedor_map {
  background: red;
  width: 100%;
  height: 40vh;
  display: grid;
  align-content: stretch;
}

.contenedor_btns {
  margin-top: 15px;
  width: 100%;
  height: 49vh;
  display: grid;
  align-content: stretch;
}

.container-buttoms {
  display: flex;
  align-content: stretch;
  align-items: stretch;
  justify-content: space-around;
}

.item-container-buttom {
  height: 200px;
}

.personal-ion-btn {
  width: 180px;
  height: 200px;
  --background: none;
}
.ion-icon {
  color: blue;
}
.style-j {
  position: absolute;
  background: #ffffff;
  width: 91%;
  top: 100%;
  margin: 0px 3% 0px 4%;
  height: 79px;
  font-family: sans-serif;
  border-radius: 10px 10px 10px 10px;
  transform: translate(0px, -250%);
  box-shadow: 0px 1px 6px 0px;
}
</style>
