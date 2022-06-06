<script>
/* eslint-disable */
import { Storage } from "@capacitor/storage";

export default {
  data() {
    return {
      model_seguro: {
        nombre: "",
        identificacion: "",
        poliza: "",
      },
      Storage: Storage,
    };
  },
  computed: {
    var_computed_seguro_nombre: {
      get() {
        return this.model_seguro.nombre;
      },
      set(val) {
        this.StoreSeguroNombre(val);
      },
    },
    var_computed_seguro_identificacion: {
      get() {
        return this.model_seguro.identificacion;
      },
      set(val) {
        this.StoreSeguroIdentificacion(val);
      },
    },
    var_computed_seguro_poliza: {
      get() {
        return this.model_seguro.poliza;
      },
      set(val) {
        this.StoreSeguroPoliza(val);
      },
    },
  },
  mounted() {
    this.GetSeguroNombre();
    this.GetSeguroIdentificacion();
    this.GetSeguroPoliza();
  },
  methods: {
    //   Seguro nombre
    async StoreSeguroNombre(data) {
      await this.Storage.set({
        key: "Data_seguro_nombre",
        value: `${data}`,
      });
    },
    async GetSeguroNombre() {
      var { value } = await this.Storage.get({ key: "Data_seguro_nombre" });
      this.model_seguro.nombre = value;
    },

    // seguro identificacion

    async StoreSeguroIdentificacion(data) {
      await this.Storage.set({
        key: "Data_seguro_identificacion",
        value: `${data}`,
      });
    },

    async GetSeguroIdentificacion() {
      var { value } = await this.Storage.get({ key: "Data_seguro_identificacion" });
      this.model_seguro.identificacion = value;
    },

    // seguro poliza

    async StoreSeguroPoliza(data) {
      await this.Storage.set({
        key: "Data_seguro_poliza",
        value: `${data}`,
      });
    },

    async GetSeguroPoliza() {
      var { value } = await this.Storage.get({ key: "Data_seguro_poliza" });
      this.model_seguro.poliza = value;
    },
    
  },
};
</script>
