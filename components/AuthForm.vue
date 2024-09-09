<script setup lang="ts">
const { status, signIn } = useAuth()

const email = ref('')
const password = ref('')

async function handleSignin() {
    await signIn();
}
</script>

<template>
<form @submit.prevent="signIn('credentials', {email, password})">
    <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full">
            <FormLabel>
                Email
                <span class="text-red-500">*</span>
            </FormLabel>
            <FormControl>
                <Input v-model="email" type="email" placeholder="john.doe@gmail.com" v-bind="componentField"/>
            </FormControl>
            <FormMessage />
        </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
        <FormItem class="w-full mt-2">
            <FormLabel>
                Password
                <span class="text-red-500">*</span>
            </FormLabel>
            <FormControl>
                <Input v-model="password" type="password" placeholder="********" v-bind="componentField" />
            </FormControl>
            <FormMessage />
        </FormItem>
    </FormField>
    <div class="flex justify-center mt-6">
        <Button type="submit" class="w-1/2">
            Login
        </Button>
    </div>
</form>
</template>


<style scoped></style>
