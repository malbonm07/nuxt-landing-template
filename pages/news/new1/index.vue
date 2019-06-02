<template>
    <v-container grid-list-xs fluid mt-4>
        <v-layout row wrap justify-space-around>
            <v-flex xs12 sm8 mb-4>
                <div>
                <p class="title font-weight-light newstitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae quisquam eaque dolore itaque quod tenetur quo quos labore?</p>
                <p class="subheading grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.
                </p>
                <p class="subheading grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.
                </p>
                <p class="subheading grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.
                </p>
                <p class="subheading grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.
                </p>
                <p class="subheading grey--text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum obcaecati.
                </p>
                </div>
                <div>
                    <p class="subheading">Categories: 
                        <a :href="category.link" v-for="(category, i) in categoriesLinks" :key="i" class="subheading text-capitalize" style="color: #00BFA5">
                            {{category.title}}&nbsp;
                        </a>
                        Tags:
                        <a :href="tag.link" v-for="(tag, i) in categoriesTags" :key="i" class="subheading text-capitalize" style="color: #00BFA5">
                            {{tag.title}}&nbsp;
                        </a>
                    </p>
                </div>

<!-------------------------------------- POST BLOG -------------------------------------->

                <div v-for="(post, i) in posts" :key="i">
                    <PostComponent
                    :postObject="post"
                    ></PostComponent>
                </div>
            </v-flex>

<!-------------------------------------- POST BLOG -------------------------------------->

            <v-flex xs12 sm3>
                <div class="mb-2">
                    <!-- <v-card class="pa-3" elevation="0"> -->
                        <v-text-field
                            label="Search"
                            color="teal accent-4"
                            outline
                            placeholder="Enter a key and hit enter"
                        ></v-text-field>
                    <!-- </v-card> -->
                </div>
                <div class="mb-4">
                    <CategoriesTable :propTableHeaders="headers" :propTableCategories="categories">

                    </CategoriesTable>
                </div>
                <div class="mb-4">
                    <ContactAgent :agentObject="agent" :heightCard="agent.heightAgentCard">
                        <template v-slot:butname>
                            Learn More
                        </template>
                    </ContactAgent>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ContactAgent from '@/components/ContactAgent.vue'
import person1 from '@/static/imagens/persons/person1.jpeg'
import CategoriesTable from '@/components/CategoriesTable.vue'
import PostComponent from '@/components/PostComponent.vue'

export default {
    components: {
        ContactAgent,
        CategoriesTable,
        PostComponent
    },
    data: () => ({
        categoriesLinks: [
            {
                title: 'news',
                link: ''
            },
            {
                title: 'evens',
                link: ''
            }
        ],
        categoriesTags: [
            {
                title: '#HTML',
                link: '/'
            },
            {
                title: '#Trends',
                link: '/'
            }
        ],
            agent: {
            name: 'Aaron Holmes',
            src: person1,
            subTitle: 'real estate agent',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iure atque sit ratione vitae neque! Laborum voluptate eius, laboriosam explicabo, ipsum dolor sit amet, consectetur adipisicing elit. Ab, iure!',
            heightAgentCard: '300px'
        },
            headers: [
          {
            text: 'CATEGORIES',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '', value: 'iron' }
        ],
        categories: [
          {
            name: 'creates',
            posts: '12'
          },
          {
            name: 'news',
            posts: '22'
          },
          {
            name: 'design',
            posts: '37'
          },
          {
            name: 'HTML',
            posts: '42'
          },
          {
            name: 'web development',
            posts: '14'
          },
        ],
        posts: [
            {
                user: 'james brand',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                date: 'january 9, 2018 at 2:21'
            },
            {
                user: 'james brand',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                date: 'january 9, 2018 at 2:21'
            },
            {
                user: 'james brand',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                date: 'january 9, 2018 at 2:21'
            },
            {
                user: 'james brand',
                avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                date: 'january 9, 2018 at 2:21'
            },
        ]
    })
}
</script>

<style>

</style>
