<template>
  <ion-page>
    <!-- <ion-header>
            <ion-toolbar>
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header> -->
    <ion-content :fullscreen="true">
      <div id="map" style="width: 100%; height: 100%; z-index: 1" />
      <swiper class="style-j">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
/* eslint-disable */
import {
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
} from "@ionic/vue";
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useStore } from "vuex";
import { Storage } from "@capacitor/storage";

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
  },
  setup() {
    const map__: any = ref({});
    const sid__: any = ref("");
    const unidades__: any = ref([]);
    const _markerByUnit: any = ref([]);
    const router: any = useRouter();
    const store: any = useStore();

    let token: any = computed({
      get: () => {
        return store.getters.TOKEN;
      },
      set: (val: any) => {
        store.commit("setTOKEN", val);
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
      DataSesa.value = data
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

        data[data.length + 1] = {
          i: 22222,
          f: 4611686018427388000,
          d: {
            uri: "https://ftrack.upwaresoft.com/storage/perro.png",
            pos: {
              c: 163,
              f: 1073741825,
              lc: 0,
              s: 0,
              sc: 8,
              t: 1646028780,
              x: -78.4666708,
              y: -0.0671086,
              z: 2621,
            },
          },
        };
        data[data.length + 2] = {
          i: 33333,
          f: 4611686018427388000,
          d: {
            uri: "https://ftrack.upwaresoft.com/storage/bicicleta.png",
            pos: {
              c: 163,
              f: 1073741825,
              lc: 0,
              s: 0,
              sc: 8,
              t: 1646028780,
              x: -78.4704517,
              y: -0.0680566,
              z: 2621,
            },
          },
        };
        data[data.length + 3] = {
          i: 44444,
          f: 4611686018427388000,
          d: {
            uri: "https://ftrack.upwaresoft.com/storage/humano.png",
            pos: {
              c: 163,
              f: 1073741825,
              lc: 0,
              s: 0,
              sc: 8,
              t: 1646028780,
              x: -78.4725038,
              y: -0.0687681,
              z: 2621,
            },
          },
        };

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
        // setInterval(() => listenEventUnits(), 5000);
      } catch (error) {
        console.log(error);
      }
    };

    const SetUniViewMap: any = (Unit: Object) => {
      try {
        router.push("/tabs/view-unit");
        store.commit("setUnidad", Unit);
      } catch (e) {
        console.log(e);
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

    return {};
  },
});
</script>
<style scoped>
.style-j {
  position: absolute;
  background: red;
  width: 91%;
  top: 100%;
  margin: 0px 3% 0px 4%;
  height: 79px;
  font-family: sans-serif;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 2px 10px -3px;
  transform: translate(0px, -250%);
}
</style>
