<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title></ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="map" style="width: 100%; height: 100%; z-index: 1" />
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    /* eslint-disable */
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , onIonViewDidEnter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useStore } from 'vuex'


export default defineComponent({
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel  },
    setup() {
        const map__ : any = ref({});
        const sid__ : any = ref('');
        const unidades__ : any = ref([]);
        const _markerByUnit: any = ref([]);
        let unidades_aceptables: any = ref([]);
        const router: any = useRouter();
        const store: any = useStore();

        const InitMap = async () =>  {
            map__.value = L.map("map").setView([10.6764195, -71.6881817], 18);
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

        const initSession = async () => {
                var model = {
                    url: `http://plataforma.sesagps.com/wialon/ajax.html?svc=token/login&params={"token":"d3c7bde835d5ed39de184b2751e1bcb859B1DE79FE9E327B71E628F8FE58E208E78031E7"}`,
                    // url: `https://hst-api.wialon.com/wialon/ajax.html?svc=token/login&params={"token":"5dce19710a5e26ab8b7b8986cb3c49e58C291791B7F0A7AEB8AFBFCEED7DC03BC48FF5F8"}`,
                };
                let { data } = await axios.post(`https://ftrack.upwaresoft.com/api/init-session`, model, { headers: {"Access-Control-Allow-Origin": "*"} });
                sid__.value = data.eid;
            // bact.value = data.user.bact;
            // store.commit('setSid', sid.value)
            // store.commit('setBact', bact.value)
            getUnits();
        }

        const getUnits = async () => {
            try {
                var model = {
                    url: `http://plataforma.sesagps.com/wialon/ajax.html?svc=core/update_data_flags&params={"spec":[{"type":"type","data":"avl_unit","flags":4611686018427387903,"mode":0}]}&sid=${sid__.value}`,
                    // url: `https://hst-api.wialon.com/wialon/ajax.html?svc=core/update_data_flags&params={"spec":[{"type":"type","data":"avl_unit","flags":4611686018427387903,"mode":0}]}&sid=${sid.value}`,
                };
                let { data } = await axios.post(`https://ftrack.upwaresoft.com/api/get-units-session`, model);
                unidades__.value = data;

                unidades__.value.forEach((unit: any) => {
                    if (Object.prototype.hasOwnProperty.call(unit.d, "pos") && unit.d.pos) {
                        unidades_aceptables.value.push(unit);
                        var marker;
                        var unitPos = unit.d.pos;
                        map__.value.setView([unitPos.y, unitPos.x], 5);
                        marker = L.marker([unitPos.y, unitPos.x], {
                                draggable: false,
                                icon: L.icon({
                                    iconUrl: `http://plataforma.sesagps.com${unit.d.uri}`,
                                    // iconUrl: `https://hst-api.wialon.com${unit.d.uri}`,
                                    iconSize: [26,46],
                                    shadowUrl: "",
                                    
                                }),
                            })
                            .on('click', function(e){
                                SetUniViewMap(unit);
                            });

                            map__.value.setView([unitPos.y, unitPos.x], 12);

                        _markerByUnit[unit.i] = marker;
                        _markerByUnit.value.push(marker);
                        _markerByUnit[unit.i].setLatLng([unitPos.y, unitPos.x]).addTo(map__.value);

                    }
                });

                // setInterval(() => listenEventUnits(), 5000);
            } catch (error) {
                console.log(error);
            }
        };

        const SetUniViewMap: any = (Unit: Object) => {
            try{
                router.push('/view-unit')
                store.commit('setUnidad', Unit)
            }catch(e){
                console.log(e)
            }
        }
        onIonViewDidEnter(async () => {
            if(!Object.entries(map__.value).length){
                InitMap();
            }
            initSession();
        })


        return {

        }
    }
})
</script>