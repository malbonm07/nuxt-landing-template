<template>
    <div>
        <v-list three-line>
          <template>
            <v-list-tile
            >
              <v-list-tile-avatar size="48">
                <img :src="itemObject.avatar" v-if="itemObject.avatar">
                <v-icon v-else-if="itemObject.icon" class="services" color='#00BFA5'>{{itemObject.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title v-if="itemObject.title">
                  <h5 class='text-uppercase title font-weight-regular'>{{itemObject.title}}</h5>
                </v-list-tile-title>
                <v-list-tile-title v-else-if="itemObject.name">
                  <h5 class='text-uppercase subheading font-weight-light'>{{itemObject.name}}</h5>
                </v-list-tile-title>
                <v-list-tile-sub-title class="body-2 font-weight-light">{{itemObject.description}}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
            </v-list-tile>
          </template>
          <template v-if="itemObject.link">
            <v-divider></v-divider>
            <v-list-tile avatar dense class="">
              <v-list-tile-content class="pl-3">
                <v-btn flat small color="teal accent-4" class="ml-5">Learn More</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'itemCard',
    props: {
        itemObject: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
