<template>
    <div class="footer">
        <div class="container">
            <div class="box">
                <h1>Elzero</h1>
                <div>
                    <BxFacebook class="social hover:bg-blue-600"/>
                    <AkTwitterFill class="social hover:bg-blue-400"/>
                    <AkYoutubeFill class="social hover:bg-red-600"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati labore.</p>
            </div>
            <div class="box links">
                <ul>
                    <li><a href="#"><AnOutlinedDoubleRight class="text-main"/>Important Link 1</a></li>
                    <li><a href="#"><AnOutlinedDoubleRight class="text-main"/>Important Link 2</a></li>
                    <li><a href="#"><AnOutlinedDoubleRight class="text-main"/>Important Link 3</a></li>
                    <li><a href="#"><AnOutlinedDoubleRight class="text-main"/>Important Link 4</a></li>
                    <li><a href="#"> <AnOutlinedDoubleRight class="text-main"/>Important Link 5</a></li>
                </ul>
            </div>
            <div class="box loc">
                <ul>
                    <li><FaLocationDot class="icon"/>Egypt, Giza, Inside The Sphinx, Room Number 220</li>
                    <li><McTimeLine class="icon"/>Business Hours: From 10:00 To 18:00</li>
                    <li><CaPhoneVoiceFilled class="icon w-8 h-8"/>+20123456789<br>+20198765432</li>
                </ul>
            </div>
            <div class="box">
                <div class="flex">
                    <img src="../imgs/gallery-01.png" alt="">
                    <img src="../imgs/gallery-02.png" alt="">
                    <img src="../imgs/gallery-03.jpg" alt="">
                </div>
                <div class="flex">
                    <img src="../imgs/gallery-04.png" alt="">
                    <img src="../imgs/gallery-05.jpg" alt="">
                    <img src="../imgs/gallery-06.png" alt="">
                </div>
            </div>
        </div>
        <p>Made With ❤️ By Elzero</p>
    </div>
</template>

<script setup>
import { BxFacebook,AkTwitterFill,AkYoutubeFill,AnOutlinedDoubleRight,FaLocationDot,McTimeLine,CaPhoneVoiceFilled } from '@kalimahapps/vue-icons';

</script>