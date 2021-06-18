<template>
  <v-card class='mx-auto mb-6 pa-6 '  :class="{'transparent':hideDetails}"  :elevation= "!hideDetails?1:0">

    <v-card-title class='pa-0 mb-4'>
      <template v-if='$vuetify.breakpoint.mdAndUp||hideDetails'>
        <v-avatar size='36' color='gray'>
          ii
        </v-avatar>
        <div>
         <span class='ml-3 d-block subtitle-2 ' style='margin-bottom: -4px'>
       Enes Aktaş
      </span>
          <span class='ml-3 d-block' style='font-size: 10px;margin-top: -4px'>
      Asked 2 days ago
      </span>
        </div>

      </template>

    </v-card-title>
    <v-card class='gray px-4 py-4' >
      Kainat Hz. Muhammed’in (asm) hürmetine mi yaratıldı?
    </v-card>


    <v-card-text class='pa-0 my-4 ' v-if='!hideDetails'>
      <div class='font-weight-bold mb-2' v-if='$vuetify.breakpoint.mdAndUp'>
        Answer
      </div>

      <div class='font-weight-bold mb-2' v-if='$vuetify.breakpoint.mdAndUp'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, rem.
      </div>
      <div class='fill-width mb-0'>
        <v-btn :class="{'fill-width':$vuetify.breakpoint.smAndDown}" color='secondary ' outlined @click='goToPage'
               :height='40'>
          Read More
        </v-btn>
      </div>


    </v-card-text>


  </v-card>
</template>

<script>
export default {
  name: 'QuestionCard',
  props:{
    path:{
      type:String
    },
    hideDetails:{
      type:Boolean,
      default:false
    }
  },

    methods: {
      async goToPage() {

        await this.$router.push(this.path)

      }
    }

}
</script>

<style scoped>

</style>
