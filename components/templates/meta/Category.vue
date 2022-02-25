<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Multiple_Input_Text 
                    :value = 'data.faq'
                    :action = 'action' 
                    :title = '"Faq"' 
                    :action_key = '"faq"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    export default {
        name: "categoryMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text},
        data() {
            return {}
        }
    }
</script>