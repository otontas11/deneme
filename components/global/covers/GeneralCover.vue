<template>

  <v-card tag='section' tile :height='height' class='primary d-flex' :img="cover">

    <v-overlay absolute color='#2D2B74' class='overlay' />

    <v-container class='general-container relative z-index-2 d-flex align-center justify-space-between'>

      <div>

        <h3 v-text='headerText' class='text-h6 text-md-h3  font-weight-bold white--text font-weight-700' />

        <div class='my-6'>
          <p :class="$vuetify.breakpoint.mdAndUp?'subtitle-1':'subtitle-2'"
             class='white--text mainText-general ' v-text='subText' style="line-height: 1">
          </p>
        </div>
      </div>

<!--      <div class='d-flex justify-center' v-if='showBtn'>
        <v-btn depressed color='secondary'>
          {{ btnText }}
        </v-btn>
      </div>-->
      <ask-questions v-if='showBtn' :outlined="outlinedQuestionBtn" :height='questionHeight'/>

    </v-container>

  </v-card>
</template>

<script>
import AskQuestions from '~/components/global/dialog/AskQuestions'
export default {
  name: 'GeneralCover',
  components:{
    AskQuestions
  },
  props: {
    cover: {
      type: String
    },
    headerText: {
      type: String
    },
    subText: {
      type: String
    },
    btnText:{
      type:String
    },
    height:{
      type:Number,
      default:217
    }
  },
  data() {
    return {
      showBtn: false,
      outlinedQuestionBtn:false,
      questionHeight:"40"
    }
  },
  created() {
    this.showBtn = this.$route.name === `questions___${this.$i18n.locale}`
  }
}
</script>

<style lang='scss'>
.overlay {
  z-index: 1 !important;
}

.general-container {
  padding-top: 56px;
  padding-bottom: 56px;

}

.mainText-general {
  text-align: start;
  max-width: 460px;
  line-height: 24px !important;

}
</style>
