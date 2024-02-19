export const setFilters = {
 methods: {
     async setFilters() {

         // update our "search" object with the filters applied
         await Promise.all([
             this.$store.commit('setSelectedCategories', this.selectedCategories),
             this.$store.commit('setFilters', this.filters),
         ]);

     }
 }
}

export const setCalendarFilters = {
 methods: {
     async setCalendarFilters() {

         // update our "search" object with the filters applied
         await Promise.all([
             this.$store.commit('setSearch', this.searchForm),
             this.$store.commit('setFilters', this.filters),
         ]);

     }
 }
}

export const loadSubNav = {
 methods: {
     loadSubNav(options) {
         this.$store.dispatch("setNavigationState", options);
     },
 }
}