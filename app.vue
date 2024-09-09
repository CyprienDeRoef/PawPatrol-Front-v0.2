<script setup>
const { status } = useAuth()
const map = ref(null)

const onMapReady = () => {
    console.log(map.value.leafletObject, status, getSession())
}
</script>

<template>
<LMap
    ref="map"
    class="min-h-screen"
    :zoom="14"
    :min-zoom="12"
    :max-zoom="17"
    :center="[47.39, 0.68]"
    :use-global-leaflet="false"
    :max-bounds="[[47.2, 0.2], [47.5, 1]]"
    @ready="onMapReady"
>
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
        class="z-0"
    />
    <Input 
        class="w-80 z-[400] relative top-6 mx-auto"
        placeholder="Search for an alert or a place"
    />
    <div class="z-[500] relative text-3xl ms-12 w-fit">
        {{ status }}
    </div>
    <UserMenu />
</LMap>
</template>
