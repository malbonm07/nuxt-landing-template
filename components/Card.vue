<template>
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      :color="colorTheme"
      max-width="600"
      v-if="cardObject"
      nuxt
      :to="cardObject.linkerTo"
    >
<!--------------- card's imagen --------------->
      <v-img
        :aspect-ratio="12/9"
        :src="cardObject.src"
      >
        <div v-if="cardObject.button">
            <v-expand-transition>
                <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-1 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            ${{cardObject.price}}
                </div>
                </v-expand-transition>
        </div>
      </v-img>

<!--------------- end card's imagen --------------->

<!--------------- card's text --------------->

      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="teal accent-4"
          class="white--text"
          fab
          right
          top
          v-if="cardObject.button"
        >
          <v-icon>shopping_cart</v-icon>
        </v-btn>

<!--------------- card's header --------------->

        <div class="font-weight-light grey--text title mb-2">
            <slot name="header"></slot>
        </div>

<!--------------- card's title --------------->

        <slot name="title"></slot>

<!--------------- card's description --------------->

        <slot name="description"></slot>
      </v-card-text>

<!--------------- end card's imagen --------------->
      <div v-if="cardObject.socialMedia">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat icon color="#263238">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" style="font-size: 20px;"/>
          </v-btn>
          <v-btn flat icon color="#263238">
            <font-awesome-icon :icon="['fab', 'twitter']"  style="font-size: 20px;"/>
          </v-btn>
          <v-btn flat icon color="#263238">
            <font-awesome-icon :icon="['fab', 'instagram']"  style="font-size: 20px;"/>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
 </v-hover>
</template>

<script>
export default {
    props: {
        cardObject: {
            type: Object,
            required:true
        },
        colorTheme: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>
