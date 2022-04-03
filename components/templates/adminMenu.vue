<template>
  <div>
    <v-app-bar app dark >
      <v-app-bar-nav-icon
              @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text exact
               class="font-podkova-bold nav-link"
               v-for="link in links"
               :key="link.title" :to="link.url"
        >
          {{link.title}}
        </v-btn>
        <v-btn text exact
               class="font-podkova-bold nav-link"
               @click="logout"
               no-prefetch
        >
          LOGOUT
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer app temporary
                         v-model="drawer" class="grey darken-4" color="deep-orange darken-2">
      <v-container>
        <v-layout class="mt-5 mb-5" wrap>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  exact
                  no-prefetch
                  to="/admin">
            <v-icon left color="white">mdi-bank</v-icon>
            Main
          </v-btn>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  no-prefetch
                  to="/admin/settings">
            <v-icon left color="white">mdi-message-draw</v-icon>
            Settings
          </v-btn>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  no-prefetch
                  to="/admin/static-pages">
            <v-icon left color="white">mdi-checkbox-multiple-blank</v-icon>
            Static Pages
          </v-btn>
          <v-btn
                  class="deep-orange darken-2 justify-start display_block mb-5 font-podkova-bold"
                  dark
                  no-prefetch
                  to="/admin/options">
            <v-icon left color="white">mdi-share-variant</v-icon>
            Options
          </v-btn>
          <v-menu
                  transition="slide-y-transition"
                  bottom
                  no-prefetch
                  class="d-block"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                      class="deep-orange darken-2 justify-start display_block font-podkova-bold"
                      dark
                      v-bind="attrs"
                      v-on="on"
              >
                <v-icon left>mdi-folder-multiple-outline</v-icon>
                Casino
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in casinoPage"
                      :key="i" :to="item.link"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
                  transition="slide-y-transition"
                  bottom
                  no-prefetch
                  class="d-block"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                      class="deep-orange mt-5 darken-2 justify-start display_block font-podkova-bold"
                      dark
                      v-bind="attrs"
                      v-on="on"
              >
                <v-icon left>mdi-folder-multiple-outline</v-icon>
                Games
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in slotsPage"
                      :key="i" :to="item.link"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-layout>
        <v-layout class="justify-space-around mt-3 align-center">
          <v-btn class="deep-orange darken-2 display_block justify-start" color="deep-orange darken-2 font-podkova-bold"
                 @click="logout">
            <v-icon left color="white">mdi-logout</v-icon>
            Logout
          </v-btn>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
    export default {
        name: "AdminMenu",
        data(){
            return {
                drawer: false,
                links: [
                    {title:'MAIN', url:'/admin', icon:'mdi-bank'},
                    {title:'SETTINGS', url:'/admin/settings', icon:'mdi-message-draw'},
                    {title:'STATIC PAGES', url:'/admin/static-pages', icon:'mdi-checkbox-multiple-blank'},
                    {title:'OPTIONS', url:'/admin/options', icon:'mdi-share-variant'},
                    {title:'CASINO', url:'/admin/casino', icon:'mdi-cash-usd'},
                    {title:'GAMES', url:'/admin/game', icon:'mdi-gamepad-variant'}
                ],
                casinoPage: [
                    { title: 'All casino', link: '/admin/casino' },
                    { title: 'Add casino', link: '/admin/casino/add' },
                    { title: 'All category casino', link: '/admin/casino/category' },
                    { title: 'Add category casino', link: '/admin/casino/category/add' }
                ],
                slotsPage: [
                    { title: 'All games', link: '/admin/game' },
                    { title: 'Add games', link: '/admin/game/add' },
                    { title: 'All category games', link: '/admin/game/category' },
                    { title: 'Add category games', link: '/admin/game/category/add' }
                ]
            }
        },
        methods: {
            async logout(){
                const user = this.$store.getters['user/getUser']
                const data = {
                  session: user.session,
                  id: user.id,
                }
                await this.$store.dispatch('user/logout', data)
                const currentUser = this.$store.getters['user/getUser']
                if(!currentUser.login) this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
  .border {
    border: 1px solid red;
  }
  .display_block {
    width:100%;
  }
  .nav-link {
    font-size: 12px;
  }
</style>
