<script>
/* eslint-disable */
import { Storage } from "@capacitor/storage";

export default {
  data() {
    return {
      model_mecanico: {
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
      },
      Storage:Storage,
    };
  },
  computed: {
    var_computed_mecanico_nombre: {
      get() {
        return this.model_mecanico.nombre;
      },
      set(val) {
        this.StoreMecanicoNombre(val);
      },
    },
    var_computed_mecanico_correo: {
      get() {
        return this.model_mecanico.correo;
      },
      set(val) {
        this.StoreMecanicoCorreo(val);
      },
    },
     var_computed_mecanico_telefono: {
      get() {
        return this.model_mecanico.telefono;
      },
      set(val) {
        this.StoreMecanicoTelefono(val);
      },
    },
    var_computed_mecanico_direccion: {
      get() {
        return this.model_mecanico.direccion;
      },
      set(val) {
        this.StoreMecanicoDireccion(val);
      },
    },
  },
  mounted(){
      this.GetMecanicoNombre();
      this.GetMecanicoCorreo();
      this.GetMecanicoTelefono();
      this.GetMecanicoDireccion();
  },
  methods: {
    //   mecanico nombre
    async StoreMecanicoNombre(data) {
      await this.Storage.set({
        key: "Data_mecanico_nombre",
        value: `${data}`,
      });
    },
    async GetMecanicoNombre() {
      var { value } = await this.Storage.get({ key: "Data_mecanico_nombre" });
      this.model_mecanico.nombre = value;
    },

    // mecanico Correo

    async StoreMecanicoCorreo(data) {
      await this.Storage.set({
        key: "Data_mecanico_correo",
        value: `${data}`,
      });
    },

    async GetMecanicoCorreo() {
      var { value } = await this.Storage.get({ key: "Data_mecanico_correo" });
      this.model_mecanico.correo = value;
    },

    // mecanico Telefono

     async StoreMecanicoTelefono(data) {
      await this.Storage.set({
        key: "Data_mecanico_telefono",
        value: `${data}`,
      });
    },

    async GetMecanicoTelefono() {
      var { value } = await this.Storage.get({ key: "Data_mecanico_telefono" });
      this.model_mecanico.telefono = value;
    },

    // mecanico direccion

     async StoreMecanicoDireccion(data) {
      await this.Storage.set({
        key: "Data_mecanico_direccion",
        value: `${data}`,
      });
    },

    async GetMecanicoDireccion() {
      var { value } = await this.Storage.get({ key: "Data_mecanico_direccion" });
      this.model_mecanico.direccion = value;
    },


  },
};
</script>
