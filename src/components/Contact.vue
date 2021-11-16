<template>
    <section id="contact"
             class="w-full max-h-screen h-screen snap-start space-y-12 bg-gray-900  font-mono carousel-wrapper flex flex-col justify-center items-center font-mono">

        <h6 class="text-2xl text-red-600">Bientôt en service</h6>
        <div class="container bg-gray-700">
            <form class="text-black ">
                <label class="text-white font-bold underline">Name</label>
                <input
                        type="text"
                        v-model="name"
                        name="name"
                        placeholder="Your Name"
                >
                <label class="text-white font-bold underline">Email</label>
                <input
                        type="email"
                        v-model="email"
                        name="email"
                        placeholder="Your Email"
                >
                <label class="text-white font-bold underline">Message</label>
                <textarea
                        name="message"
                        v-model="message"
                        cols="30" rows="5"
                        placeholder="Message">
          </textarea>

                <input class="bg-gray-900" type="submit" value="Send">
            </form>
        </div>

    </section>
</template>

<script>
    import emailjs from 'emailjs-com';

    export default {
        name: 'ContactUs',
        data() {
            return {
                name: '',
                email: '',
                message: ''
            }
        },
        methods: {
            sendEmail(e) {
                try {
                    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
                        'YOUR_USER_ID', {
                            name: this.name,
                            email: this.email,
                            message: this.message
                        })

                } catch (error) {
                    console.log({error})
                }
                // Reset form field
                this.name = ''
                this.email = ''
                this.message = ''
            },
        }
    }
</script>

<style scoped>
    * {box-sizing: border-box;}

    .container {
        display: block;
        margin:auto;
        text-align: center;
        border-radius: 5px;
        padding: 20px;
        width: 50%;
    }

    label {
        float: left;
    }

    input[type=text], [type=email], textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type=submit] {
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }
</style>