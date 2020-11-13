<template>
<div class="bg-gray-300 rounded-sm p-2 mr-2 list">
    <div class="flex justify-between">
        <div class="text-gray-800 pl-2 pb-2 font-bold">List title</div>
    </div>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <add-card-button></add-card-button>
</div>
</template>

<style scoped>
.list {
    width: 250px;
    min-width: 250px;
}
</style>

<script>
import Card from './Card'
import AddCardButton from './AddCardButton'
export default {
    components: {
        Card,
        AddCardButton
    }
}
</script>
