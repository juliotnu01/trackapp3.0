<script>
/* eslint-disable */
import { Storage } from "@capacitor/storage";
const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
export default {
  data() {
    return {
      mantenimientos:[],
      model_mantenimiento: {
        date:`${year}-${month}-${day}`,
        proximo_mantenimiento:`${year}-${month}-${day}`,
        mantenimiento_realizado: true,
        descripcion:'',
      },
      Storage: Storage,
    };
  },
  methods: {
   async StoreMantenimiento(){
     try {
      this.mantenimientos.push(this.model_mantenimiento)
      this.model_mantenimiento = {
        date:`${year}-${month}-${day}`,
        proximo_mantenimiento:`${year}-${month}-${day}`,
        mantenimiento_realizado: true,
        descripcion:'',
      }
      
     } catch (error) {
       console.log(error)
     }
   },
     
  },
};
</script>
