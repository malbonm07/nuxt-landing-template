<template>
    <div>
       <v-card elevation="0" class="transpa">
           <v-img :src="agentObject.src" alt="agent image" style="border-radius: 3px;" :height="heightCard"></v-img>
           <v-card-title primary-title>
               <div class="headline">
                 <h3 class="title pb-1 font-weight-medium text-uppercase">{{agentObject.name}}</h3>
                 <span class="subheading font-weight-light text-uppercase">{{agentObject.subTitle}}</span> 
               </div>
           </v-card-title>
           <v-card-text>
               <p class="subheading font-weight-light">{{agentObject.description}}</p>
           </v-card-text>
                <v-btn depressed large color="teal accent-4" class="ml-3" dark>
                    <slot name="butname"></slot>
                </v-btn>
       </v-card>
    </div>
</template>

<script>
export default {
    name: 'cardAgent',
    props: {
        agentObject: {
            type: Object,
            required: true
        },
        heightCard:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
