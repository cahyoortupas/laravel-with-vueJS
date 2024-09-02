

import Vuex from 'vuex'
import subject from './subject'

export default new Vuex.Store({
    state: {
        subjects: [],
    },
    mutations: {
        subject(state,data) {
            return state.subjects = data
         }
    },
    actions: {
        allCategoryFromDatabase(context){
            axios.get("api/subject")
               .then((response)=>{
                  context.commit("subject",response.data.data) 
               }).catch(()=>{ 
                  console.log("Error") 
               })
        }
    },
    getters: {
        getSubject(state){ 
            return state.subjects
         }
    },
    modules: {
        subject
    }
  })