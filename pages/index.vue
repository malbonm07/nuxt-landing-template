<template>
<div grid-list-xs>

<!------------------------- LIST OF PROPIERTIES ----------------------->
<v-container>
  

  <v-layout row wrap>
    <v-flex xs12 md4 v-for="(card, i) in cards" :key="i" pa-2>
        <Card :cardObject="card" :colorTheme="colorPropertiesCard">
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
<v-layout row wrap pt-5 pb-4>
  <v-flex xs12>
    <h2 class='display-3' style="color: #00BFA5;">REAL ESTATE AGENTS</h2>
    <h5 class="headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
  </v-flex>
</v-layout>

</v-container>
<!------------------------- LIST OF AGENTS ----------------------->
<v-container>
  <v-layout row wrap>
    <v-flex xs12 md4 v-for="(agent, i) in agents" :key="i" pa-2>
      <Card :cardObject="agent" :colorTheme="colorAgentsCard">
        <template v-slot:title>
          <h3 class="display-1 text-capitalize mb-2" style="color: #000;">{{agent.name}}</h3>
        </template>
        <template v-slot:description>
          <div class="font-weight-regular subheading">
            {{agent.description}}
          </div>
        </template>
      </Card>
    </v-flex>
  </v-layout>
</v-container>
<!------------------------- END LIST OF AGENTS ----------------------->

<!------------------------- HOW ABOUT SECTION ----------------------->

  <div style="background: #00BFA5;" class="mb-5">
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex shrink>
          <h2 class='display-3' style="color: #000;">HOW IT WORKS</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="(item, i) in about" :key="i" class="pa-2">
          <v-card color="transparent" elevation='0'>
            <div>
              <v-icon class="icon" color='#000'>{{item.icon}}</v-icon>
            </div>
            <v-card-title primary-title>
              {{item.title}}
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

<!------------------------- END ABOUT SECTION ----------------------->

</div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Card from '@/components/Card.vue'
import house2 from '@/static/imagens/house/house2.jpeg'
import house3 from '@/static/imagens/house/house3.jpeg'
import house4 from '@/static/imagens/house/house4.jpeg'
import house5 from '@/static/imagens/house/house5.jpeg'
import house6 from '@/static/imagens/house/house6.jpeg'
import person1 from '@/static/imagens/persons/person1.jpeg'
import person2 from '@/static/imagens/persons/person2.jpeg'
import person3 from '@/static/imagens/persons/person3.jpeg'

export default {
  components: {
    Card
  },
  data: () => ({
      colorPropertiesCard: 'grey lighten-3',
      colorAgentsCard: 'teal accent-4', 
      cards: [
        { title: 'Premium homes',
          address: 'Texas - USA',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          price: '400,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet'
        },
        { title: 'Favorite',
          address: 'New York - USA',
          src: house2,
          price: '700,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet'
        },
        { title: 'Best Home',
          address: 'Seattle - USA',
          src: house3,
          price: '800,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet' 
        },
        { title: 'Premium homes',
          address: 'Texas - USA',
          src: house4,
          price: '400,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet' 
        },
        { title: 'Favorite',
          address: 'New York - USA',
          src: house5,
          price: '700,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet' 
        },
        { title: 'Best Home',
          address: 'Seattle - USA',
          src: house6,
          price: '800,000',
          button: true,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra. Eget arcu nunc amet' 
        }
      ],
      agents: [
        {
          name: 'aaron holmes',
          description:'real estate agent',
          src: person1,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.'
        },
        {
          name: 'Olivia williams',
          description:'real estate agent',
          src: person2,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.'
        },
        {
          name: 'isabella moore',
          description:'real estate agent',
          src: person3,
          description: 'Lorem ipsum dolor sit amet, aenean sed odio in ipsum euismod pharetra.'
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
          title: 'outstanding houses',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
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

