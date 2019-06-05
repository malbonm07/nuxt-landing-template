<template>
  <div class="text-xs-center">
    <v-menu offset-y class="transpa">
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          @click="change()"
          elevation="0"
        >
        {{$t('language')}}
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>
                    <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="switcherLang">
         {{ locale.name }}
        </nuxt-link>
        <!-- {{ locale.name }} -->
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'langSwitch',
    data: () => ({
      icons: {
        es: esIcon,
        en: usIcon
      }
    }),
    methods: {
      change() {
        // console.log(this.$i18n.t('language'))
        console.log(this.$i18n.locale)
      }
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
     }
    }
  }
</script>

<style>

</style>
