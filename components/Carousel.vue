<template>
<v-carousel hide-delimiters style="height: 100%">
        <v-carousel-item  v-for="item in itemsArray" :src="item.src" :key="item.id">
        <v-jumbotron height="100%" v-if="item.jumbotron">
            <v-container fill-height>
              <v-layout align-center wrap>
                <v-flex offset-xs1 xs10>
                  <h4 class="display-1 text-xs-center text-uppercase font-weight-medium mt-2">
                    {{$t(item.title)}}
                  </h4>
                  <h3 class="title text-xs-center pt-2 font-weight-medium">
                    {{$t('carouselSubTitle')}} <a href="https://malbonm07.github.io/miguelalonsomarroquin/" class="font-weight-medium" style="color: #00BFA5">{{$t('myWeb')}}</a>
                  </h3>
                  <div class="mt-5" style="text-align: center;">
                    <v-btn large color="teal accent-4">
                        <slot></slot>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
        </v-jumbotron>
    </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
    name: 'carousel',
    props: {
        itemsArray: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            items: [],
        }
    }

}
</script>

<style>

</style>
