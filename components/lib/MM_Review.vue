<template>
  <v-container class="container--fluid pa-0">
    <v-row>
      <v-col class="offset-1 col-10 font-podkova-bold blue-grey darken-4">
        <v-expansion-panels inset>
          <v-expansion-panel>
            <v-expansion-panel-header >{{title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <v-row v-for="(item, index) in currenData" :key="index" class="bb_orange">
                <v-col class="col-6">
                  <v-text-field
                    label="Имя"
                    prepend-icon="mdi-tooltip-edit"
                    type="text"
                    color="deep-orange darken-2"
                    v-model="currenData[index].review_name"
                    @change="change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-6">
                  <v-text-field
                    label="Рейтинг, мак 100"
                    prepend-icon="mdi-tooltip-edit"
                    type="text"
                    color="deep-orange darken-2"
                    v-model="currenData[index].review_rating"
                    @change="change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-12">
                  <v-text-field
                    label="Дата (16.05.2021)"
                    prepend-icon="mdi-tooltip-edit"
                    type="text"
                    color="deep-orange darken-2"
                    v-model="currenData[index].date"
                    @change="change"
                  ></v-text-field>
                </v-col>
                <v-col class="col-12">
                  <v-textarea
                    label="Текст"
                    prepend-icon="mdi-tooltip-edit"
                    type="text"
                    color="deep-orange darken-2"
                    v-model="currenData[index].review_text"
                    @change="change"
                  ></v-textarea>
                </v-col>
                <v-col class="col-12 text-right">
                  <v-btn
                      class="deep-orange darken-2 font-podkova-bold"
                      @click="deleteItem(item)"
                  >
                  <v-icon left>mdi-delete</v-icon>
                  Delete
                  </v-btn>
                </v-col>
              </v-row>
              <v-btn
                      class="deep-orange darken-2 font-podkova-bold mt-7"
                      @click="addItem"
              >
                <v-icon left>mdi-playlist-plus</v-icon>
                Add
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "MM_Review",
        props: ['value', 'title', 'action', 'action_key'],
        data(){
            return {
                currenData: []
            }
        },
        methods: {
            addItem(){
              this.currenData.unshift({
                  review_name: '',
                  review_rating: '',
                  date: '',
                  review_text: ''
              })
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
            },
            change(){
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData)
            },
            deleteItem(item){
              this.currenData = this.currenData.filter(obj => obj !== item)
              const currenData = {
                      key: this.action_key,
                      value: this.currenData
                    }
              this.$store.dispatch(this.action, currenData) 
            },
        },
        mounted(){
          this.currenData = this.value
        }
    }
</script>

<style scoped>
.bb_orange {
  border-bottom: 1px solid #FF3D00;
}
</style>