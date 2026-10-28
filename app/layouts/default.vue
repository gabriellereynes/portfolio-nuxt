<template>
  <div
    class="flex min-h-screen items-center justify-center bg-[url('/images/home/mybackground.png')] bg-cover bg-center md:p-10"
  >
    <div
      class="flex min-h-[80vh] w-full max-w-6xl flex-col overflow-hidden border-4 border-secondary bg-white/20 shadow-2xl backdrop-blur-md md:flex-row md:rounded-2xl lg:m-5"
    >
      <Sidebar />

      <main class="flex-1 p-8 md:p-16">
        <Navbar />
        <slot />
        <Footer />
      </main>
    </div>
  </div>
</template>