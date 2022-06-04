<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->
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
            <ion-input v-model="var_computed_mecanico_nombre"></ion-input>
          </ion-item>
            <ion-item>
            <ion-label position="floating">Correo</ion-label>
            <ion-input v-model="var_computed_mecanico_correo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Numero de telefono</ion-label>
            <ion-input v-model="var_computed_mecanico_telefono"></ion-input>
          </ion-item>
          
          <ion-item>
            <ion-label position="floating">Dirección</ion-label>
            <ion-input v-model="var_computed_mecanico_direccion"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
} from "@ionic/vue";
// import { defineComponent } from "vue";
// import { useStore } from "vuex";
// import { Storage } from "@capacitor/storage";
import mixinMecanico from "./mixing/MecanicoMixing.vue";

export default {
  mixins: [mixinMecanico],
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
  },
  
};
</script>
