<template>
    <kinesis-container id="services" class="snap-start">
        <div class="w-full h-screen bg-gray-200  flex flex-col space-y-12 items-center justify-center">

            <h3 class="text-3xl lg:text-5xl font-bold text-gray-800 shadow-smooth">
                Mes Services
            </h3>
            <kinesis-element :strength="100" class="flex-none">
                <div class="circle circle-purple flex-row"></div>
            </kinesis-element>
            <div class="sm:flex ml-20 md:ml-0 text-black w-screen justify-center items-center  mx-10 md:space-x-20 space-y-4 md:space-y-0 ">

                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col ml-4 md:mt-10">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <i class="service-icon fa icon-devweb effect w-14 md:w-11/12"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="font-bold">DEVELOPPEMENT WEB</h3>
                            <div class="s-line"></div>
                            <p>Développement Web</p>
                        </div>
                        <kinesis-element :strength="120">
                            <div class="circle circle-purple2 flex-none"></div>
                        </kinesis-element>
                    </div>
                </div>

                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <i class="service-icon fa icon-github effect w-14 md:w-11/12"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="font-bold">GITHUB</h3>
                            <div class="s-line"></div>
                            <p>Travail quotidien avec Github</p>
                        </div>
                    </div>
                </div>

                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <i class="fa service-icon icon-wordpress effect w-14 md:w-11/12"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="font-bold">WORDPRESS</h3>
                            <div class="s-line"></div>
                            <p>Le bien connu CMS</p>
                        </div>
                    </div>
                </div>


                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <i class="fa service-icon icon-figma effect w-14 md:w-11/12"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="font-bold">FIGMA</h3>
                            <div class="s-line"></div>
                            <p>Maquettage avec FIGMA</p>
                        </div>
                    </div>
                </div>

                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <image alt="icon-webdesign" class="fa service-icon icon-webdesign effect w-14 md:w-11/12"></image>
                        </div>
                        <div class="service-content align-middle">
                            <h3 class="font-bold">WEBDESIGN</h3>
                            <div class="s-line"></div>
                            <p>Le make up de votre site</p>
                        </div>
                    </div>
                    <kinesis-element :strength="100">
                        <div class="circle circle-purple3 flex-none"></div>
                    </kinesis-element>
                </div>

                <div class="sm:flex md:w-36">
                    <div class="single-service flex sm:flex-row md:flex-col">
                        <div class="transition-transform duration-1000 ease-out transform hover:scale-150 hover:rotate-45">
                            <i class="fa service-icon icon-photo effect w-14 md:w-11/12"></i>
                        </div>
                        <div class="service-content align-bottom">
                            <h3 class="font-bold">PHOTOGRAPHIE CRÉATIVE</h3>
                            <div class="s-line"></div>
                            <p>Photographie de qualité</p>
                        </div>
                    </div>

                </div>
                <!-- background-circles-props -->


                <kinesis-element :strength="100">
                    <div class="circle circle-purple1 flex-none"></div>
                </kinesis-element>




            </div> <!-- End Row -->
            <!-- END SERVICES -->
        </div>
    </kinesis-container>
</template>

<script>
    // import VueKinesis from "vue-kinesis";
    export default {
        name: "Services",
        // components:{VueKinesis}
    }
</script>

<style scoped>
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .circle {
        position: absolute;
        border-radius: 100%;
    }

    .circle.circle-purple {
        border: 10px solid #000000;
        opacity: 0.1;
        width: 4vw;
        height: 4vw;
        left: 10%;
        top: 25%;
    }

    .circle.circle-purple1 {
        border: 15px solid #000000;
        opacity: 0.1;
        width: 8vw;
        height: 8vw;
        right: -2%;
        bottom: 17%;
    }

    .circle.circle-purple2 {
        background-color: #000000;
        opacity: 0.1;
        width: 5vw;
        height: 5vw;
        left: 20%;
        bottom: 17%;
    }

    .circle.circle-purple3 {
        border: 15px solid #000000;
        opacity: 0.3;
        width: 3vw;
        height: 3vw;
        top: 80%;
        left: 60%;
    }
</style>