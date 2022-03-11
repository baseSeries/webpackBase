<template>
  <div id="transition">
    <button @click="toggle">切换</button>
    <div class="transition"
         appear>
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false">
        <h2 v-if="isShow">钩子</h2>
      </transition>
      <transition name="dang"
                  appear>
        <h2 v-if="isShow">默认</h2>
      </transition>
      <transition name="animate"
                  appear>
        <h2 v-if="isShow">animation</h2>
      </transition>
      <transition name="custom-classes-transition"
                  appear
                  enter-active-class="animate__animated animate__fadeInTopLeft"
                  leave-active-class="animate__animated animate__fadeOutDownBig">
        <h2 v-if="isShow"> diy animate.css</h2>
      </transition>

    </div>
    <div class="two">
      <div>
        <button @click="addNum">add</button>
        <button @click="delNum">del</button>
        <button @click="shuffle">reset</button>
        <!-- @enter="groupEnter"
                        @leave="groupLeave" -->
        <transition-group tag="ul"
                          name="group">
          <li v-for="(item) in state.arrNum"
              class="item"
              :key="item">{{item}}</li>
        </transition-group>
      </div>
      <div>
        <input type="text"
               @input="changeList"
               v-model="state.filtered">
        <transition-group tag="ul"
                          :css="false"
                          @enter="listEnter"
                          @leave="listLeave"
                          name="list">
          <li v-for="(item,index) in state.list"
              :data-index="index"
              class="list-name"
              :key="item">{{item}}</li>
        </transition-group>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import gsap from 'gsap'
import _ from 'lodash'
let isShow = ref(true)
let num = ref(10)
let state = reactive({
  arrNum: [1, 2, 3, 4, 5, 6, 7],
  list: ['dang', 'jian', 'bo', 'cca', 'ddab', 'zdewq'],
  filtered: '',
})
const toggle = () => {
  isShow.value = !isShow.value
}
const beforeEnter = (el) => {
  console.log(el, 'beforeEnter')
  gsap.set(el, {
    delay: el.dataset.index,
    scaleX: 0.8,
    scaleY: 1.2,
  })
}
const enter = (el, done) => {
  console.log(el, 'enter')
  gsap.to(el, {
    duration: 1,
    scaleX: 1.5,
    scaleY: 0.7,
    opacity: 1,
    x: 150,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done,
  })
}
const afterEnter = (el) => {
  console.log(el, 'afterEnter')
}
const beforeLeave = (el) => {
  console.log(el, 'beforeLeave')
}
const leave = (el, done) => {
  console.log(el, 'leave')
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)',
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done,
  })
}
const afterLeave = (el) => {
  console.log(el, 'afterLeave')
}

const randomNum = () => {
  return Math.floor(Math.random() * state.arrNum.length)
}
const addNum = () => {
  state.arrNum.splice(randomNum(), 0, num.value++)
}

const delNum = () => {
  state.arrNum.splice(randomNum(), 1)
}
const shuffle = () => {
  state.arrNum = _.shuffle(state.arrNum)
}
const groupEnter = (el, done) => {
  gsap.to(el, {
    x: 100,
    duration: 1,

    onComplete: done,
  })
}
const groupLeave = (el, done) => {
  gsap.to(el, {
    y: 30,
    duration: 2,
    onComplete: done,
  })
}
const changeList = () => {
  state.list = state.list.filter((item) => item.indexOf(state.filtered) > -1)
  if (state.filtered == '')
    state.list = ['dang', 'jian', 'bo', 'cca', 'ddab', 'zdewq']
}
const listEnter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.index * 0.15,
    height: 20,
    onComplete: done,
  })
}
const listLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    delay: el.dataset.index * 0.15,
    height: 0,
    onComplete: done,
  })
}
</script>

<style  scoped>
.transition {
  display: flex;
  justify-content: space-around;
}
.dang-enter-from,
.dang-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.dang-enter-active,
.dang-leave-active {
  transition: all 1s ease;
}

.animate-enter-active {
  animation: animate 1s;
}
.animate-leave-active {
  animation: animate 1s reverse;
}

.item {
  transition: all 0.8s ease;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
}

.group-enter-from,
.group-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* .group-enter-active, */
.group-leave-active {
  /* transition: all 2s ease; */
  position: absolute;
}

/* .group-move {
  transition: transform all 1s ease;
} */
.list-name {
  /* display: inline-block; */
}
.list-enter-from,
.list-leave-to {
  transform: translateY(30px);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-move {
  /* transition: transform all 1s ease; */
}
.two {
  display: flex;
  justify-content: space-around;
}
@keyframes animate {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>