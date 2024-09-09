<script setup lang="ts"></script>

<template>
<Dialog>
    <DropdownMenu>
        <DropdownMenuTrigger class="absolute top-6 right-6 z-[400]" as-child>
            <Button class="size-12 rounded-full p-2">
                <LucideUser />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="z-[400] mr-6">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DialogTrigger as-child>
                <DropdownMenuItem>
                    Log in
                </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    <DialogContent class="z-[400]">
        <DialogTitle>Welcome</DialogTitle>
        <Tabs default-value="login">
            <TabsList class="w-full [&>*]:w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <AuthForm />
            </TabsContent>
            <TabsContent value="register">
                <RegistForm/>
            </TabsContent>
        </Tabs>
    </DialogContent>
</Dialog>
</template>

<style scoped></style>
