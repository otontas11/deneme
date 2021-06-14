<template>
  <v-card tag='section' tile class='main-cover primary d-flex'
          :img="$vuetify.breakpoint.mdAndUp ? require('@/static/cover.jpg') :  require('@/static/cover-xs.jpg')">

      <v-overlay absolute color="#2D2B74" class='overlay'  />

    <v-container class='cover-container relative z-index-2' >

      <h3 v-text="$t('main.islamForBeginners')"
          class='text-h6 text-md-h3 text-center font-weight-bold white--text '
          :class="$vuetify.breakpoint.mdAndUp?'font-weight-700':'font-weight-500'"
      />

      <div class='d-flex justify-center my-6'>
        <p :class="$vuetify.breakpoint.mdAndUp?'subtitle-1':'subtitle-2'"
           class='white--text mainText ' v-text="$t('main.coverText')">
        </p>
      </div>

      <div class='d-flex justify-center'>
        <v-btn depressed color='secondary'>
          {{ $t('main.discover') }}
        </v-btn>
      </div>

    </v-container>


  </v-card>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style lang='scss'>

.main-cover {
  border: none !important;
  //opacity: 0.72
/*  @media (max-width: 959.8px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background-size: cover !important;
      background: url("~/static/cover-xs.jpg") no-repeat center;
    }
  }*/
}
.cover{
  &-container{
    padding-top: 116px;
    padding-bottom: 116px;
    @media (max-width: 959.8px) {
      padding-top: 42px;
      padding-bottom: 42px;
    }
  }
}

.mainText {
  text-align: center;
  max-width: 580px;
  line-height: 24px!important;
  @media (max-width: 959.8px) {
    line-height: 18px!important;
    font-weight: 400!important;
  }
}
.overlay{
  z-index: 1!important;
}

</style>
