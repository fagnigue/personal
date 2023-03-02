import { component$ } from "@builder.io/qwik";
import { action$, Form } from '@builder.io/qwik-city';
import { EnvelopeIcon } from "../icons/envelope";
import { MapPinIcon } from "../icons/map-pin";
import { PaperAirplaneIcon } from "../icons/paper-airplane";
import { PhoneArrowDownIcon } from "../icons/phone-arrow-down";
export const useContactMe = action$((user) => {
    const test = user.name && user.email && user.message ? true : false;
    return {
        success: test,
    };
});

export default component$(() => {
    const addresses = [
        {
            text: "Abidjan, Côte d'Ivoire",
            icon: <MapPinIcon class="h-6 w-6 inline-block text-secondary" />
        }, 
        {
            text: "+225 0555925604",
            icon: <PhoneArrowDownIcon class="h-6 w-6 inline-block text-secondary" />
        }, 
        {
            text: "devfullcoul@gmail.com",
            icon: <EnvelopeIcon class="h-6 w-6 inline-block text-secondary" />
        }
    ];

    const action = useContactMe()
    return (
        <div id='contact' class='w-full h-auto font-contact'>
            <div class="pt-28 lg:pt-32 pb-20 lg:pb-32 bg-primary">
                    <div class="container mx-auto flex flex-col flex-wrap px-8">
                        <div class="">
                            <span class="text-secondary text-base lg:text-lg font-medium">Contact</span>
                            <h3 class="text-2xl lg:text-3xl font-extrabold uppercase mt-1 lg:mt-2.5">Get In Touch</h3>
                        </div>
                        <div class="flex flex-col lg:flex-row mt-5 lg-mt-10">
                            <div class="lg:w-1/2 w-full">
                                <div class="float-left mb-11 w-full pr-1 lg:pr-[6.25rem] ">
                                    <span class="font-extralight text-sm lg:text-base text-zinc-500">
                                    Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                                    </span>
                                </div>
                                <div class="float-left">
                                    <ul>
                                        {addresses.map((address, index) => {
                                            return (
                                                <li key={index} class="mb-6 text-lg">
                                                    {address.icon}
                                                    <span class="ml-3">{address.text}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div class="lg:w-1/2 w-full">
                                <div class="float-right w-full pl-1 lg:pl-[6.25rem]">
                                    <Form action={action}>
                                        <input class="block w-full h-11 mb-5 px-3  bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" type="text" name="name" id="name" placeholder="Nom" value={action.formData?.get('name')} />
                                        <input class="block w-full h-11 mb-5 px-3 bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" type="email" name="email" id="email" placeholder="Email" value={action.formData?.get('email')} />
                                        <textarea class="block w-full h-16 mb-5 px-3 py-5 bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" name="message" id="message" placeholder="Message"></textarea>
                                        <button class="block w-full h-11 mb-5 bg-secondary align-middle"  type="submit">
                                            Envoyer <span><PaperAirplaneIcon class="h6 w-7 inline-block" /></span> 
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
})