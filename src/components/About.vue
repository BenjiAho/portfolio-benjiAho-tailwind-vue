<template>
    <section id="about" class="w-full h-screen bg-black snap-start w-full h-screen snap-start flex flex-col items-center justify-center">
        <Particles></Particles>
        <h2 class="text-2xl lg:text-5xl font-bold">About Me</h2>
        <div class="flex w-screen h-4/5">
            <div class="md:flex items-center justify-center w-screen">

                <div class="lg:w-1/3 md:text-2xl mx-20 lg:ml-0">
                    <div class="">
                        <h2>Bonjour tout le monde! <br/> Ici Benjamin AHO-NIENNE!</h2>
                        <p>Je suis un Développeur Web Junior, je réside à Chambéry.
                            <br/>Je suis créatif, rigoureux et motivé. </p>

                        <div class="">
                            <div class="">
                                <ul>
                                    <li><span><i class=""></i> Email : </span>aho.benji@gmail.com</li>
                                    <li><span><i class=""></i> Location : </span>Chambéry 73000</li>
                                </ul>
                            </div>
                            <div class="">
                                <ul>
                                    <li><span><i class=""></i>   Âge: </span>27ans
                                    </li>
                                    <li><span><i class=""></i>   Téléphone : </span>0764357251</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
<!--                PROGRESSBAR-->
                <div class="w-1/2 mx-20 lg:ml-0">


                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                    HTML/CSS
                                </span>
                            </div>
                            <div class="text-right">
                                <span class="text-xs font-semibold inline-block text-blue-600">
                                    95%
                                </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style="width:95%"
                                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                        </div>
                    </div>

                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                                PHP
                              </span>
                            </div>
                            <div class="text-right">
                              <span class="text-xs font-semibold inline-block text-purple-400">
                                40%
                              </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div style="width:40%"
                                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"></div>
                        </div>
                    </div>

                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                                JavaScript
                              </span>
                            </div>
                            <div class="text-right">
                              <span class="text-xs font-semibold inline-block text-yellow-600">
                                60%
                              </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
                            <div style="width:60%"
                                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"></div>
                        </div>
                    </div>

                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-900 bg-purple-200">
                                Bootstrap/Tailwind
                              </span>
                            </div>
                            <div class="text-right">
                              <span class="text-xs font-semibold inline-block text-purple-700">
                                50%
                              </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div style="width:50%"
                                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-900"></div>
                        </div>
                    </div>

                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-200">
                                Java
                              </span>
                            </div>
                            <div class="text-right">
                              <span class="text-xs font-semibold inline-block text-red-600">
                                20%
                              </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                            <div style="width:20%"
                                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                    </div>

                </div>

            </div> <!-- End Row -->
        </div>
    </section>
</template>

<script>
import Particles from "./Particles.vue";
    export default {
        name: "aboutSection",
        components: {Particles},
    }
</script>

<style scoped>
    #particles-js {
        position : absolute;
        width:100%;
        height:100%;
    }
</style>