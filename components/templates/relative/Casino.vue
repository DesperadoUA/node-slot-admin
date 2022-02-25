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
                    :value = 'data.casino_lang'
                    :action = 'action' 
                    :title = '"Relative lang"' 
                    :action_key = '"casino_lang"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_license'
                    :action = 'action' 
                    :title = '"Relative license"' 
                    :action_key = '"casino_license"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_country'
                    :action = 'action' 
                    :title = '"Relative country"' 
                    :action_key = '"casino_country"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_currency'
                    :action = 'action' 
                    :title = '"Relative currency"' 
                    :action_key = '"casino_currency"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_type_payment'
                    :action = 'action' 
                    :title = '"Relative type payment"' 
                    :action_key = '"casino_type_payment"'
                    />
           <MM_Relative_Posts 
                    :value = 'data.casino_payment'
                    :action = 'action' 
                    :title = '"Relative payment"' 
                    :action_key = '"casino_payment"'
                    />
           <MM_Relative_Posts 
                    :value = 'data.casino_type_bonus'
                    :action = 'action' 
                    :title = '"Relative type bonus"' 
                    :action_key = '"casino_type_bonus"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_technology'
                    :action = 'action' 
                    :title = '"Relative technology"' 
                    :action_key = '"casino_technology"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_vendor'
                    :action = 'action' 
                    :title = '"Relative vendor"' 
                    :action_key = '"casino_vendor"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '~/components/lib/MM_Relative_Posts'
    export default {
        name: "casinoCategory",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>