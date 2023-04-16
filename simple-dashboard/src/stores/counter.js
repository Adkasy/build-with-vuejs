import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => (
    {

    }),


  getters: {
    doubleCount: (state) => state.count * 2,
  },


  actions: {
    // async getAllData() {
    //   await fetch("https://dummyjson.com/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.allUser = data.users; // Menyimpan hasil respon ke variabel allData
    //     });

    //   console.log(this.allUser, "<-- Ini hasil lognya");
    // },
  },
})
