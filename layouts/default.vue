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
          <div v-for="(item) in menu" :key="item.title"  height="100%" style="display: flex; align-items:center;" @click="customGoTo(item.idSection, options)">
            <v-btn flat class="setToolButton" 
            nuxt :to="item.to"
            >
              <span>{{$t(item.title)}}</span>
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

    <div>
      <Carousel :itemsArray="items">
        Show now
      </Carousel>
      <!-- <div class="jumbotron">
        <div>dasdsadsa</div>
      </div> -->
    </div>


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
        <v-list-tile v-for="item in menu" :key="item.title" @click="customGoTo(item.idSection, options)" nuxt :to="item.to">
          <v-list-tile-action>
            <v-icon style="color: #212121;">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title style="color: #212121;"><p>{{$t(item.title)}}</p></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

<!----------------------------- END NAVIGATOR DRAWER ----------------------------->


<!------------------------- FOOTER ----------------------->

<v-divider></v-divider>
<v-container grid-list-xs mt-4 style="background: #EEEEEE;">
  <v-layout row wrap justify-space-between id="contact">
    <v-flex xs12 sm4>
      <h4 class="title text-uppercase font-weight-regular pb-4">about us</h4>
      <p class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
    </v-flex>
    <v-flex xs12 sm2>
      <h4 class="title text-uppercase font-weight-regular pb-4">quick links</h4>
      <div>
        <ul>
          <li class="pb-2"><a href="" class="subheading font-weight-medium" style="color: #616161">About Us</a></li>
          <li class="pb-2"><a href="" class="subheading font-weight-medium" style="color: #616161">Services</a></li>
          <li class="pb-2"><a href="" class="subheading font-weight-medium" style="color: #616161">Testimonials</a></li>
          <li class="pb-4"><a href="" class="subheading font-weight-medium" style="color: #616161">Contact Us</a></li>
        </ul>
      </div>
    </v-flex>
    <v-flex xs12 sm4>
      <h4 class="title text-uppercase font-weight-regular pb-4">subscribe newsletter</h4>
      <v-text-field
            color="teal accent-4"
            outline
            label="Enter Email"
            append-icon="email"
      ></v-text-field>
      <v-btn block color="teal accent-4" dark>Send</v-btn>
      <div class="mb-5">
        <h4 class="title text-uppercase font-weight-regular pb-4 mt-4">follow us</h4>
        <div>
          <v-btn flat icon color="gray">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" style="font-size: 20px;"/>
          </v-btn>
          <v-btn flat icon color="gray">
            <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 20px;"/>
          </v-btn>
          <v-btn flat icon color="gray">
            <font-awesome-icon :icon="['fab', 'twitter']"  style="font-size: 20px;"/>
          </v-btn>
          <v-btn flat icon color="gray">
            <font-awesome-icon :icon="['fab', 'instagram']"  style="font-size: 20px;"/>
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END FOOTER ----------------------->


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
    <div ref="goupbutton" class="goUpButton">
      <v-btn fab dark outline color="#E65100"
        @click="$vuetify.goTo('#topHome', options)"
      >
        <v-icon dark>
          arrow_upward
        </v-icon>
      </v-btn>
    </div>
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
          title: 'home',
          to: '/',
          idSection: 'topHome',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'business',
          title: 'properties',
          to: '/',
          idSection: 'properties',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'group_work',
          title: 'agents',
          to: '/',
          idSection: 'agents',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'sentiment_satisfied_alt',
          title: 'about',
          to: '/',
          idSection: 'about',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'fiber_new',
          title: 'news',
          to: '/',
          idSection: 'news',
          activeClass: 'myActiveClass'
        },
        {
          icon: 'mail_outline',
          title: 'contacts',
          to: '',
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
            title: 'carouselTitle1',
            jumbotron: true
          },
          {
            id: '2',
            src: img2,
            title: 'carouselTitle2',
            jumbotron: true
          },
          {
            id: '3',
            src: img1,
            title: 'carouselTitle3',
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
        this.$refs.goupbutton.classList.add('appearButton')
      }else if(window.scrollY < 550) {
        this.setToolBarAnimation.setHeight = '120'
        this.setToolBarAnimation.setColor = 'transparent'
        this.$refs.goupbutton.classList.remove('appearButton')
      }
    },
    customGoTo(elementID, options) {
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
  }
}
</script>
