// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ['@nuxtjs/tailwindcss'],

    app:{
        head:{
            title:'Nuxt DOjo',
            meta:[
                {
                    name:'description',
                    content:'Everything about Nuxt 3',
                }
            ],
            link:[
                {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet'}
            ]
        }
    },

    runtimeConfig:{
        currencyKey:process.env.CURRENCY_API_KEY,
        //exposing public
        public:{

        }
    }
})
