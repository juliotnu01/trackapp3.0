<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/tab1">
                    <ion-icon src="/svg/person-outline.svg"></ion-icon>
                    <ion-label>Mi Perfil </ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab2" href="/tabs/tab2">
                    <ion-icon src="/svg/map-outline.svg"></ion-icon>
                    <ion-label>Mapa</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab3" href="/tabs/tab3">
                    <ion-icon src="/svg/notifications-outline.svg"></ion-icon>
                    <ion-label>Notificaciones</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab4" href="/tabs/tab4">
                    <ion-icon src="/svg/options-outline.svg"></ion-icon>
                    <ion-label><small> Configuración </small></ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
<script>
/* eslint-disable */
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
} from "@ionic/vue";
// import { ellipse, square, triangle } from 'ionicons/icons';

export default {
    name: "Tabs",
    components: {
        IonLabel,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonPage,
        IonRouterOutlet,
    },
    setup() {
        return {
            // ellipse,
            // square,
            // triangle,
        };
    },
};
</script>