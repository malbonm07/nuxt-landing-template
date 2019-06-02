<template>
  <v-data-table
    :headers="propTableHeaders"
    :items="propTableCategories"
    hide-actions
    disable-initial-sort
  >
    <template v-slot:items="props">
      <td><a href="" class="subheading text-capitalize" style="color: #00BFA5">{{ props.item.name }}</a></td>
      <td class="text-xs-right"><span>(</span>{{ props.item.posts }}<span>)</span></td>
    </template>
  </v-data-table>
</template>

<script>
export default {
    props:{
      propTableHeaders: {
        type: Array,
        required: true
      },
      propTableCategories: {
        type: Array,
        required: true
      }
    },

}
</script>

<style>

</style>
