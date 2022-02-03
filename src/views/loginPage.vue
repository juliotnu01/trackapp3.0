<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
          <ion-label position="floating">TEST</ion-label>
          <ion-input type="password" id="password" required v-model="TOKEN" />
          <ion-button type="submit" shape="round" @click="redirecMap()">
            Entrar
          </ion-button>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonInput,  } from '@ionic/vue';
import { Storage } from '@capacitor/storage';
import { defineComponent,  ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonLabel, IonInput },
    setup() {
        const router = useRouter();
        const TOKEN = ref()

        const redirecMap = async () => {
          await Storage.set({
                key: 'TOKEN',
                value: `${TOKEN.value}`,
          });
          router.push('/tabs/tab1');
        };
        
        return {
          redirecMap,
          TOKEN
        }
    }
})
</script>