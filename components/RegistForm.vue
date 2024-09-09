<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
    passwordConfirmation: z.string().min(8).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    username: z.string().min(2).max(50).optional(),
    phoneNumber: z.string().min(10).max(10).optional(),
}).refine(data => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    try {
        console.log(values);
        const res = await fetch('http://localhost:8000/api/users', {
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
  <form @submit="onSubmit">
    <Carousel>
        <CarouselContent>
            <CarouselItem class="flex flex-col items-center justify- gap-2">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem class="w-full">
                        <FormLabel>
                            Email
                            <span class="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="john.doe@gmail.com" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            We’ll use this to keep you updated. Don’t worry, we’ll never share your email.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <div class="flex gap-6 justify-between w-full">
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem class="w-full">
                            <FormLabel>
                                Password
                                <span class="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" v-bind="componentField" />
                            </FormControl>
                            <FormDescription>
                                Your password should be at least 8 characters long.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="passwordConfirmation">
                    <FormItem class="w-full">
                        <FormLabel>
                            Password Confirmation
                            <span class="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                        <Input type="password" placeholder="Re-enter your password" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            Please enter the same password again to confirm.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    </FormField>
                </div>
            </CarouselItem>
            <CarouselItem class="space-y-2">
                <div class="flex gap-6 justify-between items-center">
                    <FormField v-slot="{ componentField }" name="firstName">
                        <FormItem class="w-full" >
                            <FormLabel>
                                First Name
                                <span class="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="John" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="lastName">
                        <FormItem class="w-full" >
                            <FormLabel>
                                Last Name
                                <span class="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Doe" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <p class="text-sm text-muted-foreground w-full">
                    Your name will be publicly displayed on your profile. You can add a username if you want to remain private.
                </p>
                <FormField v-slot="{ componentField }" name="phoneNumber">
                    <FormItem class="w-full">
                        <FormLabel>
                            Phone Number
                        </FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="+0123456789" v-bind="componentField" />
                        </FormControl>
                        <FormDescription>
                            This is optional and will not be displayed publicly.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <div class="w-full flex justify-center !mt-4">
                    <Button type="submit" class="w-1/2">
                        Submit
                    </Button>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  </form>
</template>