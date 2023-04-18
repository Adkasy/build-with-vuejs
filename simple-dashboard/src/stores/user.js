import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => (
    {
      allUser: [],
      image: "",
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      phoneNumber: "",
      university: "",
      formError: false,
      newAddDataContainer: [],
      newEditDataContainer: [],
    }),


  getters: {
    // doubleCount: (state) => state.count * 2,
  },


  actions: {
    async getAllData() {
      await fetch(`https://dummyjson.com/users?limit=0`)
        .then((res) => res.json())
        .then((data) => {
          this.allUser = data.users; // Nyimpen hasil respon ke variabel allData
          this.allUser = [...this.allUser, ...this.newAddDataContainer, ...this.newEditDataContainer]
        });

      console.log(this.allUser, "<-- Ini hasil lognya");
    },

    async deleteUser(userID) {
      const deleteData = await fetch(`https://dummyjson.com/users/${userID}`, {
        method: "DELETE",
      }).then((res) => res.json());

      console.log(deleteData, "<- Ini data yang di delete");

      this.allUser = this.allUser.filter((el) => (el.id !== deleteData.id))
    },

    submitForm() {
      if (
        !this.image ||
        !this.firstName ||
        !this.lastName ||
        !this.gender ||
        !this.age ||
        !this.phoneNumber ||
        !this.university
      ) {
        this.formError = true;
      } else {
        this.formError = false;
      }
    },

    async addNewUser() {
      console.log("Submit button on add page was clicked");

      this.submitForm()

      const newUser = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: this.image,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          age: this.age,
          phone: this.phoneNumber,
          university: this.university,
        }),
      })
        .then((res) => res.json())

      console.log(newUser);

      if (this.formError) {
        alert('Please fill in all fields')
      } else {
        this.newAddDataContainer.push(newUser)
        this.router.push('/')
      }


      //Reset form ke awal biar kosong lagi
      this.image = ""
      this.firstName = ""
      this.lastName = ""
      this.gender = ""
      this.age = ""
      this.phoneNumber = ""
      this.university = ""

    },

    async updateDataUser(userID) {
      const updateData = await fetch(
        "https://dummyjson.com/users/" + userID,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image: this.image,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            age: this.age,
            phone: this.phoneNumber,
            university: this.university,
          }),
        }
      ).then((res) => res.json());

      console.log(updateData);

      this.newEditDataContainer.push(updateData)
      // this.allUser.filter((el) => (el.id !== updateData.id))
      // this.deleteUser(userID)

      this.router.push('/')
    },
  },
})
