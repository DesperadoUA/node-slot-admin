<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.sub_title'
                    :action = 'action' 
                    :title = '"Sub title"' 
                    :action_key = '"sub_title"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Input from '~/components/lib/MM_Input'
    export default {
        name: "technologyMeta",
        props: ['data', 'action'],
        components: {MM_Input},
        data() {
            return {}
        }
    }
</script>