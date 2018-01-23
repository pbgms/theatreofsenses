import _ from 'lodash';
import {about, events, works, workList} from './data/data.js'

export default {
    getSiteProps: () => ({
        title: 'React Static',
    }),
    getRoutes: () => {

        const languages = ['en', 'lt']

        const array = languages.map(lang => {

            const worksData = filterLanguage(JSON.parse(JSON.stringify(works)), lang)

            return [
                {
                    path: `/${lang}/about`,
                    getProps: () => ({
                        data: filterLanguage(JSON.parse(JSON.stringify(about)), lang),
                    }),

                },
                {
                    path: `/${lang}/events`,
                    getProps: () => ({
                        data: filterLanguage(JSON.parse(JSON.stringify(events)), lang),
                    }),

                },
                {
                    path: `/${lang}/works`,
                    getProps: () => ({
                        works: worksData,
                        lang
                    }),
                    children: worksData.works.map(work => ({
                        path: `/${work.slug}`,
                        getProps: () => ({
                            works: worksData,
                            work,
                            lang
                        }),
                    }))

                },

            ]
        })

        let flattened = [].concat(...array)

        return [

            {
                path: '/',
            },

            ...flattened,

        ];
    },
};


function filterLanguage(value, requestLanguage){

    // recursively scan all values. If value has a key equal to a language code,
    // return that instead of the whole object.

    if (value){
        if (Object.keys(value).indexOf(requestLanguage) > -1){
            return value[requestLanguage]
        } else {
            _.forOwn(value, (val, key)=>{
                if (val === Object(val)) {
                    value[key] = filterLanguage(val, requestLanguage)
                }
            })
            return value
        }
    } else {
        return null
    }
}

