<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    try {
        console.log(values);
        const res = await $fetch('http://localhost:8000/auth', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/ld+json',
            },
        })
        console.log(res)
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
<form class="" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full">
            <FormLabel>
                Email
                <span class="text-red-500">*</span>
            </FormLabel>
            <FormControl>
                <Input type="email" placeholder="john.doe@gmail.com" v-bind="componentField" />
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
                <Input type="password" placeholder="********" v-bind="componentField" />
            </FormControl>
            <FormMessage />
        </FormItem>
    </FormField>
    <div class="flex justify-center mt-4">
        <Button type="submit" class="w-1/2">
            Login
        </Button>
    </div>
</form>
</template>


<style scoped></style>
