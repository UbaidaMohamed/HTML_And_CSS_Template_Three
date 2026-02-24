<template>
    <div class="pricing">
        <div class="dots dots-up"></div>
        <div class="dots dots-down"></div>
        <h2 class="main-title">Pricing Plans</h2>
        <div class="container">
            <div class="price">
                <h3>Basic</h3>
                <IoOutlineFileTrayStacked class="icon"/>
                <span class="cost">$15</span>
                <span class="time">Per Month</span>
                <div class="spics">
                    <span><TiTick class="icon"/>10GB HDD Space</span>
                    <span><TiTick class="icon"/>5 Email Addresses</span>
                    <span><TiTick class="icon"/>2 Subdomains</span>
                    <span><TiTick class="icon"/>4 Databases</span>
                    <span><TiTick class="icon"/>Basic Support</span>
                </div>
                <button>Choose Plan</button>
            </div>
            <div class="price popular">
                <div class="label">Most Popular</div>
                <h3>Advanced</h3>
                <UnServerNetworkAlt class="icon"/>
                <span class="cost">$25</span>
                <span class="time">Per Month</span>
                <div class="spics">
                    <span><TiTick class="icon"/>20GB HDD Space</span>
                    <span><TiTick class="icon"/>10 Email Addresses</span>
                    <span><TiTick class="icon"/>5 Subdomains</span>
                    <span><TiTick class="icon"/>8 Databases</span>
                    <span><TiTick class="icon"/>Advanced Support</span>
                </div>
                <button>Choose Plan</button>
            </div>
            <div class="price">
                <h3>Professional</h3>
                <CaIbmGlobalStorageArchitecture class="icon"/>
                <span class="cost">$45</span>
                <span class="time">Per Month</span>
                <div class="spics">
                    <span><TiTick class="icon"/>50GB HDD Space</span>
                    <span><TiTick class="icon"/>20 Email Addresses</span>
                    <span><TiTick class="icon"/>10 Subdomains</span>
                    <span><TiTick class="icon"/>10 Databases</span>
                    <span><TiTick class="icon"/>Professional Support</span>
                </div>
                <button>Choose Plan</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IoOutlineFileTrayStacked,TiTick,UnServerNetworkAlt,CaIbmGlobalStorageArchitecture } from '@kalimahapps/vue-icons';
</script>