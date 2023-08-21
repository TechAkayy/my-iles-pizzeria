<template>
  <header>
    <div class="container mx-auto relative">
      <nav class="flex flex-wrap items-center px-4">
        <a
          href="/"
          class="bg-primary-500 flex-col font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mr-4 p-6 space-y-2 text-white text-xl"
          ><svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            xml:space="preserve"
            stroke="currentColor"
            viewBox="0 0 64 64"
            height="2.5em"
          >
            <path
              d="M45.432 45.432A18.937 18.937 0 0132 51c-10.486 0-19-8.514-19-19s8.514-19 19-19 19 8.514 19 19H32l13.432 13.432zM32 8v48m16.971-40.971L15.029 48.971M51 32H8m37 13L15.029 15.029M19 27l-1 1m27-2v1m-9 17v-2m1-23h-1"
              fill="none"
              stroke-width="2"
            ></path>
            <path
              d="M52.126 32.846a2.99 2.99 0 01-1.188-2.21C50.251 20.785 42.027 13 32 13c-10.486 0-19 8.514-19 19s8.514 19 19 19c4.932 0 9.427-1.883 12.806-4.969a2.396 2.396 0 011.496-.639c.119-.015.247-.023.381-.03a2.409 2.409 0 012.434 3.131v.001a2.013 2.013 0 01-.519.84C44.283 53.461 38.436 56 32 56 18.754 56 8 45.246 8 32S18.754 8 32 8c12.783 0 23.245 10.015 23.961 22.619a2.745 2.745 0 01-.959 2.22l.007.008a2.21 2.21 0 01-2.766.087l-.117-.088z"
              fill="none"
              stroke-width="2"
            ></path></svg
          ><span>The Pizzeria</span>
        </a>
        <button
          class="hover:bg-primary-500 hover:text-white ml-auto px-3 py-2 rounded text-white lg:hidden"
          data-name="nav-toggler"
          data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
          data-pg-ia-apply="$nav [data-name=nav-toggler]"
        >
          <span class="block border-b-2 border-current my-1 w-6"></span>
          <span class="block border-b-2 border-current my-1 w-6"></span>
          <span class="block border-b-2 border-current my-1 w-6"></span>
        </button>
        <div
          class="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto"
          data-name="nav-menu"
        >
          <div class="flex flex-col mx-auto lg:flex-row">
            <a href="/" class="hover:text-gray-400 lg:p-4 py-2 text-white"
              >Home</a
            >
            <a
              href="/quick-start"
              class="hover:text-gray-400 lg:p-4 py-2 text-white"
              >Quick Start</a
            ><a href="/menu" class="hover:text-gray-400 lg:p-4 py-2 text-white"
              >Menu</a
            >
            <a href="/order" class="hover:text-gray-400 lg:p-4 py-2 text-white"
              >Order</a
            >
            <a
              href="/about-us"
              class="hover:text-gray-400 lg:p-4 py-2 text-white"
              >About Us</a
            >
          </div>
          <div class="flex-wrap inline-flex py-1 space-x-3">
            <a
              to="#"
              class="hover:text-gray-400 text-white"
              aria-label="facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                <path
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                ></path></svg
            ></a>
            <a
              to="#"
              class="hover:text-gray-400 text-white"
              aria-label="twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                <path
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                ></path></svg
            ></a>
            <a
              to="#"
              class="hover:text-gray-400 text-white"
              aria-label="instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                <path
                  d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                ></path></svg
            ></a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
