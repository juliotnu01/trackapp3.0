<script>
/* eslint-disable */
import { Storage } from "@capacitor/storage";

export default {
  data() {
    return {
      model_grua: {
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
      },
      Storage: Storage,
    };
  },
  computed: {
    var_computed_grua_nombre: {
      get() {
        return this.model_grua.nombre;
      },
      set(val) {
        this.StoreGruaNombre(val);
      },
    },
    var_computed_grua_correo: {
      get() {
        return this.model_grua.correo;
      },
      set(val) {
        this.StoreGruaCorreo(val);
      },
    },
    var_computed_grua_telefono: {
      get() {
        return this.model_grua.telefono;
      },
      set(val) {
        this.StoreGruaTelefono(val);
      },
    },
    var_computed_grua_direccion: {
      get() {
        return this.model_grua.direccion;
      },
      set(val) {
        this.StoreGruaDireccion(val);
      },
    },
  },
  mounted() {
    this.GetGruaNombre();
    this.GetGruaCorreo();
    this.GetGruaTelefono();
    this.GetGruaDireccion();
  },
  methods: {
    //   mecanico nombre
    async StoreGruaNombre(data) {
      await this.Storage.set({
        key: "Data_grua_nombre",
        value: `${data}`,
      });
    },
    async GetGruaNombre() {
      var { value } = await this.Storage.get({ key: "Data_grua_nombre" });
      this.model_grua.nombre = value;
    },

    // mecanico Correo

    async StoreGruaCorreo(data) {
      await this.Storage.set({
        key: "Data_grua_correo",
        value: `${data}`,
      });
    },

    async GetGruaCorreo() {
      var { value } = await this.Storage.get({ key: "Data_grua_correo" });
      this.model_grua.correo = value;
    },

    // mecanico Telefono

    async StoreGruaTelefono(data) {
      await this.Storage.set({
        key: "Data_grua_telefono",
        value: `${data}`,
      });
    },

    async GetGruaTelefono() {
      var { value } = await this.Storage.get({ key: "Data_grua_telefono" });
      this.model_grua.telefono = value;
    },

    // mecanico direccion

    async StoreGruaDireccion(data) {
      await this.Storage.set({
        key: "Data_grua_direccion",
        value: `${data}`,
      });
    },

    async GetGruaDireccion() {
      var { value } = await this.Storage.get({
        key: "Data_grua_direccion",
      });
      this.model_grua.direccion = value;
    },
  },
};
</script>
