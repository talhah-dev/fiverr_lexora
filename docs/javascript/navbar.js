
const navbar = document.getElementById("navbar");
navbar.innerHTML = `
    <nav class="fixed top-0 left-0 w-full bg-white z-40">
        <div
            class="md:max-w-[85%] mx-auto flex justify-between items-center w-full lg:p-5 p-3 lg:h-[116px] h-24">
            <div class="flex w-full items-center justify-start xl:gap-32 gap-20">
                <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                    <img src="/docs/assets/images/logo.svg" class="lg:h-[52px] h-10" alt="logo">
                </a>
                <div class="flex items-center gap-10">
                    <div class="lg:flex items-center gap-10 hidden">
                        <ul id="navbarLinks" data-aos="fade-right"
                            class="lg:flex font-medium text-lg hidden items-center text-[#1D2939] gap-10">
                            <li><a href="/index.html"
                                    class="hover:opacity-60 tracking-wide  transition-all duration-500">Home</a>
                            </li>
                            <li><a href="/about.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">About Us</a>
                            </li>
                            <li><a href="/services.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Services</a>
                            </li>
                            <li><a href="/notre.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Notre
                                    Equipe</a>
                            </li>
                            <li><a href="/contact.html"
                                    class="hover:opacity-60 tracking-wide transition-all duration-500">Contact
                                    Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div data-aos="fade-left" class="">
                <a href="/contact.html" class="lg:block hover:opacity-80 tracking-wide transition-all duration-500 hidden text-nowrap rounded-full px-8 py-3.5 bg-[#003060] text-white Montserrat">Contact
                Us</a>
                </div>
            <i data-aos="fade-left" id="mobileMenuBtn"
                class="fa-solid text-zinc-800 fa-bars lg:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-800 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-[#1D2939] flex-col gap-7">
               <li><a href="/index.html"
                                    class="hover:opacity-60 text-nowrap tracking-wide  transition-all duration-500">Home</a>
                            </li>
                            <li><a href="/about.html"
                                    class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">About Us</a>
                            </li>
                            <li><a href="/services.html"
                                    class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Services</a>
                            </li>
                            <li><a href="/notre.html"
                                    class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Notre
                                    Equipe</a>
                            </li>
                            <li><a href="/contact.html"
                                    class="hover:opacity-60 text-nowrap tracking-wide transition-all duration-500">Contact
                                    Us</a>
                            </li>
            </ul>
        </div>
    </div>
        <div class="lg:h-24 h-20"></div>
`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});