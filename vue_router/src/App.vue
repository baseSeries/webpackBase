<template>
  <div>
    <router-link class="link"
                 to="/home">home </router-link>
    <router-link class="link"
                 to="/about">about</router-link>
    <router-link class="link"
                 to="/user:dang">user</router-link>
    <transition name="fade"
                mode="out-in">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  /* word-spacing: 5px; */
  letter-spacing: 10px;
  text-underline-offset: -5px;
}
.router-link-active {
  color: #2c3;
}
.exact-link-active {
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
