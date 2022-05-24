<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Notificaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 3</ion-title>
                </ion-toolbar>
            </ion-header>
            <!-- List of Text Items -->
            <ion-list>
                <ion-item v-for="(value, n) in notificaciones" :key="n">
                    <ion-avatar slot="start">
                        <img :src="value.icon.d.uri">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{ value.nombre.d.nm }}</h2>
                        <h3>{{ value.comando }}</h3>
                        <p> {{ value.mensaje }} </p>
                        <p > {{ value.response  }} </p>
                        <p class="float-right " > {{ value.f_notifi }} </p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from "vue";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    // IonListHeader,
    // IonCheckbox, 
    // IonInput, 
    IonItem,
    // IonItemOption, 
    // IonItemOptions, 
    // IonItemSliding, 
    IonList,
    IonLabel,
    // IonRadio, 
    // IonToggle,
    IonAvatar,
} from '@ionic/vue';


export default defineComponent({
    name: 'Tab3',
    setup(){
        const store = useStore();

        const notificaciones = computed({

            get: () => { return store.getters.notificaciones },
            set: (val) => { store.commit('setNotificaciones', val) }

        });
      return {
        store,
        notificaciones
      }
    },
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        // IonListHeader,
        // IonCheckbox, 
        // IonInput, 
        IonItem,
        // IonItemOption, 
        // IonItemOptions, 
        // IonItemSliding, 
        IonList,
        IonLabel,
        // IonRadio, 
        // IonToggle,
        IonAvatar,
    }

})
</script>