<template>
  <div>
    <h1>Close Friend Birthday List</h1>
    <button @click="showAddFriendForm">Add Friend</button>
    <birthdayCart
      v-for="user in favoriteUserList"
      :key="user.id"
      :user="user"
    />

    <!-- PopUpBox for UserList -->
    <popUpBoxLayout
      v-if="isShowPopUpBox.listOfUser"
      @closePopUpBox="closePopUp"
    >
      <template v-slot:header> Friend List </template>
      <template v-slot:content>
        <div
          class="friend-box"
          v-for="(user, index) in userDataList"
          :key="user.id"
        >
          <div class="friend-name">
            <p>{{ user.name }} {{ user.surname }}</p>
          </div>
          <div class="friend-btn">
            <button @click="addFavorite(index)">
              {{ favoriteOrUnFavorite(index) }}
            </button>
            <button @click="deleteUser(index)">Delete</button>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer-btn">
          <button @click="showNewUserForm">Add User</button>
          <button @click="closePopUp">Close</button>
        </div>
      </template>
    </popUpBoxLayout>

    <!-- PopUpBox for AddNewUser -->

    <popUpBoxLayout
      @closePopUpBox="closePopUp"
      v-if="isShowPopUpBox.addNewUser"
    >
      <template v-slot:header> User Form </template>
      <template v-slot:content>
        <div class="form">
          <label>Name:</label>
          <input type="text" v-model="user.name" />
          <label>SurName :</label>
          <input type="text" v-model="user.surname" />
          <label>Birth-date:</label>
          <input type="date" v-model="user.dob" />
          <label>City :</label>
          <input type="text" v-model="user.city" />
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer-btn">
          <button @click="closePopUp">Close</button>
          <button @click="addNewUser">Add</button>
        </div>
      </template>
    </popUpBoxLayout>
  </div>
</template>

<script>
import birthdayCart from "@/components/birthdayCart";
import popUpBoxLayout from "@/components/popUpBoxLayout";
export default {
  name: "closeFriendBirthdayList",
  components: {
    birthdayCart,
    popUpBoxLayout,
  },
  data() {
    return {
      userDataList: JSON.parse(localStorage.getItem("userDataList")) || [],
      isShowPopUpBox: {
        listOfUser: false,
        addNewUser: false,
      },
      user: {
        id: null,
        name: null,
        surname: null,
        dob: null,
        city: null,
        isCloseFriend: false,
        wish: null,
      },
      resetUser: null,
    };
  },
  created() {
    this.resetUser = JSON.parse(JSON.stringify(this.user));
  },
  methods: {
    showAddFriendForm() {
      this.isShowPopUpBox.listOfUser = true;
    },
    closePopUp() {
      this.isShowPopUpBox.listOfUser = false;
      this.isShowPopUpBox.addNewUser = false;
    },
    showNewUserForm() {
      this.isShowPopUpBox.addNewUser = true;
    },
    addFavorite(index) {
      this.userDataList[index].isCloseFriend =
        !this.userDataList[index].isCloseFriend;
      localStorage.setItem("userDataList", JSON.stringify(this.userDataList));
    },
    deleteUser(index) {
      if (confirm("Are You Sure To Delete Record ??")) {
        this.userDataList.splice(index, 1);
        localStorage.setItem("userDataList", JSON.stringify(this.userDataList));
      }
    },
    addNewUser() {
      this.user.id = Date.now();
      this.userDataList.push(this.user);
      localStorage.setItem("userDataList", JSON.stringify(this.userDataList));
      this.user = { ...this.resetUser };
      this.showAddFriendForm();
    },
    favoriteOrUnFavorite(index) {
      return this.userDataList[index].isCloseFriend ? "UnFavorite" : "Favorite";
    },
  },
  computed: {
    favoriteUserList() {
      return this.userDataList.filter((user) => user.isCloseFriend === true);
    },
  },
};
</script>

<style scoped>
h1 {
  padding: 10px;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.friend-box {
  margin: 5px 0;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.friend-name {
  width: 30%;
}
.friend-name p {
  font-size: 1.2rem;
  text-transform: capitalize;
}
button {
  padding: 5px;
  font-size: 1rem;
  background-color: rgb(98, 135, 145);
  width: 100px;
  border: none;
  border-radius: 4px;
  color: white;
  margin: 0 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

input {
  padding: 5px;
}
label {
  margin: 10px 0;
}
.form {
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
