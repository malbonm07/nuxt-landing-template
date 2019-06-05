<template>
<v-carousel hide-delimiters style="height: 100%; position: relative;">
        <v-carousel-item  v-for="item in itemsArray" :src="item.src" :key="item.id"
        >
        <v-card  elevation="0" height="500px" width="100%" v-if="item.jumbotron" class="transpa">
          <v-responsive  class="jumbotron">
            <v-card-text style="margin-top: 130px;">
                  <h4 class="display-2 text-xs-center text-uppercase font-weight-medium mt-2">
                    {{$t(item.title)}}
                  </h4>
                  <div class="mt-3 pl-3 pr-3">
                  <h3 class="title text-xs-center pt-2 font-weight-medium">
                    {{$t('carouselSubTitle')}} <a href="https://malbonm07.github.io/miguelalonsomarroquin/" class="font-weight-medium" style="color: #00BFA5">{{$t('myWeb')}}</a>
                  </h3>
                  </div>
                  <div class="mt-5" style="text-align: center;">
                    <v-btn large color="teal accent-4">
                        <slot></slot>
                    </v-btn>
                  </div>
            </v-card-text>
          </v-responsive>
        </v-card>
              <!-- <v-layout align-center wrap>
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
              </v-layout> -->
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
