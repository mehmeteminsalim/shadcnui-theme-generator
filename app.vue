<script setup>
const isOpen = ref(false)

const generatedColor = `
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 142.1 76.2% 36.3%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 142.1 70.6% 45.3%;
    --primary-foreground: 144.9 80.4% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 142.4 71.8% 29.2%;
  }
}
`

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <section class="py-12 mx-auto max-w-7xl space-y-12">
    <div class="w-full flex justify-between">
      <h5>
        Shadcn ui theme generator
      </h5>
      <UButton label="Copy Code" color="black" variant="solid" class="text-xs font-semibold" @click="isOpen = true" />

      <UModal v-model="isOpen">
        <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="w-full flex items-center justify-between">
              <div>
                <label class="font-medium text-base">Theme</label>
                <p class="text-xs text-white/50">
                  Copy and paste the following code into your CSS file.
                </p>
              </div>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>
          <div class="relative">
            <UButton v-if="isSupported" color="gray" variant="ghost" :icon="copied ? 'i-ph-check-bold' : 'i-ph-copy'" size="xs" class="absolute top-2 right-2" @click="copy(generatedColor)" />
            <pre class="h-96 overflow-y-auto text-xs font-mono bg-cool-950/50 px-5 py-2 rounded-xl" v-text="generatedColor" />
          </div>
        </UCard>
      </UModal>
    </div>
    <div class="py-6 w-full bg-gray-400" />
  </section>
</template>
