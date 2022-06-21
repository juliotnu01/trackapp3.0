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
      Storage: Storage,
    };
  },
};
</script>
