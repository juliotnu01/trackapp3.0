<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

       <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
      <ion-progress-bar
        type="indeterminate"
        v-show="loadingBar"
      ></ion-progress-bar>
      <ion-tab-bar
        slot="bottom"
        class="ml-4 mr-4 mb-5 shadow shadow-black rounded absolute w-11/12 bottom-2"
      >
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
<script lang="ts">
/* eslint-disable */
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  onIonViewWillEnter,
  IonProgressBar,
} from "@ionic/vue";
// import { ellipse, square, triangle } from 'ionicons/icons';
import { useRouter } from "vue-router";
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: "Tabs",
  components: {
      Swiper,
      SwiperSlide,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
    IonProgressBar,
  },
  setup() {
    const router: any = useRouter();
    const store: any = useStore();

    let loadingBar: any = computed({
      get: () => {
        return store.getters.loadingBar;
      },
      set: (val: any) => {
        store.commit("SetloadingBar", val);
      },
    });

    onMounted(() => {
      console.log(router.currentRoute.value.fullPath);
    });
    return {
      // ellipse,
      // square,
      // triangle,
      router,
      loadingBar,
    };
  },
});
</script>
<style scoped></style>
