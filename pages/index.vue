<template>
<div>

<!------------------------- LIST OF PROPIERTIES ----------------------->
<v-container>
  <v-layout row wrap pt-5 id="properties">
    <v-flex xs12 sm6 md4 v-for="(card, i) in cards" :key="i" pa-2>
        <Card :cardObject="card" :colorTheme="colorPropertiesCard">
          <!-- data-aos="fade-up" -->
          <template v-slot:header>
            {{card.title}}
          </template>
          <template v-slot:title>
            <h3 class="display-1 font-weight-light orange--text mb-2">
              {{card.address}}
            </h3>
          </template>
          <template v-slot:description>
            <div class="font-weight-light title mb-2">
            {{card.description}}
            </div>
          </template>
        </Card>
    </v-flex>
  </v-layout>
</v-container>
<!------------------------- END LIST OF PROPIERTIES ----------------------->
<v-container>
<v-layout row wrap pt-5 pb-2>
  <v-flex xs12>
    <h2 class='display-3' style="color: #00BFA5;">REAL ESTATE AGENTS</h2>
    <h5 class="headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
  </v-flex>
</v-layout>

</v-container>
<!------------------------- LIST OF AGENTS ----------------------->
<v-container>
  <v-layout row wrap id="agents">
    <v-flex xs12 sm6 md4 v-for="(agent, i) in agents" :key="i" pa-2>
      <Card :cardObject="agent" :colorTheme="colorAgentsCard">

<!-- data-aos="flip-up" :data-aos-delay="agent.delay" -->

        <template v-slot:title>
          <div style="text-align: center;">
            <h3 class="display-1 text-capitalize mb-2" style="color: #000;">{{agent.name}}</h3>
          </div>
        </template>
        <template v-slot:description>
          <div class="font-weight-regular subheading" style="text-align: center;">
            {{agent.description}}
          </div>
        </template>
      </Card>
    </v-flex>
  </v-layout>
</v-container>
<!------------------------- END LIST OF AGENTS ----------------------->

<!------------------------- HOW ABOUT SECTION ----------------------->

  <div style="background: #00BFA5;" class="mt-5 mb-5">
    <v-container>
      <v-layout row wrap justify-center id="about">
        <v-flex shrink>
          <h2 class='display-3 pt-3 pb-5' style="color: #000;">HOW IT WORKS</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm4 md4 v-for="(item, i) in about" :key="i">
          <v-card color="transparent" elevation='0' class="pa-1">

<!-- data-aos="flip-up" -->

            <div style="display:flex; justify-content: center;">
              <v-icon class="icon" color='#000'>{{item.icon}}</v-icon>
            </div>
            <v-card-title primary-title style="display:flex; justify-content: center;">
              <p class="title text-uppercase">{{item.title}}</p>
              <div style="text-align: center;">
                <span class="subheading">{{item.description}}</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

<!------------------------- END ABOUT SECTION ----------------------->

<!------------------------- CAROUSEL ----------------------->

<v-container grid-list-xs>
  <v-layout row wrap justify-space-between pb-3>
    <v-flex xs12 md6 mb-5>
      <Carousel :itemsArray="carousel">
      </Carousel>
    </v-flex>
    <v-flex xs12 md5>
      <h2 class="display-2 text-capitalize" style="color: #00BFA5;">warehouse real estate template</h2>
      <p class="title pt-2 pb-2 font-weight-light grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
        <v-list style="background: transparent;">
          <v-list-tile
            v-for="(item, i) in realEstateList"
            :key="i"
            avatar
            color="transparent"
          >
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="#00BFA5">{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-btn large color="#00BFA5" class="mt-2" dark>Learn More</v-btn>
        </v-list>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END CAROUSEL ----------------------->

<!------------------------- SERVICES ----------------------->

<v-container grid-list-xs>
  <v-layout row wrap>
    <v-flex xs12>
      <h2 class="display-3 text-uppercase pb-4" style="color: #00BFA5;">services</h2>
    </v-flex>
    <v-flex xs12 sm6 md4 v-for="(service, i) in services" :key="i" pa-1>
      <services :itemObject="service">

<!-- data-aos="zoom-in" :data-aos-delay="service.delay" -->

      </Services>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END SERVICES ----------------------->

<!------------------------- TESTIMONIAL ----------------------->

<v-container grid-list-xs>
  <v-layout row wrap>
    <v-flex xs12>
      <h2 class="display-3 text-uppercase pb-4" style="color: #00BFA5;">testimonial</h2>
    </v-flex>
    <v-flex xs12 sm6 v-for="(testimony, i) in testimonials" :key="i" class="pa-1">
      <Testimonial :itemObject="testimony">
      </Testimonial>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END TESTIMONIAL ----------------------->

<!------------------------- NEWS & EVENTS ----------------------->

<v-container grid-list-xs>
  <v-layout row wrap id="news">
    <v-flex xs12>
      <h2 class="display-3 text-uppercase pb-4" style="color: #00BFA5;">news & events</h2>
    </v-flex>
    <v-flex xs12 sm4 v-for="(item,i) in news" :key="i" pa-2>
      <v-card nuxt :to="item.linkerTo">

<!-- data-aos="fade-up" :data-aos-delay="item.delay" -->

        <v-img
          :src="item.src"
          height="400px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline text-uppercase pb-2 font-weight-light">{{item.title}}</div>
          </div>
        </v-card-title>
      </v-card>
      <div class="mt-3" data-aos="flip-up">
          <span class="grey--text subheading text-capitalize">{{item.name}}&nbsp;-&nbsp;</span>
          <span class="grey--text subheading text-capitalize">{{item.date}}&nbsp;-&nbsp;</span>
          <a :href="item.linkerTo" style="color: #00BFA5;" class="subheading">News</a>
      </div>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END NEWS & EVENTS ----------------------->

<!------------------------- CONTACT SECTION ----------------------->

<v-container grid-list-xs>
  <v-layout row wrap justify-space-between id="about">
    <v-flex xs12>
      <h2 class="display-3 text-uppercase pb-4" style="color: #00BFA5;">contact us</h2>
      <h4 class="title text-uppercase pt-5 pb-5 pl-3">get in touch</h4>
    </v-flex>
    <v-flex xs12 sm5>
        <v-card class="pa-3 transpa" elevation="0">
          <v-text-field
            v-model="contactForm.name"
            outline
            clearable
            label="First Name"
            type="text"
            color="teal accent-4"
            required
            >
      </v-text-field>
      <v-text-field
            v-model="contactForm.lastname"
            outline
            clearable
            label="Last Name"
            type="text"
            color="teal accent-4"
            required
            >
      </v-text-field>
      <v-text-field
            v-model="contactForm.email"
            outline
            clearable
            label="Email Address"
            type="emal"
            color="teal accent-4"
            required
            >
      </v-text-field>
      <v-textarea
          outline
          color="teal accent-4"
          name="input-7-4"
          label="Write your notes or question here"
          value=""
        ></v-textarea>
        </v-card>
        <v-btn depressed large color="teal accent-4" class="mt-5 mb-5 ml-3" dark>Send Message</v-btn>
    </v-flex>
    <v-flex xs12 sm6 mt-3 pa-3>
      <div class="pb-3">
        <h4 class="title" style="color: #616161;">Adrees</h4>
        <p class="subheading pt-2 grey--text">203 Fake St. Mountain View, San Francisco, California, USA</p>
      </div>
      <div class="pb-3">
        <h4 class="title" style="color: #616161;">Phone</h4>
        <p class="subheading pt-2" style="color: #00BFA5;">+1 324 3233 232</p>
      </div>
      <div class="pb-3">
        <h4 class="title" style="color: #616161;">Email Address</h4>
        <p class="subheading pt-2" style="color: #00BFA5;">youremail@domain.com</p>
      </div>
    </v-flex>
  </v-layout>
</v-container>

<!------------------------- END CONTACT SECTION ----------------------->

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

</div>
</template>

<script>
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Services from '@/components/ItemCard.vue'
import Testimonial from '@/components/ItemCard.vue'
import house2 from '@/static/imagens/house/house2.jpeg'
import house3 from '@/static/imagens/house/house3.jpeg'
import house4 from '@/static/imagens/house/house4.jpeg'
import house5 from '@/static/imagens/house/house5.jpeg'
import house6 from '@/static/imagens/house/house6.jpeg'
import person1 from '@/static/imagens/persons/person1.jpeg'
import person2 from '@/static/imagens/persons/person2.jpeg'
import person3 from '@/static/imagens/persons/person3.jpeg'
import carouselImg1 from '@/static/imagens/rooms/room1.jpeg'
import carouselImg2 from '@/static/imagens/rooms/room2.jpeg'
import carouselImg3 from '@/static/imagens/rooms/room3.jpeg'
import avatar1 from '@/static/imagens/avatar/avatar1.png'
import avatar2 from '@/static/imagens/avatar/avatar2.png'
import avatar3 from '@/static/imagens/avatar/avatar3.png'
import avatar4 from '@/static/imagens/avatar/avatar4.png'


export default {
  components: {
    Card,
    Carousel,
    Services,
    Testimonial
  },
  data: () => ({
      contactForm: {
        name: "",
        lastname: "",
        email: ""
      },
      colorPropertiesCard: 'grey lighten-3',
      colorAgentsCard: 'teal accent-4', 
      cards: [
        { title: 'Premium homes',
          address: 'Texas - USA',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          price: '400,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1'
        },
        { title: 'Favorite',
          address: 'New York - USA',
          src: house2,
          price: '700,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1'
        },
        { title: 'Best Home',
          address: 'Seattle - USA',
          src: house3,
          price: '800,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1'
        },
        { title: 'Premium homes',
          address: 'Texas - USA',
          src: house4,
          price: '400,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1' 
        },
        { title: 'Favorite',
          address: 'New York - USA',
          src: house5,
          price: '700,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1' 
        },
        { title: 'Best Home',
          address: 'Seattle - USA',
          src: house6,
          price: '800,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet',
          linkerTo: '/properties/propertie1' 
        }
      ],
      agents: [
        {
          name: 'aaron holmes',
          description:'real estate agent',
          src: person1,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.',
          delay: '100'
        },
        {
          name: 'Olivia williams',
          description:'real estate agent',
          src: person2,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.',
          delay: '200'
        },
        {
          name: 'isabella moore',
          description:'real estate agent',
          src: person3,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.',
          delay: '300'
        }
      ],
      about: [
        {
          icon: 'search',
          title: 'find property',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'attach_money',
          title: 'buy property',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'location_city',
          title: 'outstanding',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ],
      carousel:[
        {src: carouselImg1},
        {src: carouselImg2},
        {src: carouselImg3},
      ],
      realEstateList: [
        {
          icon: 'done',
          title: 'Placeat maxime animi minus'
        },
        {
          icon: 'done',
          title: 'Dolore qui placeat maxime'
        },
        {
          icon: 'done',
          title: 'Consectetur adipisicing'
        },
        {
          icon: 'done',
          title: 'Lorem ipsum dolor'
        }
      ],
      services: [
        {
          title: 'find property',
          icon: 'search',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '100'
        },
        {
          title: 'buy property',
          icon: 'attach_money',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '200'
        },
        {
          title: 'beautiful home',
          icon: 'home',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '300'
        },
        {
          title: 'buildings & lands',
          icon: 'domain',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '400'
        },
        {
          title: 'property locator',
          icon: 'location_on',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '500'
        },
        {
          title: 'mobile apps',
          icon: 'stay_current_portrait',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae.',
          link: 'https://www.google.com',
          delay: '600'
        }
      ],
      testimonials: [
        {
          name: 'allison holmes',
          avatar: avatar1,
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores.'
        },
        {
          name: 'aiden russell',
          avatar: avatar2,
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores.'
        },
        {
          name: 'charles morgan',
          avatar: avatar3,
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores.'
        },
        {
          name: 'curt rayels',
          avatar: avatar4,
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores.'
        }
      ],
      news: [
        {
          src: carouselImg3,
          title: 'popular real estate propierties for 2019',
          name: 'aaron holmes',
          date: 'jan 18, 2019',
          linkerTo: '/news/new1',
          delay: '100'
        },
        {
          src: carouselImg2,
          title: 'popular real estate propierties for 2019',
          name: 'olivia williams',
          date: 'march 20, 2019',
          linkerTo: '/news/new1',
          delay: '200'
        },
        {
          src: carouselImg1,
          title: 'popular real estate propierties for 2019',
          name: 'isabella moore',
          date: 'april 17, 2019',
          linkerTo: '/news/new1',
          delay: '300'
        }
      ]
    })
  }
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>

