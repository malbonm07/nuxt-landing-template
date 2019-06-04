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
          <div v-for="(item) in menu" :key="item.title"  height="100%" style="display: flex; align-items:center;" @click="probandoFuncion(item.idSection, options)">
            <v-btn flat class="setToolButton" 
            nuxt :to="item.to"
            >
              <span>{{item.title}}</span>
            </v-btn>
          </div>
        </v-toolbar-items>

        <LanguageSwitcher>
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

        <nuxt />

<!----------------------------- END CONTENT VIEWS ----------------------------->

<!----------------------------- NAVIGATOR DRAWER ----------------------------->

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.title" @click="probandoFuncion(item.idSection, options)" nuxt :to="item.to">
          <v-list-tile-action>
            <v-icon style="color: #212121;">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title style="color: #212121;"><p>{{item.title}}</p></v-list-tile-title>
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
      activeClass: null,
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
          idSection: 'topHome',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'business',
          title: this.$i18n.t('pages.properties'),
          to: '/',
          idSection: 'properties',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'group_work',
          title: this.$i18n.t('pages.agents'),
          to: '/',
          idSection: 'agents',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'sentiment_satisfied_alt',
          title: this.$i18n.t('pages.about'),
          to: '/',
          idSection: 'about',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'fiber_new',
          title: this.$i18n.t('pages.news'),
          to: '/',
          idSection: 'news',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'mail_outline',
          title: this.$i18n.t('pages.contacts'),
          to: '/',
          idSection: 'contact',
          activeClass: 'myActiveClass'
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
      this.activeClass = 'myActiveClass'
      if(document.getElementById(elementID)) {
        this.$vuetify.goTo(`#${elementID}`, options)
      }else {
          setTimeout(() => {
            if(document.getElementById(elementID)) {
              this.$vuetify.goTo(`#${elementID}`, options)
            }else {
              return;
            }
            }, 1000)
      }
    }
  },
  computed: {
    routeWatch() {
      return this.$watch(() => this.$route.name )
    }
  },
  watch: {
    mirarorRoute() {
      return this.$route.name
    }
  }
}
</script>
