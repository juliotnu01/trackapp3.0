<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="contenedor_map">
                <div class="item-container">
                    <div id="mapid2" style="width: 100%; height: 100%; " />
                </div>
            </div>
            <div class="contenedor_btns">
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large">
                            <img src="assets/icon/2.png" v-if="btn_parqueoseguro">
                            <img src="assets/icon/1.2.png" v-else>
                        </ion-button>
                    </div>
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large">
                            <img src="assets/icon/Aperura-4.png" v-if="btn_aperturaDePuertas">
                            <img src="assets/icon/Apertura-3.png" v-else>
                        </ion-button>
                    </div>
                </div>
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large">
                            <img src="assets/icon/Desbloqueo.png" v-if="btn_bloqueoAuto">
                            <img src="assets/icon/Bloqueo-2.png" v-else>
                        </ion-button>
                    </div>
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large">
                            <img src="assets/icon/Botón SOS.png">
                        </ion-button>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {
    // IonRow, 
    // IonCol, 
    // IonGrid,
    IonPage,
    IonButton,
    IonContent,
    onIonViewDidEnter,
    // alertController,
    // toastController
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
import { useStore } from 'vuex'
// import axios from "axios";

export default defineComponent({
    components: {
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
            get: () => { return store.getters.unidad },
            set: (val) => { store.commit('setUnidad', val) }
        });

        const store: any = useStore();
        const InitMap = (): any => {
            map__.value = L.map("mapid2").setView([0, 0], 2);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnVuZXpqdWxpb3QiLCJhIjoiY2t1NG9pNTk3MW8ydDJ4cWdpNnV4ZnZ6aSJ9.b9aMsL-D9kJ09lm4pnzzEg", {
                    attribution: "",
                    maxZoom: 18,
                    id: "mapbox/streets-v11",
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: "pk.eyJ1IjoibnVuZXpqdWxpb3QiLCJhIjoiY2t1NG9pNTk3MW8ydDJ4cWdpNnV4ZnZ6aSJ9.b9aMsL-D9kJ09lm4pnzzEg",
                }
            ).addTo(map__.value);
        }
        const LoadUnit = (): any => {
            try{
                map__.value.setView([unit.value.d.pos.y, unit.value.d.pos.x], 20);
               var m =  L.marker([unit.value.d.pos.y, unit.value.d.pos.x], {
                    icon: L.icon({
                        iconUrl: `http://plataforma.sesagps.com${unit.value.d.uri}`,
                        // iconUrl: `https://hst-api.wialon.com${unit.value.d.uri}`,
                        iconAnchor: [26, 19],
                        shadowUrl: "",
                        iconSize: [27, 38],
                    }),
                })
                m.addTo(map__.value);
            }catch(e){
                console.log(e)
            }
        }
        onIonViewDidEnter((): any => {
            InitMap();
            LoadUnit();
        })

        return {

        }
    }
});
</script>
<style scoped>
.contenedor_map {
    background: red;
    width: 100%;
    height: 45vh;
    display: grid;
    align-content: stretch;
}

.contenedor_btns {
    width: 100%;
    height: 50vh;
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
</style>