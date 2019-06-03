<template>
  <v-app light>

<!----------------------------- HEADER ---------------------------->

    <div id="topHome">

<!------- Toolbar -------->
      <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      :height="setToolBarAnimation.setHeight"
      :color="setToolBarAnimation.setColor"
      class="toolBar"
      ref="barra"
      v-scroll="onScroll"
    >
        <nuxt-link to="/" style="color: black;"><v-toolbar-title v-text="title"/></nuxt-link>
        <v-spacer />

        <v-toolbar-items class="hidden-sm-and-down">
          <div v-for="item in menu" :key="item.title"  height="100%" style="display: flex; align-items:center;" @click="probandoFuncion(item.idSection, options)">
            <v-btn flat class="setToolButton">{{item.title}}</v-btn>
          </div>
        </v-toolbar-items>

        <LanguageSwitcher class="setResponsive">
        </LanguageSwitcher>

        <v-card class="setResponsive">
          <v-btn
          icon
          @click.stop="rightDrawer = !rightDrawer"
          > 
          <v-icon>menu</v-icon>
          </v-btn>
        </v-card>
    </v-toolbar>

<!------- end Toolbar -------->

<!------- custom carousel -------->

    <Carousel :itemsArray="items">
      Show now
    </Carousel>

<!------- end custom carousel -------->

    </div>

<!----------------------------- END HEADER ----------------------------->

<!----------------------------- CONTENT VIEWS ----------------------------->

    <!-- <v-content class="content">
    <v-container> -->
        <nuxt />
      <!-- </v-container>
    </v-content> -->

<!----------------------------- END CONTENT VIEWS ----------------------------->

<!----------------------------- NAVIGATOR DRAWER ----------------------------->

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.title" @click="$vuetify.goTo(item.idSection, options)">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

<!----------------------------- END NAVIGATOR DRAWER ----------------------------->

<!-----------------------------FOOTER ----------------------------->

    <v-footer
      :fixed="fixed"
      app
    >
    <v-layout row wrap justify-center>
      <v-flex shrink>
        <span class="text-xs-center caption">&copy; 2019 Warehouse. All Rights Reserved. Design by malbnom07</span>
      </v-flex>
    </v-layout>
    </v-footer>

<!-----------------------------END FOOTER ----------------------------->

  </v-app>
</template>

<script>
import SpainFlag from '@/components/flags/flag-icon-es.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import Carousel from '@/components/Carousel.vue'
import img1 from '@/static/imagens/img1.jpeg'
import img2 from '@/static/imagens/img2.jpeg'

export default {
  components: {
    SpainFlag,
    LanguageSwitcher,
    Carousel
  },
  data() {
    return {
      setToolBarAnimation: {
        setHeight: '120',
        setColor: 'transparent',
        setToolBarButtons: '100%'
      },
      options: {
          duration: '300',
          offset: '0',
          easing: 'easeInOutCubic'
      },
      toolBarHeight: '120',
      clipped: false,
      drawer: false,
      fixed: false,
      menu: [
        {
          icon: 'home',
          title: this.$i18n.t('pages.home'),
          to: '/',
          idSection: '#topHome'
        },
        {
          icon: 'business',
          title: this.$i18n.t('pages.properties'),
          to: '/',
          idSection: '#properties'
        },
        {
          icon: 'group_work',
          title: this.$i18n.t('pages.agents'),
          to: '/',
          idSection: '#agents'
        },
        {
          icon: 'sentiment_satisfied_alt',
          title: this.$i18n.t('pages.about'),
          to: '/',
          idSection: '#about'
        },
        {
          icon: 'fiber_new',
          title: this.$i18n.t('pages.news'),
          to: '/',
          idSection: '#news'
        },
        {
          icon: 'mail_outline',
          title: this.$i18n.t('pages.contacts'),
          to: '/',
          idSection: '#contact'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'WAREHOUSE',
      items: [
          {
            id: '1',
            src: img1,
            title: 'find your perfect property',
            jumbotron: true
          },
          {
            id: '2',
            src: img2,
            title: 'buy & sell properties here',
            jumbotron: true
          },
          {
            id: '3',
            src: img1,
            title: 'look at our news',
            jumbotron: true
          },
      ]
    }
  },
  methods: {
    go() {
      return;
    },
    onScroll(event, el) {
      if(window.scrollY > 500) {
        this.setToolBarAnimation.setHeight = '80'
        this.setToolBarAnimation.setColor = 'white'
      }else if(window.scrollY < 550) {
        this.setToolBarAnimation.setHeight = '120'
        this.setToolBarAnimation.setColor = 'transparent'
      }
    },
    probandoFuncion(elementID, options) {
      // let routePromise = Promise.resolve(this.routeWatch);
      // routePromise.then((value) => console.log(document.getElementById('about')))
      // console.log(this.routeWatch)

      // this.$watch(() => console.log(this.$route.name) )

      // setTimeout(function(){ console.log(document.getElementById('about')) }, 3000);
      // console.log(this.routeWatch)
      // console.log('123')
      // if(document.getElementById('pageDefault')) {
      //   this.$vuetify.goTo(elementID, options)
      // }
    }
  },
  computed: {
    // routeWatch() {
    //   return this.$route.name
    // }
  }
}
</script>
