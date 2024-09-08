<template>
    <LMap
        class="min-h-screen absolute z-0"
        :zoom="6"
        :center="[47.21322, -1.559482]"
        :use-global-leaflet="false"
        @ready="onMapReady"
    >
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
    </LMap>
    <div class="p-6">
        <Input 
            class="w-80 mx-auto relative"
            placeholder="Search for an alert or a place"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const map = ref(null)

// When the map is ready
const onMapReady = () => {
    // Access the Leaflet map instance
    console.log(map)
}
</script>