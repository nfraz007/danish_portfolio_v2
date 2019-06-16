import Vuex from 'vuex'
import axios from 'axios'

export default () => {
    return new Vuex.Store({
        state: {
            loader: false,
            data: {},
            meta: {},
            menu: [],
            menu_current: "",
            social: [],
            profile: {},
            section: {}
        },
        mutations: {
            incr(state) {
                state.counter++
            },
            ajax_index(state) {
                state.loader = true
                axios.get("http://localhost/nazish/personal/danish_portfolio_api_v2/").then((response) => {
                    response = response.data
                    state.data = response.data
                    state.meta = response.meta
                    state.menu = response.menu
                    state.menu_current = response.menu_current
                    state.social = response.social
                    state.profile = response.profile
                    state.section = response.section

                    state.loader = false
                });
            },
            ajax_work_experience(state) {
                state.loader = true
                axios.get("http://localhost/nazish/personal/danish_portfolio_api_v2/work-experience").then((response) => {
                    response = response.data
                    state.data = response.data
                    state.meta = response.meta
                    state.menu = response.menu
                    state.menu_current = response.menu_current
                    state.social = response.social
                    state.profile = response.profile
                    state.section = response.section

                    state.loader = false
                });
            },
            ajax_projects(state) {
                state.loader = true
                axios.get("http://localhost/nazish/personal/danish_portfolio_api_v2/projects").then((response) => {
                    response = response.data
                    state.data = response.data
                    state.meta = response.meta
                    state.menu = response.menu
                    state.menu_current = response.menu_current
                    state.social = response.social
                    state.profile = response.profile
                    state.section = response.section

                    state.loader = false
                });
            },
            ajax_certifications(state) {
                state.loader = true
                axios.get("http://localhost/nazish/personal/danish_portfolio_api_v2/certifications").then((response) => {
                    response = response.data
                    state.data = response.data
                    state.meta = response.meta
                    state.menu = response.menu
                    state.menu_current = response.menu_current
                    state.social = response.social
                    state.profile = response.profile
                    state.section = response.section

                    state.loader = false
                });
            }
        }
    })
}