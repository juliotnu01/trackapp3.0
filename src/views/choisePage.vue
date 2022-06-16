<template>
    <ion-page>
        <!-- <ion-header>
            <ion-toolbar>
                <ion-title>Seleccionar tipo de unidad</ion-title>
            </ion-toolbar>
        </ion-header> -->
        <ion-content :fullscreen="true">
              <div class="g-background" />
            <div class="contenedor_btns">
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large" @click="goToViewMap(2)">
                            <img
                                src="https://img.icons8.com/external-filled-outline-geotatah/150/000000/external-pet-pet-lover-society-filled-outline-filled-outline-geotatah-20.png" />
                        </ion-button>
                    </div>
                </div>
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large" @click="goToViewMap(1)">
                            <img
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/150/000000/external-cars-automotive-ecommerce-flaticons-lineal-color-flat-icons-2.png" />
                        </ion-button>
                    </div>
                </div>
                <div class="container-buttoms">
                    <div class="item-container-buttom">
                        <ion-button class="personal-ion-btn" size="large" @click="goToViewMap(4)">
                            <img src="https://img.icons8.com/fluency/150/000000/search-client.png" />
                        </ion-button>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {
    IonPage,
    IonContent,
    IonButton
    // onIonViewDidEnter 
} from '@ionic/vue';
// import { Storage } from '@capacitor/storage';
import {
    defineComponent,
    // ref 
} from "vue";
import { useRouter } from "vue-router";
// import axios from "axios";
// import { useStore } from 'vuex'


export default defineComponent({
    components: {IonContent, IonPage, IonButton },

    setup() {
        const router = useRouter()
        const goToViewMap = (prm: number): any => {
            router.push(`/tabs/tab2/${prm}`)
        }
        return {
            goToViewMap
        }
    }
})
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
    position: relative;
    top: 50%;
    transform: translate(0px, -90%);
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
.g-background {
    background: linear-gradient(180deg, rgba(116, 207, 139, 0.6643032212885154) 10%, rgba(32, 140, 255, 0.6643032212885154) 90%);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;

}
</style>