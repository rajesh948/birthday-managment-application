<template>
  <div class="container">
    <header><h1>Happy Birthday</h1></header>
    <nav>
      <router-link to="/all-birthday">All Birthday</router-link>
      <router-link to="/today-birthday">Today Birthday</router-link>
      <router-link to="/upcoming-birthday">UpComing Birthday</router-link>
      <router-link to="/close-friend-birthday">Close Friend</router-link>
    </nav>
    <div class="route-link">
      <router-link to="/all-birthday">All Birthday</router-link>
      <router-link to="/today-birthday">Today Birthday</router-link>
      <router-link to="/upcoming-birthday">UpComing Birthday</router-link>
      <router-link to="/close-friend-birthday">Close Friend</router-link>
    </div>

    <div class="route-view">
      <router-view v-slot="slotProps">
        <transition mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
header {
  width: 100%;
  text-align: center;
  color: rgb(71, 93, 153);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
nav {
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  padding: 0%;
  background-color: rgb(123, 123, 167);
}
nav a {
  padding: 10px 0;
  text-align: center;
  margin: 0%;
}

.route-link {
  display: flex;
  flex-direction: column;
}
.route-view {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 80%;
}
a {
  padding: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 5px 0;
  width: 200px;
  box-shadow: rgba(95, 90, 165, 0.16) 0px 1px 4px;
  display: inline-block;
}
a:hover {
  background-color: rgb(188, 192, 248);
  box-shadow: rgba(95, 90, 165, 0.16) 0px 1px 4px;
  display: inline-block;
}

.v-enter-from {
  opacity: 0;
  /* transform: scale(0.5); */
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  opacity: 1;
  /* transform: scale(1); */
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
