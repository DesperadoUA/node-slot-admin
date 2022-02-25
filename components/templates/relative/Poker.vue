<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
            <MM_Relative_Posts 
                    :value = 'data.category'
                    :action = 'action' 
                    :title = '"Relative category"' 
                    :action_key = '"category"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_license'
                    :action = 'action' 
                    :title = '"Relative license"' 
                    :action_key = '"poker_license"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_lang'
                    :action = 'action' 
                    :title = '"Relative lang"' 
                    :action_key = '"poker_lang"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_country'
                    :action = 'action' 
                    :title = '"Relative country"' 
                    :action_key = '"poker_country"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_currencies'
                    :action = 'action' 
                    :title = '"Relative currencies"' 
                    :action_key = '"poker_currencies"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_type_payment'
                    :action = 'action' 
                    :title = '"Relative type payment"' 
                    :action_key = '"poker_type_payment"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_technology'
                    :action = 'action' 
                    :title = '"Relative technology"' 
                    :action_key = '"poker_technology"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.poker_payment'
                    :action = 'action' 
                    :title = '"Relative payments"' 
                    :action_key = '"poker_payment"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '~/components/lib/MM_Relative_Posts'
    export default {
        name: "pokerCategory",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>