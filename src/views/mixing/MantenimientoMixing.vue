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
  mounted() {
    this.GetMantenimientosRealizados()
  },
  methods: {
   async StoreMantenimiento(){
     try {
      this.mantenimientos.push(this.model_mantenimiento)
      await this.Storage.set({
        key: "Data_mantenimientos",
        value: `${JSON.stringify(this.mantenimientos)}`,
      });
     } catch (error) {
       console.log(error)
     }
   },
   async GetMantenimientosRealizados(){
     try {
        var { value } = await this.Storage.get({ key: "Data_mantenimientos" });
         this.mantenimientos = JSON.parse(value)
     } catch (error) {
       console.log(error)
     }
   }
    
  },
};
</script>
