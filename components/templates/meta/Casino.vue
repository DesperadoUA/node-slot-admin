<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    :title = '"Referal link"' 
                    :action_key = '"ref"'
                    />
                <MM_Input
                    :value = 'data.phone'
                    :action = 'action' 
                    :title = '"Phone"' 
                    :action_key = '"phone"'
                    />
                <MM_Multiple_Input_Text 
                    :value = 'data.faq'
                    :action = 'action' 
                    :title = '"Faq"' 
                    :action_key = '"faq"'
                    />
                <MM_Rating 
                    :value = 'data.rating'
                    :action = 'action' 
                    :title = '"Rating"' 
                    :action_key = '"rating"'
                />
                <MM_Checkbox 
                    :value = 'data.close'
                    :action = 'action' 
                    :title = '"Close"' 
                    :action_key = '"close"'
                />
                <MM_Input
                    :value = 'data.min_deposit'
                    :action = 'action' 
                    :title = '"Min deposit"' 
                    :action_key = '"min_deposit"'
                    />
                <MM_Input
                    :value = 'data.min_payments'
                    :action = 'action' 
                    :title = '"Min payments"' 
                    :action_key = '"min_payments"'
                    />
                <MM_Input
                    :value = 'data.email'
                    :action = 'action' 
                    :title = '"Email"' 
                    :action_key = '"email"'
                    />
                <MM_Input
                    :value = 'data.chat'
                    :action = 'action' 
                    :title = '"Chat"' 
                    :action_key = '"chat"'
                    />
                <MM_Input
                    :value = 'data.year'
                    :action = 'action' 
                    :title = '"Year"' 
                    :action_key = '"year"'
                    />
                <MM_Input
                    :value = 'data.site'
                    :action = 'action' 
                    :title = '"Site"' 
                    :action_key = '"site"'
                    />
                <MM_Input
                    :value = 'data.withdrawal'
                    :action = 'action' 
                    :title = '"Withdrawal"' 
                    :action_key = '"withdrawal"'
                    />
                <MM_Input
                    :value = 'data.number_games'
                    :action = 'action' 
                    :title = '"Number games"' 
                    :action_key = '"number_games"'
                    />
                <MM_Review
                    :value = 'data.reviews'
                    :action = 'action' 
                    :title = '"Reviews"' 
                    :action_key = '"reviews"'
                    />
                <MM_Rating
                        :value = 'data.reliability'
                        :action = 'action'
                        :title = '"Надежность"'
                        :action_key = '"reliability"'
                />
                <MM_Rating
                        :value = 'data.convenience_payments'
                        :action = 'action'
                        :title = '"Удобство платежей"'
                        :action_key = '"convenience_payments"'
                />
                <MM_Rating
                        :value = 'data.interface'
                        :action = 'action'
                        :title = '"Интерфейс"'
                        :action_key = '"interface"'
                />
                <MM_Rating
                        :value = 'data.support'
                        :action = 'action'
                        :title = '"Поддержка"'
                        :action_key = '"support"'
                />
                <MM_Rating
                        :value = 'data.popularity'
                        :action = 'action'
                        :title = '"Популярность"'
                        :action_key = '"popularity"'
                />
                <MM_Rating
                        :value = 'data.shares'
                        :action = 'action'
                        :title = '"Бонусы и акции"'
                        :action_key = '"shares"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '~/components/lib/MM_Multiple_Input_Text'
    import MM_Input from '~/components/lib/MM_Input'
    import MM_Rating from '~/components/lib/MM_Rating'
    import MM_Multiple_Input from '~/components/lib/MM_Multiple_Input'
    import MM_Checkbox from '~/components/lib/MM_Checkbox'
    import MM_Multiple_Two_Input from '~/components/lib/MM_Multiple_Two_Input'
    import MM_Review from '~/components/lib/MM_Review'
    export default {
        name: "casinoMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input, 
        MM_Checkbox, MM_Multiple_Two_Input, MM_Review},
        data() {
            return {}
        }
    }
</script> 