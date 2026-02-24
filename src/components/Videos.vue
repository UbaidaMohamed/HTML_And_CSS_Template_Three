<template>
    <div class="videos">
        <h2 class="main-title">Top Videos</h2>
        <div class="container">
            <div class="sidebar">
                <div class="head">
                    <h4>Top Videos</h4>
                    <FaShuffle class="text-xl"/>
                </div>
                <ul>
                    <li>How To Create Sub Domain <span>05:18</span></li>
                    <li>Playing With The DNS <span>03:18</span></li>
                    <li>Everything About The Virtual Hosts<span>05:25</span></li>
                    <li>How To Monitor Your Website<span>04:16</span></li>
                    <li>Uncharted Beating The Last Boss<span>07:48</span></li>
                    <li>Ys Oath In Felghana Overview<span>03:12</span></li>
                    <li>Ys Series All Games Ending<span>08:10</span></li>
                </ul>
            </div>
            <div class="display">
                <img src="../imgs/video-preview.jpg" alt="">
                <p>Everything About The Virtual Hosts</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FaShuffle } from '@kalimahapps/vue-icons';
</script>