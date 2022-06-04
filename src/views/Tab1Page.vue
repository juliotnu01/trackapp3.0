<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-card-subtitle>Mi Perfil</ion-card-subtitle>
          <ion-card-title>{{ DataSesa.au }}</ion-card-title>
        </ion-card-header>
        <ion-card-content> </ion-card-content>
      </ion-card>
      <ion-list>
        <ion-list-header>
          <ion-label>
            <!-- Single Selection -->
          </ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label position="floating">Placa</ion-label>
          <ion-input v-model="var_computed_placa"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Monitor</ion-label>
          <ion-input v-model="var_computed_monitor"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Chasis</ion-label>
          <ion-input v-model="var_computed_chacis" ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Marca</ion-label>
          <ion-input v-model="var_computed_marca" ></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  // IonSelect,
  // IonSelectOption,
  IonInput,
} from "@ionic/vue";
import { defineComponent, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { Storage } from "@capacitor/storage";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    // IonSelect,
    // IonSelectOption,
    IonInput,
  },
  setup() {
    const store: any = useStore();
    const placa: any = ref("");
    const monitor: any = ref("");
    const chasis: any = ref("");
    const marca: any = ref("");
    const router = useRouter();

    let DataSesa: any = computed({
      get: () => {
        return store.getters.data_sesa;
      },
      set: (val: any) => {
        store.commit("setDaSesa", val);
      },
    });
    // placa
    const StoreMiAutoPlaca = async (plc?: any) => {
      await Storage.set({
        key: "Placa",
        value: `${plc}`,
      });
    };
    const GetPlaca = async () => {
      var { value } = await Storage.get({ key: "Placa" });
      placa.value = value;
    };
    const var_computed_placa: any = computed({
      get: () => {
        return placa.value;
      },
      set: (val: any) => {
        StoreMiAutoPlaca(val);
      },
    });

    // monitor
    const StoreMiAutoMonitor = async (mnt?: any) => {
      await Storage.set({
        key: "Monitor",
        value: `${mnt}`,
      });
    };
    const GetMonitor = async () => {
      var { value } = await Storage.get({ key: "Monitor" });
      monitor.value = value;
    };
    const var_computed_monitor: any = computed({
      get: () => {
        return monitor.value;
      },
      set: (val: any) => {
        StoreMiAutoMonitor(val);
      },
    });

    // Chasis
    const StoreMiAutoChasis = async (chs?: any) => {
      await Storage.set({
        key: "Chasis",
        value: `${chs}`,
      });
    };
    const GetChasis = async () => {
      var { value } = await Storage.get({ key: "Chasis" });
      chasis.value = value;
    };
    const var_computed_chacis: any = computed({
      get: () => {
        return chasis.value;
      },
      set: (val: any) => {
        StoreMiAutoChasis(val);
      },
    });

    // Marca
     const StoreMiAutoMarca = async (mrc?: any) => {
      await Storage.set({
        key: "Marca",
        value: `${mrc}`,
      });
    };

     const GetMarca = async () => {
      var { value } = await Storage.get({ key: "Marca" });
      marca.value = value;
    };

     const var_computed_marca: any = computed({
      get: () => {
        return marca.value;
      },
      set: (val: any) => {
        StoreMiAutoMarca(val);
      },
    });


    onMounted(() => {
      // checkName()
      GetPlaca();
      GetMonitor();
      GetChasis();
      GetMarca()
      
      if(Object.entries(DataSesa.value).length <= 0){
         router.push('/tabs/tab2')
      }
    });

    return {
      // Test
      DataSesa,
      var_computed_placa,
      var_computed_monitor,
      var_computed_chacis,
      var_computed_marca
    };
  },
});
</script>
