<template>
    <div>
        <h1>Profile Information</h1>
        <span>Name: </span><span>{{name}}</span>
        <span>Role: </span><span>{{role}}</span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name: "Jose Ponce",
            role: "Software Engineer"
        }
    } 
}
</script>
