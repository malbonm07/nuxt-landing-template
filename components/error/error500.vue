<template>
    <v-layout row wrap align-center justify-center class="errorPage">
            <v-flex shrink>
                <p class="display-3 text-uppercase text-xs-center font-weight-bold"
                    style="color: #263238;"
                    >
                    <span style="color: #BF360C;">Error 500</span><br>This page doesn`t exist.
                </p>
            </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {}
        }
    },
    name: 'error500'
}
</script>

<style>

</style>
