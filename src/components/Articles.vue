<template>
    <div class="articles">
        <h2 class="main-title" id="articles">Articles</h2>
        <div class="container">
            <div v-for="box in boxes" class="box">
                <img :src="getImgSrc(box.pic)" alt="">
                <div class="content">
                    <h3>Test Title {{ box.title }}</h3>
                    <p>{{ box.text }}</p>
                </div>
                <div class="info">
                    <a href="#">Read More</a>
                    <i><PhBoldArrowCircleRight class="arrow ml-auto h-6 w-6"/></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PhBoldArrowCircleRight } from '@kalimahapps/vue-icons';
import { ref } from 'vue';

function getImgSrc(pic) {
  return new URL(`../imgs/cat-0${pic}.jpg`, import.meta.url).href;
}

const boxes = ref([
    {   
        title: "One", 
        pic: 1,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, laboriosam iure? Dolor assumenda sequi vero ut eaque odit pariatur sapiente saepe, perspiciatis laudantium, maxime non necessitatibus, reprehenderit animi doloribus! Perferendis."
    },
    { 
        title: "Two", 
        pic: 2,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia architecto officia totam deleniti libero, sunt quis aut voluptatem nemo, consectetur necessitatibus suscipit, commodi eum ex sapiente numquam provident ad."
    },
    { 
        title: "Three", 
        pic: 3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit possimus repudiandae sapiente omnis laboriosam placeat velit. Sed enim tempore nihil unde culpa, quasi similique? Dolores voluptas inventore nam ipsum!" 
    },
    { 
        title: "Four", 
        pic: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus commodi recusandae. Dolorum blanditiis in esse quisquam debitis? Quos atque inventore, voluptate assumenda quis cumque. Veritatis accusantium aspernatur sit. Officia."
    },
    { 
        title: "Five", 
        pic: 5,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nesciunt unde praesentium aliquam. Ab necessitatibus repellat nam neque totam voluptate, possimus exercitationem saepe rerum corrupti nesciunt tempora minima minus ad."
    },
    { 
        title: "Six", 
        pic: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nisi a, officiis ipsum perferendis harum rem! Iure, nihil. Placeat beatae debitis veritatis et repellat illum iure eaque molestias, vitae magni!"},
    { 
        title: "Seven", 
        pic: 7,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quo repellendus nostrum, exercitationem sint non. Voluptatibus placeat accusamus animi et consequuntur totam, facilis, fugiat repellendus suscipit magnam, mollitia illum perferendis."
    },
    { 
        title: "Eight", 
        pic: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis deleniti sequi est adipisci itaque quasi perspiciatis ipsum optio maiores culpa ut, numquam nemo totam voluptatum placeat sit facilis quibusdam?"
    }
])

</script>