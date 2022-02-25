<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Rating 
                    :value = 'data.rating' 
                    :title = '"Rating"'
                    :action = 'action'
                    :action_key = '"rating"' 
                />
                <MM_Image 
                    :value = 'data.banner' 
                    :title = '"Banner"'
                    :action = 'action'
                    :action_key = '"banner"' 
                />
                <MM_Input
                    :value = 'data.jackpot'
                    :action = 'action' 
                    :title = '"Jackpot"' 
                    :action_key = '"jackpot"'
                />
                <MM_Input
                    :value = 'data.risk_game'
                    :action = 'action' 
                    :title = '"Risk game"' 
                    :action_key = '"risk_game"'
                />
                <MM_Input
                    :value = 'data.max_gain'
                    :action = 'action' 
                    :title = '"Max gain"' 
                    :action_key = '"max_gain"'
                />
                <MM_Input
                    :value = 'data.max_bet'
                    :action = 'action' 
                    :title = '"Max bet"' 
                    :action_key = '"max_bet"'
                />
                <MM_Input
                    :value = 'data.min_bet'
                    :action = 'action' 
                    :title = '"Min bet"' 
                    :action_key = '"min_bet"'
                />
                <MM_Input
                    :value = 'data.iframe'
                    :action = 'action' 
                    :title = '"iframe"' 
                    :action_key = '"iframe"'
                />
                <MM_Multiple_Two_Input
                    :value = 'data.details'
                    :action = 'action' 
                    :title = '"Details"' 
                    :action_key = '"details"'
                    /> 
                <MM_Characters_Game 
                    :value = 'data.characters'
                    :action = 'action' 
                    :title = '"Characters"' 
                    :action_key = '"characters"' 
                />     
                <MM_Multiple_Two_Input_Image 
                    :value = 'data.gallery'
                    :action = 'action' 
                    :title = '"Gallery"' 
                    :action_key = '"gallery"' 
                />       
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    import MM_Checkbox from '~/components/lib/MM_Checkbox'
    import MM_Characters_Game from '~/components/lib/MM_Characters_Game'    
    import MM_Multiple_Two_Input_Image from '~/components/lib/MM_Multiple_Two_Input_Image' 
    import MM_Rating from '~/components/lib/MM_Rating' 
    export default {
        name: "slotMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Multiple_Input, MM_Checkbox, MM_Characters_Game, 
        MM_Multiple_Two_Input_Image, MM_Rating},
        data() {
            return {}
        }
    }
</script>