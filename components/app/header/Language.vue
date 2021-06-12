<template>
    <v-menu transition="slide-y-transition"
            offset-y open-on-hover rounded="lg"
            :left="$vuetify.breakpoint.mdAndUp"
            :right="$vuetify.breakpoint.smAndDown"
            :bottom="$vuetify.breakpoint.mdAndUp"
            :top="$vuetify.breakpoint.smAndDown">

        <template #activator="{ on }">
            <v-btn text rounded class="mr-1 px-2" min-width="auto" v-on="on">

                <img :src="`https://flag.pk/flags/4x3/` + localeCode($i18n.locale) + `.svg`"
                     width="28" height="20" class="rounded order-md-1" :alt="$i18n.locale"/>

                <span class="pr-md-2 pl-2 pl-md-0"
                      :class="{'text-transform-none': $vuetify.breakpoint.smAndDown}"
                      v-text="localeName($i18n.locale)"/>

            </v-btn>
        </template>

        <v-card flat>
            <v-list dense>
                <v-list-item v-for="locale in $i18n.locales" :key="locale.code"
                             @click="setLang(locale.code)"
                             :to="switchLocalePath(locale.code)">

                    <v-list-item-icon class="mr-3">
                        <img :src="`https://flag.pk/flags/4x3/` + locale.code2 + `.svg`"
                             width="24" height="16" class="rounded mt-1" :alt="locale.iso"/>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="locale.name"/>
                    </v-list-item-content>

                    <v-list-item-icon v-if="$i18n.locale === locale.code">
                        <v-icon v-text="'mdi-check'" color="primary"/>
                    </v-list-item-icon>

                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    name: "Language",
    methods: {

        setLang(lang) {
            this.$i18n.locale = lang;
            this.$vuetify.lang.current = lang
            this.$storage.setCookie('lang', lang);
            this.$axios.setHeader('content-language', lang);
            this.$axios.setHeader('accept-language', lang);
        },

        localeName(code) {
            return this.$i18n.locales.find(lang => lang.code === code)?.name
        },

        localeCode(code) {
            return this.$i18n.locales.find(lang => lang.code === code)?.code2
        }

    }
}
</script>
