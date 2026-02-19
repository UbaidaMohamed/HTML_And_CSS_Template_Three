<template>
    <div class="testimonials" id="testimonials">
        <h2 class="main-title">testimonials</h2>
        <div class="container">
            <div class="box" v-for="testimonial in testimonials">
                <img :src="getImgSrc(testimonial.pic)" :alt="`pic ${testimonial.pic}`">
                <h3> {{ testimonial.name }} </h3>
                <span class="title"> {{ testimonial.title }} </span>
                <div class="rate">
                    <AnFilledStar class="text-yellow-400 filled" v-if="testimonial.stars"/>
                    <AnOutlinedStar class="text-yellow-400"/>
                </div>
                <p> {{ testimonial.feedback }} </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AnFilledStar, AnOutlinedStar } from '@kalimahapps/vue-icons';

const testimonials = [
    {
        name:"Mohamed Farag",
        title: "Full Stack Web Developer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquam pariatur distinctio quasi ducimus ex vero alias tenetur nostrum omnis necessitatibus reprehenderit nemo obcaecati, est facilis, culpa voluptatem. Unde, magnam!",
        stars: 4,
        pic:1
    },
    {
        name:"Mohamed Ibrahim",
        title: "Graphic Designer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt et tempora quis provident. A quam odio delectus eveniet, atque quibusdam omnis possimus necessitatibus, sit nulla itaque corrupti esse eius.",
        stars: 3,
        pic:2
    },
    {
        name:"Shady Nabil",
        title: "DevOps Developer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae numquam maxime accusamus nihil facere assumenda voluptatem. In illo neque tempora animi error et laboriosam, quaerat pariatur ipsa sed ex!",
        stars: 5,
        pic:3
    },
    {
        name:"Amr Hendawy",
        title: "UI/UX Developer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga eveniet tempore, molestias, architecto natus dicta aliquid ex optio consequatur laborum velit excepturi cum iusto sit illum magni ut. Doloribus.",
        stars: 4,
        pic:4
    },
    {
        name:"Sherief Ashraf",
        title: "Network Engineer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae delectus rerum unde eum possimus asperiores voluptates. Eveniet distinctio eligendi in maxime, consequuntur, doloribus omnis ab enim praesentium expedita aliquam!",
        stars: 3,
        pic:5
    },
    {
        name:"Osama Mohamed",
        title: "Video Editer",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet sunt ut adipisci est! Repudiandae corporis qui saepe, itaque fugiat, perspiciatis accusantium magni totam laudantium consequatur explicabo doloremque animi consequuntur!",
        stars: 5,
        pic:6
    }
]

function getImgSrc(pic) {
  return new URL(`../imgs/avatar-0${pic}.png`, import.meta.url).href;
}

</script>