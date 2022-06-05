<template>
  <ion-page>
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
            <ion-input v-model="var_computed_mecanico_nombre"></ion-input>
          </ion-item>
            <ion-item>
            <ion-label position="floating">Correo</ion-label>
            <ion-input v-model="var_computed_mecanico_correo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Numero de telefono</ion-label>
            <ion-input v-model="var_computed_mecanico_telefono"></ion-input>
            <a href="tel:1-562-867-5309">Click to Call!</a>

          </ion-item>
          
          <ion-item>
            <ion-label position="floating">Dirección</ion-label>
            <ion-input v-model="var_computed_mecanico_direccion"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card style="margin-bottom: 90px;">
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
            <ion-input v-model="var_computed_grua_nombre"></ion-input>
          </ion-item>
            <ion-item>
            <ion-label position="floating">Correo</ion-label>
            <ion-input v-model="var_computed_grua_correo"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Numero de telefono</ion-label>
            <ion-input v-model="var_computed_grua_telefono"></ion-input>
            <a href="tel:1-562-867-5309">Click to Call!</a>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Dirección</ion-label>
            <ion-input v-model="var_computed_grua_direccion"></ion-input>
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
import mixinMecanico from "./mixing/MecanicoMixing.vue";
import mixinGrua from "./mixing/GruaMixing.vue";

export default {
  mixins: [mixinMecanico, mixinGrua],
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
