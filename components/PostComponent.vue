<template>
                    <v-card
                        color="#F5F5F5"
                        elevation="0"
                        class="mb-4"
                    >
                        <v-card-title>
                            <v-list-tile-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                :src="postObject.avatar"
                            ></v-img>
                            </v-list-tile-avatar>
                            <v-card-title>
                            <div>
                                <div class="headline text-capitalize pb-1">{{postObject.user}}</div>
                                <span class="grey--text text-uppercase">{{postObject.date}}</span>
                            </div>
                            </v-card-title>
                        </v-card-title>
                        <div class="pl-5">
                            <div class="subheading grey--text pl-5">
                                {{postObject.comment}}
                            </div>
                            <v-list-tile class="grow pl-4">
                                <v-list-tile-content>
                                        <v-btn depressed small color="#E0E0E0">Reply</v-btn>
                                </v-list-tile-content>
                            </v-list-tile>
                        </div>
                    </v-card>
</template>

<script>
export default {
    props: {
        postObject: {
            type: Object,
            required: true
        }
    }

}
</script>

<style>

</style>
