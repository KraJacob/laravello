<template>
<div class="h-full flex flex-col items-stretch bg-purple-500">
    <div class=" header text-white flex justify-between align-items-center mb-2 bg-purple-600">
        <div class="ml-2 w-1/3 flex justify-content-end">x</div>
        <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Work Space</div>
        <div class="mr-2 w-1/3">x</div>
    </div>

    <div class="h-full flex flex-1 flex-col items-stretch">
        <div class="mx-2 mb-2 text-lg text-white font-bold cursor-pointer">Le titre sera ici </div>
        <div class="flex flex-1 items-start overflow-x-auto mx-2">
            <list-card></list-card>
            <list-card></list-card>
            <list-card></list-card>
            <list-card></list-card>
        </div>
    </div>
</div>
</template>

<style scoped>
.header {
    height: 40px;
}
</style>

<script>
import ListCard from './components/ListCard'
export default {
    components: {
        ListCard
    }
}
</script>
