<template>
  <div>
      <v-container>
      <v-row>
        <v-col class="offset-1 col-10 mt-10">
          <h1 class="page_title font-podkova-bold">{{data.title}}</h1>
        </v-col>
      </v-row>
      <v-row>
           <v-col class="mt-0">
                    <MM_Image v-if = "data.editor === 'image'" 
                                :value = 'data.value' 
                                :title = 'data.title'
                                :action = 'action'
                                :action_key = '"value"' />
                    <MM_Multiple_Input v-if = "data.editor === 'multiple_input'"
                                :value = 'data.value'
                                :action = 'action'
                                :title = 'data.title'
                                :action_key = '"value"' />

           </v-col>
      </v-row>
    </v-container>
    <v-container>
        <v-row>
          <v-col class="offset-1 col-10 mt-5 mb-10">
            <v-btn
                  class="font-podkova-bold deep-orange darken-2"
                  text
                  @click="update()"
          >
            Update
          </v-btn>
          </v-col>
        </v-row>
    </v-container>
    <snackeBar :status = "snackbar.status"
               :text = "snackbar.text"
               :timeout = "snackbar.timeout"
    />
  </div>
</template>

<script>
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    import snackeBar from '~/components/templates/snackbar'
    import Guards from '~/guards'
    export default {
        name: "singleOptions",
        layout: 'admin',
        components: {snackeBar, MM_Multiple_Input},
        async mounted() {
            const user = this.$store.getters['user/getUser']
            if(!Guards.checkRouts(this.type, user.role)) this.$router.replace('/admin')
            const data = {
                session: user.session,
                id: user.id,
                url: this.$route.params.id
            }
            await this.$store.dispatch('options/setCurrentPage', data)
            this.data = this.$store.getters['options/getCurrentPage']
        },
        data(){
          return {
              data:{},
              snackbar: {
                  status: false,
                  text: 'Options Update',
                  timeout: 5000
                },
              action: 'options/changeStateCurrentPage',
              type: 'option'
          }
        },
        methods: {
          async update() {
            const user = this.$store.getters['user/getUser']
            const data = {
                session: user.session,
                id: user.id,
                data: this.$store.getters['options/getCurrentPage']
            }
    
            await this.$store.dispatch('options/updateCurrentPage', data)
            this.snackbar.status = true
            setTimeout(()=>{
              this.snackbar.status = false  
            }, this.snackbar.timeout)
          }
        }
    }
</script>

<style scoped>

</style>