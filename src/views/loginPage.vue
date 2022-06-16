<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="g-background" />
            <img src="/img/Logo blanco.png" class="l-login" />
            <ion-item class="itemToken">
                <ion-label position="floating">TOKEN DE SEGURIDAD</ion-label>
                <ion-input v-model="TOKEN" @change="StoreAndLoginToken" />
            </ion-item>
            <ion-button fill="clear" class="btn-inicio">
                ¿Olvido su contraseña? <br />recuperar aqui.
            </ion-button>

        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {
    IonPage,
    IonContent,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    onIonViewDidEnter
} from '@ionic/vue';
import { Storage } from '@capacitor/storage';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import axios from "axios";
import { useStore } from 'vuex'


export default defineComponent({
    components: {
        IonContent,
        IonPage,
        IonLabel,
        IonItem,
        IonInput,
        IonButton
    },
    setup() {
        const router = useRouter();
        const TOKEN: any = ref()
        const store: any = useStore();

        const redirecMap = async () => {
            await Storage.set({
                key: 'TOKEN',
                value: `${TOKEN.value}`,
            });
            router.push('/choise-type-page');
        };

        const StoreAndLoginToken: any = async () => {
            try {
                redirecMap()
            } catch (e) {
                console.log(e)
            }
        }
        onIonViewDidEnter(async () => {
            const { value } = await Storage.get({ key: 'TOKEN' });
            if(value){
                store.commit('setTOKEN', value)
                router.push('/choise-type-page')
            }
        })
        return {
            StoreAndLoginToken,
            TOKEN,
        }
    }
})
</script>
<style scoped>
.g-background {
    background: linear-gradient(180deg, rgba(116, 207, 139, 0.6643032212885154) 10%, rgba(32, 140, 255, 0.6643032212885154) 90%);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;

}

.itemToken {
    position: absolute;
    top: 10px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 600%);
    border-radius: 20px;
    box-shadow: -1px 2px 5px 0px;
}

.l-login {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translate(-50%, 40%);
}

.btn-inicio {
    position: absolute;
    bottom: 30px;
    color: white;
    text-align: center;
    transform: translate(-50%, 0px);
    left: 50%;
    text-transform: initial;
}
</style>