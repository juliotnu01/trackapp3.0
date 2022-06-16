<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-slides>
                <ion-slide>
                    <div class="slide">
                        <div class="g-background" />
                        <img src="/img/Logo blanco.png" class="logo-s" />
                        <img src="/img/Foto ingreso camion.jpg" class="img-s" />
                        <p>
                            Seguimiento integral de float de vehiculos y float de transportes.
                        </p>
                        <ion-button fill="clear" class="btn-inicio"  href="/login"> Inicio
                        </ion-button>

                    </div>
                </ion-slide>
                <ion-slide>
                    <div class="slide">
                        <div class="g-background" />
                        <img src="/img/Logo blanco.png" class="logo-s" />
                        <img src="/img/Foto ingreso mascota.jpg" class="img-s" />
                        <p>
                            Encuentra tu mascota fácil y nunca la pierdas de vista
                        </p>
                        <ion-button fill="clear" class="btn-inicio" href="/login"> Inicio
                        </ion-button>

                    </div>
                </ion-slide>
                <ion-slide>
                    <div class="slide">
                        <div class="g-background" />
                        <img src="/img/Logo blanco.png" class="logo-s" />
                        <img src="/img/Foto ingreso adulto mayor.jpg" class="img-s" />
                        <p>
                            A veces los adultos pueden perderse... no lo permitas con sesa
                        </p>
                        <ion-button fill="clear" class="btn-inicio" href="/login"> Inicio
                        </ion-button>

                    </div>
                </ion-slide>
            </ion-slides>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {
    IonPage,
    // IonHeader,
    // IonToolbar,
    IonTitle,
    IonContent,
    IonSlides,
    IonSlide,
    IonButton,
    IonAvatar
} from '@ionic/vue';
import { defineComponent } from "vue";
// import { useRouter } from "vue-router";
// import axios from "axios";
// import { useStore } from 'vuex'

// import fotoCamion from '/img/Foto ingreso camion.jpg';
// import logoSesa from '/img/Logo blanco.png';


export default defineComponent({
    compoenents: {
        IonPage,
        IonTitle,
        IonContent,
        IonSlides,
        IonSlide,
        IonButton,
        IonAvatar,
    },
    setup() {
        return {
        }
    }
})
</script>
<style scoped>
ion-slides {
    height: 100%;
}

.swiper-slide {
    display: block;
}

.swiper-slide h2 {
    margin-top: 2.8rem;
}


b {
    font-weight: 500;
}

p {
    padding: 0 40px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ion-color-step-600, #60646b);
}

p b {
    color: var(--ion-text-color, #000000);
}

.slide {
    width: 100%;
    background: red;
    height: 100%;
    position: absolute;
}

.slide p {
    position: absolute;
    bottom: 100px;
    font-size: 24px;
    font-family: inherit;
    font-weight: bold;
    color: white;
}

.g-background {
    background: linear-gradient(180deg, rgba(116, 207, 139, 0.6643032212885154) 10%, rgba(32, 140, 255, 0.6643032212885154) 90%);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;

}

.img-s {
    width: 100%;
    height: 100%;

}

.btn-inicio {
    position: absolute;
    bottom: 30px;
    color: white;
    text-align: center;
    transform: translate(-50%, 0px);
}

.logo-s {
    position: absolute;
    transform: translate(-50%, -130%);
    left: 50%;
    top: 50%;
    width: 200px;
}
</style>