<template>
  <MainLoop/>
</template>

<script>
  import Guards from '~/guards'
  import MainLoop from '~/components/templates/mainLoop'
    export default {
        name: 'root',
        layout: 'admin',
        components: {MainLoop},
        data(){
            return {
              guard: 'common',
            }
        },
        mounted(){
          const user = this.$store.getters['user/getUser']
          if(!Guards.checkRouts(this.guard, user.role)) this.$router.replace('/admin')
        }
    }
</script>

<style scoped>

</style>