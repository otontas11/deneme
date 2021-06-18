<template>
  <v-main>

    <general-cover v-if='$vuetify.breakpoint.mdAndUp' />

    <v-container class='relative z-index-2' :class="$vuetify.breakpoint.smAndUp ? 'positionFix' : 'mt-2'">
      <v-row>
        <v-col cols='12' md='9'>
          <template>
            <v-card class='pa-6'>

              <div v-if='$vuetify.breakpoint.smAndDown' @click='$router.go(-1)' class='pointer'>
                <v-icon v-text="'mdi-arrow-left'" />
              </div>

              <v-card-title>{{ newsTitle }}</v-card-title>

              <v-card-text>{{ newsSubtitle }}</v-card-text>

            </v-card>
          </template>
        </v-col>

        <v-col cols='12' md='3' v-if='$vuetify.breakpoint.mdAndUp'>
          <template class='d-flex'>


            <span class='text-uppercase font-weight-bold white--text'
                  style='font-size: 10px'>RELATED NEWS & ARTICLES</span>

            <template v-for='i in 2'>
              <lesson-card :key='`sad-${i}`'
                           :title='title'
                           :date='date'
                           :btn-name='btnName'
                           :subTitle='subTitle'
                           :img='img' />
            </template>

          </template>
        </v-col>
      </v-row>
    </v-container>

  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/covers/GeneralCover'
import LessonCard from '~/components/global/LessonCard'

export default {
  name: 'news-selected_by_id',
  components: {
    GeneralCover, LessonCard

  },
  data() {
    return {
      title: 'The 5 Pillars of Islam lorem ipsum sit',
      date: '21.04.2021',
      btnName: 'Read More',
      subTitle: 'What is the religion that is practiced by 1.6 billion people around the world?',
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      path: '/news/id',

      newsTitle: 'Article Title',
      newsSubtitle: 'Âlemlerin, Peygamber Efendimiz’in (asm) hürmetine yaratılmasına dair kutsî hadisler yani “manası bakımından Allah Teala katından, lafız bakımından Peygamber Efendimiz’den (asm) olan hadisler” bulunmaktadır:\n' +
        '\n' +
        'Deylemi’nin İbn Ömer’den nakline göre Peygamberimiz (asm) şöyle buyurmuştur:\n' +
        '“Bana Cibril geldi ve “Ya Muhammed! Sen olmasaydın cennet yaratılmazdı, sen olmasaydın cehennem yaratılmazdı” dedi." (Keşfül hafa.c.1.s.45.hn.91)\n' +
        'Taberani, Hakim, Ebu Nuaym, Beyhaki ve İbn Asakir’in Hz. Ömer (ra)den rivayet ettiklerine göre Peygamberimiz (asm) şöyle buyurmuştur:\n' +
        '\n' +
        '“Âdem işlediği günahı işlediğinde başını semaya kaldırdı ve “(Allah’ım) Muhammed hakkı için beni bağışlamanı istiyorum” dedi. Allah ona “Muhammed kimdir?” diye vahiyle sordu. Adem “Beni yarattığın zaman başımı arşına kaldırdığımda orada “Allah’dan başka ilah yoktur, Muhammed onun resulüdür” yazılı olduğunu gördüm. Bundan bildim ki, senin katında İsmini ismin ile beraber yazdığın bu zattan daha şerefi yüce kimse yoktur.” Dedi. Allah ona “Ey Adem! O senin zürriyetinden gelecek peygamberlerin sonuncusudur. Eğer o olmasaydı seni yaratmazdım” buyurdu.” (Ed-Dürrül Mensur.c.1.s.142)\n' +
        'Yine benzer bir rivayeti Hakim Müstedrek’inde “isnadı sahihdir” kaydıyla İbn Abbas’dan (ra) rivayet etmiştir. (Müstedrek. c.2.s.671)\n' +
        '\n' +
        'Cenab-ı Hak Peygamberimize niçin böyle hitap etmiştir?\n' +
        '\n' +
        'Bir okulda, talebeler, kitaplar, eğitim için her türlü ihtiyaçlar temin edilmiş olsa, fakat öğretmen olmazsa, bütün yapılan masraflar boşa gider. Öğretmen olmadan eğitim olmaz. Bu kâinatı okul, şuur sahibi varlıkları ise öğrenci olarak kabul edelim. Peygamberimiz de (asm) bu okulun öğretmeni durumundadır. Nasıl öğretmen olmayınca, bütün eğitim faaliyetleri boşa gidiyorsa, Peygamberimiz (asm) olmayınca da, bütün ilahi hikmetler boşa gidecektir. Bu yüzden Peygamberimiz’e (asm) Cenab-ı Hak’kın “Sen olmasaydın kâinatı yaratmazdım” demesi yerindedir. Teşbihte hata olmasın, bu hakikat okul yaptıran şahsın öğretmene hitaben “Sen olmasaydın ben bu okulu yaptırmazdım” demesine benzer.'
    }
  }
}
</script>

<style lang='scss'>
.positionFix {
  margin-top: -180px;
}
</style>
