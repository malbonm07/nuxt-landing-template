<template>
    <v-container grid-list-xs>
        <v-layout row wrap justify-space-between mt-5 mb-5>
            <v-flex xs12 md6 mb-5>
                <Carousel :itemsArray="imagens">
                </Carousel>
            </v-flex>
            <v-flex xs12 md5>
                <div class="pl-2">
                    <h2 class="display-2 text-uppercase font-weight-light pb-2" style="color: #00BFA5;">property details</h2>
                    <p class="title pt-2 pb-2 font-weight-light grey--text">6 Beds, 4 Baths, 4250 sqft.</p>
                    <p class="subheading font-weight-light">Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
                    <p class="subheading font-weight-light">Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
                    <p class="subheading font-weight-light">Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
                </div>
                <v-btn large color="#00BFA5" class="mt-2" dark>Buy Property</v-btn>
            </v-flex>
            <v-flex xs12 sm3 mt-5 mb-5>
                <ContactAgent :agentObject="agent" :heightCard="heightAgentCard">
                    <template v-slot:butname>
                        Contact Agent
                    </template>
                </ContactAgent>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ContactAgent from '@/components/ContactAgent.vue'
import person1 from '@/static/imagens/persons/person1.jpeg'
import carouselImg1 from '@/static/imagens/rooms/room1.jpeg'
import carouselImg2 from '@/static/imagens/rooms/room2.jpeg'
import carouselImg3 from '@/static/imagens/rooms/room3.jpeg'

export default {
    components: {
        Carousel,
        ContactAgent
    },
    data: () => ({
        imagens:[
            {src: carouselImg1},
            {src: carouselImg2},
            {src: carouselImg3},
      ],
        heightAgentCard: '200px',
        agent: {
            name: 'Aaron Holmes',
            src: person1,
            subTitle: 'real estate agent',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iure atque sit ratione vitae neque! Laborum voluptate eius, laboriosam explicabo!',
            buttonName: 'Contact Agent'
        }
    })
}
</script>

<style>

</style>
