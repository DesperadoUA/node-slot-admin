<template>
  <v-btn v-if="fullPath"
          color="red lighten-2"
          dark
          class="deep-orange darken-2 font-podkova-bold post_preview"
         @click="go"
  >
    <v-icon>mdi-page-next</v-icon>
  </v-btn>
</template>

<script>
  import config from '~/config.js'
    export default {
        name: "MM_Post_Preview",
        props: {
            slug: {
                type: String,
                default: undefined
            },
            permalink: {
                type: String,
                default: undefined
            },
            fullPath: {
                type: String,
                default: undefined
            }
        },
        mounted() {
            if(this.slug && this.permalink) {
                this.fullPath = config.PROD_URL + `${this.slug}/`+this.permalink
            }
            else if(this.permalink){
                this.fullPath = config.PROD_URL + `/${this.permalink}/`
            }
        },
        methods: {
            go(){
                window.open(this.fullPath, '_blank')
            }
        }
    }
</script>

<style scoped>
.post_preview {
  position: fixed;
  right: 0px;
  top: 60%;
  z-index: 2;
}
</style>