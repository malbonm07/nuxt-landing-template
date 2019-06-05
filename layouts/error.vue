<template>
  <v-container grid-list-xs fluid>
    <component :is="errorPage" :error="error"/>
  </v-container>
</template>

<script>
import error404 from '@/components/error/error404.vue'
import error500 from '@/components/error/error500.vue'

export default {
  props: ['error'],
  name: 'page-error',
  components: {
      error404,
      error500
  },
  layout: 'default',  // you can set a custom layout for the error page
  computed: {
      errorPage() {
          if(this.error.statusCode === 404) {
              return error404
          }
          return error500
      }
  } 
}
</script>