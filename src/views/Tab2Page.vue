<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tab 2</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="map" style="width: 100%; height: 100%; z-index: 1" />
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , onIonViewDidEnter } from '@ionic/vue';
import { defineComponent } from "vue";
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';


export default defineComponent({
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    setup() {
        onIonViewDidEnter(() => {
            new Map({
                layers: [
                    new TileLayer({ source: new OSM() })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2
                }),
                target: 'map'
            });
        })


        return {

        }
    }
})
</script>