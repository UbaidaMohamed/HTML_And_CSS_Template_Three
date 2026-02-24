<template>
    <div class="stats">
        <h2>Our Owesome Stats</h2>
        <div class="container">
            <div class="box">
                <HeOutlinePerson class="mx-auto w-10 h-10"/>
                <span>135</span>
                <h4>Projects</h4>
            </div>
            <div class="box">
                <BxCodeAlt class="mx-auto w-10 h-10"/>
                <span>150</span>
                <h4>Clients</h4>
            </div>
            <div class="box">
                <GvWorld class="mx-auto w-10 h-10"/>
                <span>50</span>
                <h4>Countries</h4>
            </div>
            <div class="box">
                <LaMoneyBillWaveAltSolid class="mx-auto w-10 h-10"/>
                <span>5,000</span>
                <h4>Dollars</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { HeOutlinePerson,BxCodeAlt,GvWorld,LaMoneyBillWaveAltSolid } from '@kalimahapps/vue-icons';
</script>