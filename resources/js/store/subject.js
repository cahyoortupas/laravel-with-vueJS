export default {
    namespaced: true,
    state: {
        subjects: [],
    },
    mutations: {
        subject(state,data) {
            return state.subjects = data
         }
    },
    actions: {
        allsubjectFromDatabase(context){
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
}