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
                Vendors
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in vendorsPage"
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
                Payments
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in paymentsPage"
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
                Slots
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
                Bonuses
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in bonusesPage"
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
                Pokers
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in pokerPage"
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
                Country
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in countryPage"
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
                Currency
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in currencyPage"
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
                Languages
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in langPage"
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
                Licenses
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in licensePage"
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
                Technology
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in technologyPage"
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
                Type payment
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in typePaymentPage"
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
                Type bonus
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                      no-prefetch
                      class="font-podkova-bold"
                      v-for="(item, i) in typeBonusPage"
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
                    {title:'POKER', url:'/admin/poker', icon:'mdi-cards-spade'},
                    {title:'VENDORS', url:'/admin/vendor', icon:'mdi-android-studio'},
                    {title:'PAYMENTS', url:'/admin/payment', icon:'mdi-cash'},
                    {title:'GAMES', url:'/admin/game', icon:'mdi-gamepad-variant'},
                    {title:'COUNTRY', url:'/admin/country', icon:'mdi-globe-model'},
                    {title:'CURRENCY', url:'/admin/currency', icon:'mdi-currency-brl'},
                    {title:'BONUSES', url:'/admin/bonus', icon:'mdi-wallet-giftcard'},
                    {title:'LANG', url:'/admin/lang', icon:'mdi-google-translate'},
                    {title:'LICENSES', url:'/admin/license', icon:'mdi-license'},
                    {title:'TECHNOLOGY', url:'/admin/technology', icon:'mdi-math-compass'},
                    {title:'TYPE PAYMENT', url:'/admin/type-payment', icon:'mdi-contactless-payment'},
                    {title:'TYPE BONUS', url:'/admin/type-bonus', icon:'mdi-contactless-payment'}
                ],
                casinoPage: [
                    { title: 'All casino', link: '/admin/casino' },
                    { title: 'Add casino', link: '/admin/casino/add' },
                    { title: 'All category casino', link: '/admin/casino/category' },
                    { title: 'Add category casino', link: '/admin/casino/category/add' }
                ],
                vendorsPage: [
                    { title: 'All vendors', link: '/admin/vendor' },
                    { title: 'Add vendors', link: '/admin/vendor/add' },
                    { title: 'All category vendors', link: '/admin/vendor/category' },
                    { title: 'Add category vendors', link: '/admin/vendor/category/add' }
                ],
                paymentsPage: [
                    { title: 'All payments', link: '/admin/payment' },
                    { title: 'Add payments', link: '/admin/payment/add' },
                    { title: 'All category payments', link: '/admin/payment/category' },
                    { title: 'Add category payments', link: '/admin/payment/category/add' }
                ],
                slotsPage: [
                    { title: 'All games', link: '/admin/game' },
                    { title: 'Add games', link: '/admin/game/add' },
                    { title: 'All category games', link: '/admin/game/category' },
                    { title: 'Add category games', link: '/admin/game/category/add' }
                ],
                bonusesPage: [
                    { title: 'All bonuses', link: '/admin/bonus' },
                    { title: 'Add bonus', link: '/admin/bonus/add' },
                    { title: 'All category bonuses', link: '/admin/bonus/category' },
                    { title: 'Add category bonuses', link: '/admin/bonus/category/add' }
                ],
                pokerPage: [
                    { title: 'All pokers', link: '/admin/poker' },
                    { title: 'Add poker', link: '/admin/poker/add' },
                    { title: 'All category poker', link: '/admin/poker/category' },
                    { title: 'Add category poker', link: '/admin/poker/category/add' }
                ],
                countryPage: [
                    { title: 'All country', link: '/admin/country' },
                    { title: 'Add country', link: '/admin/country/add' },
                    { title: 'All category country', link: '/admin/country/category' },
                    { title: 'Add category country', link: '/admin/country/category/add' }
                ],
                currencyPage: [
                    { title: 'All currency', link: '/admin/currency' },
                    { title: 'Add currency', link: '/admin/currency/add' },
                    { title: 'All category currency', link: '/admin/currency/category' },
                    { title: 'Add category currency', link: '/admin/currency/category/add' }
                ],
                langPage: [
                    { title: 'All languages', link: '/admin/lang' },
                    { title: 'Add language', link: '/admin/lang/add' },
                    { title: 'All category language', link: '/admin/lang/category' },
                    { title: 'Add category language', link: '/admin/lang/category/add' }
                ],
                licensePage: [
                    { title: 'All licenses', link: '/admin/license' },
                    { title: 'Add licenses', link: '/admin/license/add' },
                    { title: 'All category license', link: '/admin/license/category' },
                    { title: 'Add category license', link: '/admin/license/category/add' }
                ],
                technologyPage: [
                    { title: 'All technology', link: '/admin/technology' },
                    { title: 'Add technology', link: '/admin/technology/add' },
                    { title: 'All category technology', link: '/admin/technology/category' },
                    { title: 'Add category technology', link: '/admin/technology/category/add' }
                ],
                typePaymentPage: [
                    { title: 'All type payment', link: '/admin/type-payment' },
                    { title: 'Add type payment', link: '/admin/type-payment/add' },
                    { title: 'All category type payment', link: '/admin/type-payment/category' },
                    { title: 'Add category type payment', link: '/admin/type-payment/category/add' }
                ],
                typeBonusPage: [
                    { title: 'All type bonus', link: '/admin/type-bonus' },
                    { title: 'Add type bonus', link: '/admin/type-bonus/add' },
                    { title: 'All category type bonus', link: '/admin/type-bonus/category' },
                    { title: 'Add category type bonus', link: '/admin/type-bonus/category/add' }
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
